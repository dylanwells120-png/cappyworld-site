// Shared site behavior. Announcement copy lives only in data/announcements.json.

const page = document.body.dataset.page;
const current = document.querySelector(`.nav a[data-nav="${page}"]`);
if (current) current.setAttribute("aria-current", "page");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function badgeLabel(kind) {
  if (kind === "live-event") return "Live event";
  return "Note";
}

function renderAnnouncement(item, { summaryOnly = false } = {}) {
  const card = el("article", item.featured ? "announce featured" : "announce");
  card.id = item.id;
  const meta = el("p", "announce-meta");
  const badge = el("span", item.kind === "live-event" ? "badge" : "badge note", badgeLabel(item.kind));
  meta.append(badge);
  if (item.date) meta.append(el("time", null, item.date));
  card.append(meta, el("h2", null, item.title));
  if (item.summary) card.append(el("p", "summary", item.summary));
  if (!summaryOnly) {
    for (const paragraph of item.body || []) card.append(el("p", null, paragraph));
  }
  return card;
}

async function loadAnnouncements() {
  const url = document.body.dataset.announcements;
  if (!url) return [];
  const response = await fetch(url);
  if (!response.ok) throw new Error(`announcements ${response.status}`);
  const data = await response.json();
  return Array.isArray(data.announcements) ? data.announcements : [];
}

const listRoot = document.querySelector("#announcement-list");
const featuredRoot = document.querySelector("#featured-announcement");

if (listRoot || featuredRoot) {
  loadAnnouncements().then((items) => {
    const featured = items.find((item) => item.featured) || items[0];
    if (featuredRoot && featured) {
      featuredRoot.replaceChildren(renderAnnouncement(featured, { summaryOnly: true }));
      const more = el("a", "more", "Full announcement");
      const base = featuredRoot.dataset.more || "announcements/";
      more.href = `${base}#${featured.id}`;
      featuredRoot.append(more);
    }
    if (listRoot) {
      const ordered = [...items.filter((item) => item.featured), ...items.filter((item) => !item.featured)];
      listRoot.replaceChildren(...ordered.map((item) => renderAnnouncement(item)));
    }
  }).catch(() => {
    const note = el("p", null, "Announcements could not be loaded. Open this site over HTTP from the site folder.");
    (listRoot || featuredRoot).replaceChildren(note);
  });
}
