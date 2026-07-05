<div align="center">

<img src="icons/og-image.png" alt="PileUp — POTA · SOTA Operating Log" width="720">

# PileUp

**A live POTA &amp; SOTA spotting and QSO logging app — installable, offline-ready, zero sign-up.**

[![Live app](https://img.shields.io/badge/live_app-cdburgess75.github.io/PileUp-f0923c?style=flat-square)](https://cdburgess75.github.io/PileUp/)
[![smoke tests](https://github.com/cdburgess75/PileUp/actions/workflows/smoke.yml/badge.svg)](https://github.com/cdburgess75/PileUp/actions/workflows/smoke.yml)
[![PWA](https://img.shields.io/badge/PWA-installable-2E8B7A?style=flat-square)](#-install-as-an-app)
[![Offline](https://img.shields.io/badge/works-offline-2E8B7A?style=flat-square)](#-install-as-an-app)
[![Runtime deps](https://img.shields.io/badge/runtime_deps-0-8bb4e8?style=flat-square)](#-architecture)
[![License](https://img.shields.io/badge/license-MIT-8bb4e8?style=flat-square)](LICENSE)

[**Open the app**](https://cdburgess75.github.io/PileUp/) · [Features](#-features) · [Install](#-install-as-an-app) · [Data sources](#-data-sources) · [Development](#-development)

</div>

---

PileUp is a single-file progressive web app for amateur radio operators who chase
**Parks on the Air (POTA)** and **Summits on the Air (SOTA)** activations. Open it in
any browser, add it to your home screen, and it runs like a native app — fully
offline, with no account, no sign-up, and no tracking.

<div align="center">

| Live spots | Logbook |
|:---:|:---:|
| <img src="docs/screenshot-spots.png" alt="Live POTA spots with band, mode, distance and worked indicators" width="330"> | <img src="docs/screenshot-log.png" alt="QSO logbook with CSV and ADIF export" width="330"> |

</div>

---

## ✨ Features

### 📡 Spots
- **Live feeds** — POTA from `api.pota.app`, SOTA from `sota.org.uk`
- **Auto-refresh** every 60 s, pausing when the tab is hidden or after repeated failures
- **Filter** by mode (All / CW / Phone / Data), band chip, or free-text search
- **Sort** by frequency or age — your filters and sort order persist across reloads
- **Distance &amp; bearing** to each activation from your home coordinates
- **Worked indicator** — spots you've logged today (UTC) are struck through until 0000 UTC
- **Freshness cues** — spots older than 45 min dim; the last fetch is cached for offline reload

### 📒 Logbook
- **One-tap logging** — hit **＋ log** on any spot to pre-fill a QSO entry
- **Duplicate detection** — warns when you've already worked a station today
- **Edit &amp; delete** — inline two-tap confirm, plus a delete action in the edit modal
- **Live entry count** badge on the nav
- **Export CSV** — spreadsheet-friendly and chronological
- **Export ADIF** — imports into most logging software, with `POTA_REF` / `SOTA_REF` tags

### 🛠 Tools
- Save your **callsign, coordinates, and Maidenhead grid** — with GPS auto-locate
- **Font-size** scale (three steps) and **24 h / 12 h** local clock toggle
- **Dark / Light theme** switch
- **Kiosk mode** — fullscreen with wake-lock for a field-day dashboard

---

## 📲 Install as an app

| Platform | How |
|---|---|
| **iOS / iPadOS** | Safari → Share → **Add to Home Screen** |
| **Android** | Chrome → ⋮ → **Add to Home Screen** |
| **Desktop** | Chrome / Edge → install icon in the address bar |

Everything is cached on-device. **No account, no sign-up, no tracking.**

---

## 🔌 Data sources

| Program | Endpoint |
|---|---|
| POTA | `https://api.pota.app/spot/activator` |
| SOTA | `https://api-db2.sota.org.uk/api/spots/40/all` |

When a browser blocks direct cross-origin requests (common in iOS in-app browsers),
PileUp falls back through a relay chain — **allorigins → corsproxy.io → thingproxy** —
so spots keep loading.

---

## 🧱 Architecture

PileUp is deliberately tiny and dependency-free at runtime:

| File | Role |
|---|---|
| `index.html` | The entire app — HTML, CSS, and JS in one file |
| `sw.js` | Service worker for offline caching |
| `manifest.webmanifest` + `icons/` | PWA shell and icons |

No framework, no bundler, no build step. GitHub Pages deploys straight from the
`main` branch root.

---

## 💻 Development

```bash
npm install          # dev-only: jsdom for the smoke tests
npm test             # 3 smoke tests: syntax, getElementById coverage, jsdom boot
```

The smoke suite also runs on every push and pull request via
[GitHub Actions](.github/workflows/smoke.yml).

---

## 📄 License

Released under the [MIT License](LICENSE).

<div align="center">
<sub>Built for operators, by an operator · 73</sub>
</div>
