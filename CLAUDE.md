# PileUp — repo conventions

Single-file PWA: the entire app is `index.html` (HTML + CSS + JS), `sw.js` is
the service worker, no build step, zero runtime dependencies. Keep it that way.

## Versioning — read before any release

Scheme: **`YYYY.MM.DD.NNN`** — UTC date plus a **zero-padded three-digit**
release counter for that day.

- Next release on 2026-07-15 would be `2026.07.15.006` (that day already had
  five releases; `.005` was the last).
- First release on a new day starts at `.001`.
- Never use letter suffixes (`2026.07.15d`) — retired 2026-07-15.

The version string lives in **four places that must all change together**:

1. `index.html` — `const VERSION="…"`
2. `sw.js` — `const CACHE = "pileup-…"` (this is what triggers the update banner)
3. `README.md` — the shields.io version badge
4. `package.json` — `version` (date only, e.g. `2026.7.15`; npm needs semver)

Smoke test 4 fails CI if 1–3 disagree, so bump them in the same commit.

## Release checklist

1. Branch from latest `origin/main` (`claude/…` branches; force-with-lease
   push is fine after a merge).
2. Make the change; bump the version in all four places.
3. `npm test` — 4 smoke tests must pass (syntax, DOM-id coverage, jsdom boot,
   version sync).
4. Verify behavior in a real browser (Playwright + `/opt/pw-browsers/chromium`
   when headless) — drive the actual flow, screenshot UI changes.
5. Update `CHANGELOG.md` (Keep-a-Changelog style, newest on top).
6. Commit, push, PR to `main`, merge. GitHub Pages deploys from `main`
   automatically; the installed PWA shows an update banner users must tap.

## Style

- Compact vanilla JS, one `<script>` block, sections marked with
  `/* ============ name ============ */` banners.
- Escape everything rendered via `esc()` (text) / `attr()` (attributes).
- CSS custom properties for theming; support both dark and `[data-theme="light"]`.
- New `getElementById` targets must exist in markup (smoke test 2 enforces).
- Network access is pinned by the CSP meta tag — adding a host means updating it.
