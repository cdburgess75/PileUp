# PileUp

**POTA & SOTA live spots + QSO log — installable PWA**

Live app → **https://cdburgess75.github.io/PileUp/**

---

## What it does

PileUp is a single-file progressive web app for amateur radio operators who chase Parks on the Air (POTA) and Summits on the Air (SOTA) activations. Open it in any browser, install it to your home screen, and use it offline.

### Spots tab
- Live POTA spots from `api.pota.app` and SOTA spots from `sota.org.uk`
- Automatic refresh every 60 seconds (pauses when tab is hidden or after repeated failures)
- Filter by mode (All / CW / Phone / Data), band chip, or free-text search
- Sort by frequency or age
- Distance and bearing to each activation from your home coordinates
- Spots older than 45 minutes shown at reduced opacity
- Spots cached on-device — last fetch survives a reload

### Log tab
- Tap **＋ log** on any spot to pre-fill a QSO entry
- Duplicate callsign detection — warns if you've already worked the same station today
- Edit or delete any entry (two-tap confirm on the list; delete button inside the edit modal)
- Entry count badge on the nav button
- **Export CSV** — spreadsheet-friendly, chronological
- **Export ADIF** — imports into most logging software (POTA\_REF / SOTA\_REF tags included)

### Tools tab
- Save your callsign, latitude/longitude, and Maidenhead grid square
- GPS auto-locate button
- Font-size scale (three steps)
- 24-hour / 12-hour local clock toggle
- Dark / Light theme switch (indigo-on-black dark; slate-on-white light)
- Kiosk mode (fullscreen + wake lock)

---

## Install as a PWA

| Platform | How |
|---|---|
| iOS / iPadOS | Safari → Share → Add to Home Screen |
| Android | Chrome → ⋮ → Add to Home Screen |
| Desktop | Chrome/Edge → address bar install icon |

All data is cached on-device. No account, no sign-up, no tracking.

---

## Data sources

| Program | API |
|---|---|
| POTA | `https://api.pota.app/spot/activator` |
| SOTA | `https://api-db2.sota.org.uk/api/spots/40/all` |

Cross-origin requests fall back through a relay chain (allorigins → corsproxy.io → thingproxy) when direct access is blocked by the browser's CORS policy (common in iOS in-app browsers).

---

## Development

```bash
npm install          # installs jsdom for the smoke tests
node test/smoke.mjs  # 3 tests: syntax, getElementById coverage, jsdom boot
```

The entire app lives in `index.html` (HTML + CSS + JS). `sw.js` handles service-worker caching. `manifest.webmanifest` and `icons/icon.svg` round out the PWA shell.

GitHub Pages deploys automatically from the `main` branch root.

---

## Companion app

[SkyWave](https://cdburgess75.github.io/SkyWave/) — shortwave band guide
