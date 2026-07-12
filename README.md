<div align="center">

<img src="icons/og-image.png" alt="PileUp — POTA · SOTA Operating Log" width="680">

**Live POTA &amp; SOTA spots + QSO logging. Installs like an app, works offline, no sign-up.**

[![Live app](https://img.shields.io/badge/▶_open_the_app-f0923c?style=for-the-badge)](https://cdburgess75.github.io/PileUp/)

[![smoke tests](https://github.com/cdburgess75/PileUp/actions/workflows/smoke.yml/badge.svg)](https://github.com/cdburgess75/PileUp/actions/workflows/smoke.yml)
[![PWA](https://img.shields.io/badge/PWA-offline_ready-2E8B7A?style=flat-square)](#-get-it-on-your-phone)
[![License](https://img.shields.io/badge/license-MIT-8bb4e8?style=flat-square)](LICENSE)

</div>

---

## 🚀 How it works

1. **Open** [the app](https://cdburgess75.github.io/PileUp/) — live POTA &amp; SOTA spots load instantly
2. **Tap a spot → ＋ log** — the QSO form is pre-filled; just add signal reports and save
3. **Chase efficiently** — worked stations get struck through until the UTC day rolls over
4. **Export** your log as CSV or ADIF whenever you like

<div align="center">

| 📡 Live spots | 📒 Searchable log |
|:---:|:---:|
| <img src="docs/screenshot-spots.png" alt="Live spots with band colors, distance, and worked strikethrough" width="320"> | <img src="docs/screenshot-log.png" alt="Logbook filtered by typing 20m in the search box" width="320"> |
| Band chips, mode filters, distance &amp; bearing — worked calls struck through | Search anything — even `20m` finds every 14 MHz contact |

</div>

## 📲 Get it on your phone

| | |
|---|---|
| **iPhone / iPad** | Safari → Share → **Add to Home Screen** |
| **Android** | Chrome → ⋮ → **Add to Home Screen** |
| **Desktop** | Chrome / Edge → install icon in the address bar |

Everything stays on your device — **no account, no tracking**.

## ✨ Everything it does

- Live spots from the POTA &amp; SOTA networks, refreshed every 60 s
- Filter by band, mode, or free text · sort by frequency or age
- Distance &amp; bearing to every activation from your QTH
- Duplicate warning and per-UTC-day worked strikethrough
- Searchable logbook with CSV &amp; **ADIF** export (`POTA_REF` / `SOTA_REF` included)
- Dark &amp; light themes, kiosk mode with wake-lock, GPS grid-square lookup

<details>
<summary><b>🔧 For developers</b></summary>
<br>

The entire app is one file — `index.html` (HTML + CSS + JS), plus `sw.js` for
offline caching and the PWA manifest/icons. No framework, no build step.
GitHub Pages deploys from `main`.

```bash
npm install   # dev-only: jsdom
npm test      # smoke tests (also run in CI)
```

Spots come from `api.pota.app` and `api-db2.sota.org.uk`, with a CORS relay
fallback for restrictive in-app browsers.

</details>

---

<div align="center">
<sub>MIT licensed · Built for operators, by an operator · 73 📻</sub>
</div>
