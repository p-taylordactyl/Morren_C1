---
dg-publish: true
type: district
aliases:
cover: "[[location_CrownlightStrip.webp]]"
created: 2026-06-01
modified: 2026-07-16
parent: "[[Old Valence]]"
associations:
  - "[[Crownlight Media]]"
  - "[[NovaStyle Group]]"
  - "[[Infinity Plaza Mall]]"
  - "[[Valencian Seahorses]]"
  - "[[Factions and Groups/Corporate/Paragon Soundworks|Paragon Soundworks]]"
tags:
---

# Notes

District home to the majority of the Corporate Factions.


### Points of Interest

```base
filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: District-embed
    filters:
      and:
        - district.contains("Crownlight Strip")
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true
```

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
        - formula.location_names.contains("Crownlight Strip")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Map