# CappyWorld website

This folder is the static site root for Cloudflare Pages. **BASE_PATH=/** — publish `site/` itself, not the repository root and not `web/` alone.

| Page | File |
|---|---|
| Home | `index.html` |
| Play | `play/index.html` (embeds the three.js game in `play/game.html`) |
| Gallery | `gallery/index.html` |
| Announcements | `announcements/index.html` |

Announcement copy is only in `data/announcements.json`. The home page and the announcements page both read that file.

## Preview

The game loads models with `fetch`, so open the site over HTTP. Do not double-click `index.html`.

```bash
cd site
python3 -m http.server 8765
```

Then open http://127.0.0.1:8765/

## Cloudflare Pages (free)

1. Create a Pages project and point it at this repository.
2. Build command: leave empty to publish the snapshot already in `site/`. To rebuild the game on the host, use `npm ci --ignore-scripts -w cappyworld-web -w @cappy/schema -w @cappy/sim -w @cappy/runtime && npm run build`.
3. Build output directory: **`site`**
4. **BASE_PATH=/** (the default). Do not mount the site on a subpath; links are relative inside this folder and the public URL is the domain root.

Direct upload works too: upload the contents of `site/` so `index.html` is at the top of the upload.

`npm run build` at the repo root refreshes `play/game.html`, `dist/game.js`, `css/play.css`, and `assets/`. It does not overwrite the marketing pages.

The HUD line "Ruckus" is the knock-over score, not the old product name.
