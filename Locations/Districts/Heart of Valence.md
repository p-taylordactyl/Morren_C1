---
dg-publish: true
type: district
aliases:
cover: "[[location_HeartofValence.webp]]"
created: 2026-06-01
modified: 2026-07-27
parent: "[[Old Valence]]"
associations:
  - "[[Cael Foundation]]"
tags:
---

# Notes

District home to the main campus of the [[Cael Foundation]].

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
        - district.contains(link("Heart of Valence"))
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true

```

