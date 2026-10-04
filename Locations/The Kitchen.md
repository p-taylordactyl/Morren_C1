---
dg-publish: true
type: location
aliases:
cover: "[[location_TheKitchen.webp]]"
created: 2026-07-09
modified: 2026-07-16
district: "[[Cloud District]]"
parent: "[[Tier 3]]"
associations:
tags:
---

# Notes

- supposed location on [[Tier 3]] of the [[BB Megatower]] where a man named [[Morgo]] makes the drug known as Red Thunder

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
        - formula.location_names.contains("The Kitchen")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps
























