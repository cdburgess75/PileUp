# Changelog

Notable changes to PileUp. Version numbers follow `YYYY.MM.DDx` and always
match the `VERSION` constant in `index.html`, the service-worker cache name,
and the README badge (enforced by the test suite).

## 2026.07.12b

**Added**
- Backup & restore card in Tools: one-tap JSON backup of the log, station,
  and settings; restore merges contacts back with duplicate detection
- ADIF import — bring in logs from other software; duplicates are skipped
- The app now requests persistent storage so the log survives browser
  storage-cleanup sweeps

## 2026.07.12a

**Fixed**
- Attribute escaping corrupted values containing `"` (escape order was wrong)
- "Updated" toast never showed after editing a log entry — it always said "Logged"
- CSV export now neutralizes leading `=` `+` `-` `@` so hostile text from a
  logged spot can't execute as a spreadsheet formula
- SOTA timestamps parsed as local time instead of UTC, skewing spot ages;
  both feeds now go through one tolerant UTC parser, and invalid dates render
  as "—" instead of "NaNh NaNm"

**Changed**
- Removed the defunct thingproxy relay from the CORS fallback chain
- Added a Content-Security-Policy allowlisting the two spot APIs and two relays
- Spot refreshes no longer overlap (in-flight guard); GPS lookup times out
  after 10 s instead of hanging
- Keyboard accessibility: spot rows and log actions are focusable and respond
  to Enter/Space; the log dialog takes focus on open and restores it on close
- Filter inputs are debounced
- CI installs with `npm ci` and caches npm; Dependabot watches actions and npm

## 2026.07.11c

**Added**
- App version shown in the Tools footer
- Update banner: when a new version is deployed, a card slides down with an
  Update button; the service worker waits for authorization instead of
  force-activating

## 2026.07.11b

**Changed**
- Theme toggle is now a round sun/moon icon (☀ in dark mode, ☾ in light)

## 2026.07.11a

**Added**
- Logbook search: filters entries live across callsign, reference, mode, date,
  notes, frequency — and band names (`20m` matches every 14 MHz contact)

## 2026.07.04d

**Added**
- Worked-spot indicator: callsigns logged on the current UTC day are struck
  through in the spot list with a ✓ worked tag until 0000 UTC

## 2026.07.04c

**Fixed**
- App icon rendered as a black square on the home screen; redesigned to a
  solid amber tile with the antenna mark

## Earlier

Initial public releases: live POTA/SOTA spots with band/mode/text filtering,
distance and bearing, QSO logbook with CSV and ADIF export, station tools
(GPS grid lookup, themes, kiosk mode), PWA install and offline support.
