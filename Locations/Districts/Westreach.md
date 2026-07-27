---
dg-publish: true
type: district
aliases:
cover: "[[location_Westreach.webp]]"
created: 2026-05-25
modified: 2026-07-27
parent: "[[Old Valence]]"
associations:
  - "[[West Valence Saints]]"
tags:
---

# Notes

District notably under the control of the [[West Valence Saints]] - though the harbor area belongs to the [[Old Valence Stevedore Union]].

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
        - district.contains(link("Westreach"))
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true

```

