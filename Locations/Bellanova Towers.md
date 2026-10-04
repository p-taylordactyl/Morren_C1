---
dg-publish: true
type: location
aliases:
cover: "[[location_BellanovaTowers.webp]]"
created: 2026-06-01
modified: 2026-07-16
district: "[[Cloud District]]"
parent:
associations:
  - "[[Bellanova Family]]"
tags:
  - under_construction
---

# Notes

Massive towers of tenement housing owned and controlled by the [[Bellanova Family]].

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
        - formula.location_names.contains("Bellanova Towers")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps
























