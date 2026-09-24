const NAME_MAX = 16;
const TIMEOUT_MS = 5000;
const MAX_PLAYERS = 24;
const ROOM_KEY = "park";

function sanitizeName(raw) {
  const text = String(raw || "")
    .split("")
    .filter((ch) => /[a-zA-Z0-9 '\-]/.test(ch))
    .join("");
  return text.split(/\s+/).filter(Boolean).join(" ").slice(0, NAME_MAX);
}

function sanitizeGender(raw) {
  return raw === "female" ? "female" : "male";
}

function sanitizeId(raw) {
  const cleaned = String(raw || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40);
  return cleaned.length >= 8 ? cleaned : "";
}

function makeId() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return `c${[...bytes].map((b) => b.toString(16).padStart(2, "0")).join("")}`;
}

function num(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function sanitizePose(raw) {
  const data = raw && typeof raw === "object" ? raw : {};
  return {
    x: num(data.x),
    y: num(data.y),
    z: Math.max(0, num(data.z)),
    h: num(data.h),
    walking: Boolean(data.walking),
    flop: Math.max(0, num(data.flop)),
    level: data.level === "house" ? "house" : "world",
  };
}

function peerPublic(entry) {
  return {
    id: entry.id,
    name: entry.name,
    gender: entry.gender,
    x: entry.x,
    y: entry.y,
    z: entry.z,
    h: entry.h,
    walking: entry.walking,
    flop: entry.flop,
    level: entry.level,
  };
}

function prune(peers, now) {
  for (const [pid, entry] of Object.entries(peers)) {
    if (now - entry.seen > TIMEOUT_MS) delete peers[pid];
  }
}

async function loadRoom(env) {
  if (!env.ROOM) return { peers: {} };
  const data = await env.ROOM.get(ROOM_KEY, "json");
  return data && typeof data === "object" && data.peers ? data : { peers: {} };
}

async function saveRoom(env, room) {
  if (!env.ROOM) return;
  await env.ROOM.put(ROOM_KEY, JSON.stringify(room), { expirationTtl: 60 });
}

function upsert(room, raw, now) {
  prune(room.peers, now);
  const data = raw && typeof raw === "object" ? raw : {};
  const pid = sanitizeId(data.id) || makeId();
  let entry = room.peers[pid];
  if (!entry && Object.keys(room.peers).length >= MAX_PLAYERS) {
    return { error: "park is full", status: 503 };
  }
  const name = sanitizeName(data.name);
  const gender = sanitizeGender(data.gender);
  const pose = sanitizePose(data);
  if (!entry) {
    entry = { id: pid, seen: now, name: name || "Friend", gender, ...pose };
    room.peers[pid] = entry;
  } else {
    Object.assign(entry, pose);
    entry.gender = gender;
    entry.seen = now;
    if (name) entry.name = name;
  }
  return { entry };
}

function others(room, pid) {
  return Object.values(room.peers)
    .filter((e) => e.id !== pid)
    .map(peerPublic);
}

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

async function readBody(request) {
  if (request.method === "GET" || request.method === "HEAD") return null;
  const text = await request.text();
  if (!text) return null;
  try {
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return undefined; // bad json sentinel
  }
}

export async function onRequest(context) {
  const { request, env, params } = context;
  const route = Array.isArray(params.route) ? params.route.join("/") : params.route || "";
  const path = `/mp/${route}`.replace(/\/+$/, "") || "/mp";
  const method = request.method;

  if (method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  const body = await readBody(request);
  if (body === undefined) return json(400, { error: "bad json" });

  const now = Date.now();
  const room = await loadRoom(env);

  let result;
  if (method === "POST" && path === "/mp/join") {
    const up = upsert(room, body, now);
    if (up.error) result = up;
    else {
      await saveRoom(env, room);
      result = { id: up.entry.id, peers: others(room, up.entry.id) };
    }
  } else if (method === "POST" && path === "/mp/sync") {
    if (!sanitizeId(body?.id)) result = { error: "missing id", status: 400 };
    else {
      const up = upsert(room, body, now);
      if (up.error) result = up;
      else {
        await saveRoom(env, room);
        result = { peers: others(room, up.entry.id) };
      }
    }
  } else if (method === "POST" && path === "/mp/leave") {
    const pid = sanitizeId(body?.id);
    if (pid) delete room.peers[pid];
    await saveRoom(env, room);
    result = { ok: true };
  } else if (method === "GET" && path === "/mp/status") {
    prune(room.peers, now);
    result = { ok: true, players: Object.keys(room.peers).length };
  } else {
    return json(404, { error: "not found" });
  }

  if (result.error) return json(result.status || 400, result);
  return json(200, result);
}
