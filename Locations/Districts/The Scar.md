---
dg-publish: true
type: district
aliases:
  - Scar
cover: "[[location_TheScar.webp]]"
created: 2026-06-01
modified: 2026-07-27
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
        - district.contains(link("The Scar"))
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true

```

