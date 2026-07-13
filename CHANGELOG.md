# Changelog

Notable changes to PileUp. Version numbers follow `YYYY.MM.DDx` and always
match the `VERSION` constant in `index.html`, the service-worker cache name,
and the README badge (enforced by the test suite).

## 2026.07.14b

**Changed**
- Tapping a spot row now always toggles expand/collapse; logging happens only
  on the explicit ＋ buttons (an expanded row previously couldn't be closed
  by tapping it — it opened the log form instead)
- Compact spot rows are now a fixed-column grid so frequencies, callsigns,
  mode badges, band pills, ages, and ＋ buttons align down the list

## 2026.07.14a

**Changed**
- Spot rows now start collapsed to one compact line (▶ triangle, frequency,
  callsign, band, age, ＋). Tap a row to expand its full details; tap the
  expanded row to log it; tap the triangle to collapse. The compact ＋ logs
  straight from the collapsed row, and expansion survives auto-refresh

## 2026.07.13d

**Added**
- World view on the Map tab: a real world map (Natural Earth coastline,
  embedded — still zero network dependencies) with spots and logged contacts
  plotted geographically. The bearing-based radar remains as a second view;
  your choice persists

## 2026.07.13c

**Fixed**
- The update banner rendered under the iPhone status bar, where taps go to
  the OS instead of the page — the Update button couldn't be pressed. The
  banner now slides up from the bottom, above the nav bar
- Tapping Update now always reloads within ~1 s even if the browser is slow
  to hand control to the new service worker

## 2026.07.13b

**Added**
- Map tab: an azimuthal "QTH radar" centered on your station — live spots as
  hollow amber circles and logged contacts as green dots, placed by true
  bearing and log-scaled distance, with range rings and tap-for-details.
  Works fully offline; no map tiles needed
- Logging from a spot now captures the activation's coordinates, so new
  contacts appear on the map (backup/restore and edits preserve them)

## 2026.07.13a

**Added**
- Hunter stats panel on the Log tab (▤ Stats): total QSOs, unique callsigns,
  unique references, and active days, plus QSOs-by-band bars in the app's
  band colors and QSOs-by-mode counts — all computed live from the log

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
