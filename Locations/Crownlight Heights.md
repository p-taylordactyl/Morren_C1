---
dg-publish: true
type: location
aliases:
cover: "[[location_CrownlightHeights.webp]]"
created: 2026-06-01
modified: 2026-07-16
district:
parent:
associations:
tags:
  - under_construction
---

# Notes

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
        - formula.location_names.contains("Crownlight Heights")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps






