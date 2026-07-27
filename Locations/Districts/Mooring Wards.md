---
dg-publish: true
type: district
aliases:
cover: "[[location_MooringWards.webp]]"
created: 2026-06-01
modified: 2026-07-27
district:
parent: "[[Old Valence]]"
associations:
  - "[[Mariner's Reach]]"
tags:
  - under_construction
---

# Notes

District home to [[Mariner's Reach]].

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
        - district.contains(link("Mooring Wards"))
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true

```




