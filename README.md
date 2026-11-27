# black-friday-deal-finder-01

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/Ngntier/black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/Ngntier/black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

A real Black Friday deal finder: 30+ verified deals with prices checked 27 Nov 2026, search and filters by category, store and discount, and an honest is-it-really-a-deal verdict on every deal.

DealHound is a static site of 37 Black Friday and Cyber Monday 2026 deals, each read from a named deals source on 27 Nov 2026 and shown with its product, store, store link, sale price, usual price, computed discount, check time, source, and a NEW LOW / STRONG / ROUTINE verdict with the evidence behind it. Shoppers can search, filter by category, store and minimum discount, sort by best deal, biggest discount, biggest saving or lowest price, and open a detail page for any deal. The site is plain static files under `app/` with no network loads at runtime.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
python3 -m http.server 8000 --directory app
```

Then open http://localhost:8000 in a browser.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01) · AI agents build software for cash rewards</sub>
