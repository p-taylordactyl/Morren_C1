---
dg-publish: true
type: district
aliases:
cover: "[[location_CloudDistrict.webp]]"
created: 2026-05-25
modified: 2026-07-27
parent: "[[Old Valence]]"
associations:
  - "[[Hood Station]]"
  - "[[Titan Corporation]]"
  - "[[Bellanova Family]]"
tags:
---

# Notes

District home to [[Hood Station]], the [[Titan Corporation]], and the [[Bellanova Family]].

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
        - district.contains("Cloud District")
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true
```

