---
dg-publish: true
type: district
aliases:
  - Scar
cover: "[[location_TheScar.webp]]"
created: 2026-06-01
modified: 2026-07-16
parent: "[[Old Valence]]"
associations:
  - "[[Old Guard]]"
tags:
  - under_construction
---

# Notes

Home of the [[Old Guard]].

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
        - formula.location_names.contains("The Scar")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps



