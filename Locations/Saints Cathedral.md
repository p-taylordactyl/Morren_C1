---
dg-publish: true
type: location
aliases:
  - Cathedral
cover: "[[location_SaintsCathedral.webp]]"
created: 2026-06-01
modified: 2026-07-16
district: "[[Westreach]]"
parent:
associations:
  - "[[West Valence Saints]]"
tags:
---

# Notes

Headquarters of the [[West Valence Saints]].

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
        - formula.location_names.contains("Saints Cathedral")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps





















