# Changelog

Notable changes to PileUp. Version numbers follow `YYYY.MM.DD.NNN` (a
zero-padded three-digit counter of that day's releases, e.g. 2026.07.15.006)
and always match the `VERSION` constant in `index.html`, the service-worker
cache name, and the README badge (enforced by the test suite). Releases
before 2026.07.15.5 used a trailing letter; 2026.07.15.5 itself predates
the zero-padding.

## 2026.07.16.011

**Changed**
- New home-screen icon: a white pine tree with signal waves on a deep-forest
  green tile (`#1b6b3a`), replacing the orange antenna mark. Regenerated the
  SVG plus the 192/512/apple-touch PNGs as full-bleed squares (no corner
  artifacts), kept maskable-safe. Already-installed users may need to remove
  and re-add the app to see the new icon (the OS caches home-screen icons)

## 2026.07.16.010

**Added**
- Easier install: on Android/desktop a one-tap **Install** button (and a
  dismissible banner) appears via the browser's install prompt. On iPhone —
  where Apple allows no automated install — a short hint shows the Safari
  Share → Add to Home Screen steps. Everything hides once installed
- **QR code** on the Tools → Share card: point another operator's phone at it
  to open PileUp instantly, no install needed
- Tools → "Install on your phone" card that also makes clear you can just use
  the link — installing only adds the icon, offline, and fullscreen

## 2026.07.16.009

**Changed**
- Band filter chips now match the solid spot-row pills (band-colored fill,
  contrast-picked label), dimmed until selected
- Band filter is now **multi-select**: tap several bands to show them all
  together; "All bands" clears the selection. Your choice persists

## 2026.07.16.008

**Added**
- Tools → "Upload / submit logs" card: one-tap ADIF export plus direct links to
  the POTA, QRZ, LoTW, and Club Log upload pages, with short steps. Clarifies
  that POTA hunter credit is automatic and you only submit if you activated

## 2026.07.16.007

**Changed**
- Band pills are now solid band-colored fills with a legible number instead of
  a hollow colored ring. The number is white on the deep bands and auto-switches
  to dark on the bright ones (40 m yellow, 30 m, 20 m, 17 m) where white would be
  unreadable

## 2026.07.16.006

**Fixed**
- Pinch-to-zoom now works in the full-screen map at the home zoom level. The
  map kept `touch-action:pan-y` (so the page can scroll under it at 1× in the
  normal view), which swallowed the pinch in full screen where there's no page
  to scroll — full screen now hands every gesture to the map

## 2026.07.16.005

**Added**
- Full-screen map: a ⛶ button expands the map to fill the whole screen (over
  the header and nav); tap ✕ or press Esc to exit. Uses a CSS overlay so it
  works in the installed iOS PWA too, and pinch/pan/zoom keep working

## 2026.07.16.004

**Changed**
- Local clock nudged from blue to sky-cyan so it reads distinctly from the
  blue grid-square in the header (green Zulu unchanged)

## 2026.07.16.003

**Changed**
- Both header clocks now show seconds, and use LED-style faces: the Zulu clock
  is green, the local clock blue, each with a matching glow (darker, readable
  variants in light mode)

## 2026.07.16.002

**Changed**
- Header clocks: the UTC clock is now labelled just **Zulu** and rendered in
  green (was orange, the brand color); the local clock's label is the short
  zone abbreviation (CDT, PST…) instead of the full IANA name, and both times
  are the same size so they sit together. Both stay pinned in the header,
  side by side, when it collapses on scroll

## 2026.07.16.001

**Added**
- Callsign lookup in the log form: type a callsign and press Enter (or leave
  the field) and PileUp fills the operator's **Name** and shows their QTH and
  grid, via HamDB's free, keyless database (same direct-then-relay path as the
  spot feed; strongest for FCC/US calls). The new Name field is shown in the
  log list and carried through CSV and ADIF export/import (`NAME`). A typed
  name is never overwritten

## 2026.07.15.009

**Changed**
- The World map now fills the screen: it opens centered on your QTH at the
  widest zoom that leaves no empty bands, and you pan/zoom the world within
  it (Google-Maps style). Rotation and resize re-fit automatically
- Map colors: deep-blue ocean, warm land, faint graticule — and spot rings
  are now colored by their band, matching the chips and pills everywhere else

## 2026.07.15.008

**Added**
- Log tab: All / POTA / SOTA / Other segmented filter, styled like the
  Spots tab switch. Entries classify by their reference format (XX-NNNN =
  POTA, refs with "/" = SOTA, everything else = Other), your choice
  persists, and exports/imports still cover the whole book

## 2026.07.15.007

**Fixed**
- The header tagline could run into the sun/moon glyph; the brand row now
  reserves space for it

## 2026.07.15.006

**Added**
- Collapsed spot rows now show the park/summit reference in its own aligned
  column between the band pill and the age. Under width pressure it yields
  only after the mode badge; callsign and band pill still never do

## 2026.07.15.5

**Changed**
- Version scheme: numeric day-release counter (`2026.07.15.5`) replaces the
  trailing letter (`2026.07.15d`)

## 2026.07.15d

**Changed**
- Theme toggle is now a bare sun/moon glyph pinned to the header's top-right
  corner — no circle ring, and it no longer wraps onto its own line, making
  the header a full row shorter

## 2026.07.15c

**Changed**
- Header layout: the version now sits directly under the PILEUP wordmark
  with the tagline beside it, instead of stretching the tagline line

## 2026.07.15b

**Added**
- The running version now shows in the header next to the app title
  (it was previously only at the bottom of the Tools tab)

## 2026.07.15a

**Added**
- Map zoom: pinch to zoom and drag to pan (mouse wheel and double-tap on
  desktop), up to 10×, with a ⟲ reset button. Markers and line weights
  re-scale so they stay readable instead of ballooning. Page scrolling
  still works over the map at 1×

**Changed**
- Consistent 8px breathing gap between the frequency and the callsign in
  compact spot rows (they sat too close)

## 2026.07.14e

**Fixed**
- Band pills now stay visible in collapsed rows even when a long portable
  call (e.g. IS0/IU2UEQ/P) tightens the layout: the row goes denser instead
  of dropping the pill — the MHz unit hides, the pill slims to its number
  ("20" instead of "20 m"), and only the mode badge ever yields

## 2026.07.14d

**Fixed**
- Band pills disappeared from spot rows on common phone widths (e.g. 393 px
  iPhones): column shedding now measures the actual list against the actual
  width instead of using a fixed breakpoint, so pills only hide when a long
  callsign genuinely leaves no room. Re-evaluates on rotation/resize
- Light theme: unselected band chips were neon-on-white and hard to read
  (17 m / 20 m especially); their text and borders now darken toward ink
  for proper contrast

## 2026.07.14c

**Fixed**
- Compact spot rows never truncate callsigns: the callsign column sizes
  itself to the longest call in the current list each refresh, so full
  calls stay visible while every column stays aligned

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
