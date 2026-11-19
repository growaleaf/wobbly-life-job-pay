# Wobbly Life: Which Job Pays the Most Per Minute?

Static page (no build step, no backend) for a Wobbly Life player who wants to know which job
pays the most per minute, and how many runs they need for a target purchase.

## Files
- `index.html` — the page: job pay table + a runs-needed calculator.
- `data.js` — all job data and the pure calculation functions (`jobById`, `runsNeeded`,
  `perMinuteRange`). Loads as a browser global and as a Node module (`module.exports`), so
  `test.js` and `index.html` run the exact same logic.
- `test.js` — `node test.js`, no dependencies.
- `.nojekyll` — disables Jekyll processing for GitHub Pages.

## Sourcing
Primary source: [Bloxodes](https://bloxodes.com/articles/wobbly-life-how-to-make-money),
dated 2026-11-06 (page states "Updated on November 6, 2026"), fetched with a browser
User-Agent, verified HTTP 200.

Second source checked for every row: [GamePretty](https://gamepretty.com/?p=38717), dated
2021-07-16. Several rows disagree with Bloxodes (Furniture Delivery's cap, Emergency
Response and Paper Round's fixed-vs-ranged pay, Mining's per-ore breakdown) — both figures
are shown on the page, with the GamePretty one flagged as a 2021 source that may be outdated.

`bloxodes.com/wiki/wobbly-life` was also fetched as a candidate second source; it turned out
to be a hub page that links back to the same article rather than an independent numeric
source, so it isn't cited per-row. `progameguides.com` returned HTTP 403 to automated
fetches and was not used. `fandom.com` was not used (crawler-banned, per the build brief).

Space-update jobs (Asteroid Mining, Asteroid Defence, Space Rescue, Space Courier, Space
Diner, Space Disco, Luggage Handler, Space Mechanic) pay Space Credits, a separate currency.
No source found gives per-job Space Credit payouts, so they're named on the page with no pay
figures — not guessed at.

## Ranges, not midpoints
Every pay figure is kept as the range (or single value, or "no fixed figure") the source
actually states. Per-minute rates are shown as `n/a` wherever the source doesn't give both a
low and high time bound (Furniture Delivery's open-ended "2+ minutes", Emergency Response's
"Varies") or doesn't give a fixed pay figure at all (Mining).

## Verification run (2026-11-19)
- `python3 Tools/slop_lint.py index.html data.js` — see command output in `DONE_REPORT.md`.
- `node test.js` — 14/14 passed (target was >= 8), including the Wood Cutting known-answer
  case (2 planks/tree x $5/plank = $10/tree).
- Page served locally and the job table / calculator output checked in the live DOM, not just
  read from source.
