---
dg-publish: true
type: location
aliases:
cover: "[[location_ransomlocation.webp]]"
created: 2026-07-09
modified: 2026-07-29
district: "[[Cloud District]]"
parent: "[[Tier 2]]"
associations:
  - "[[Sterling Corvain]]"
tags:
---

# Notes

- the location given by the party's [[Sterling Corvain]] to trade either [[Maximilius Adkins|Max]] or [[Keena O'Malley|Keena]] for [[Malcolm Oublier]].
- appears to be some kind of cargo warehouse

# NPCs

```base
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  location_names: locations.join(", ")
  cover_url: if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)
views:
  - type: cards
    name: Location-embedonly
    filters:
      and:
        - formula.location_names.contains("Ransom Location")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps






![[admin/assets/location_bbmegatower_tier2_ransomlocation.webp]]
