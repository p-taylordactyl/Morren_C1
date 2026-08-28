---
dg-publish: true
type: location
aliases:
cover: "[[location_EnergySiphonTower.webp]]"
created: 2026-06-01
modified: 2026-07-16
district: "[[Crownlight Strip]]"
parent: "[[Old Valence]]"
associations:
  - "[[Oligarchs]]"
tags:
---

# Notes

A massive tower siphoning energy from [[Old Valence]] up to the floating cities above, where the [[Oligarchs]] live.

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
        - formula.location_names.contains("Energy Siphon Tower")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps















