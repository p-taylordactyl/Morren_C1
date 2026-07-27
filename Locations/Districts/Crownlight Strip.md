---
dg-publish: true
type: district
aliases:
cover: "[[location_CrownlightStrip.webp]]"
created: 2026-06-01
modified: 2026-07-27
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

