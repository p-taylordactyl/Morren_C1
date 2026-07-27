---
dg-publish: true
type: district
aliases:
  - rust yards
cover: "[[location_TheRustYards.webp]]"
created: 2026-06-01
modified: 2026-07-27
parent: "[[Old Valence]]"
associations:
  - "[[Box Boys]]"
tags:
---

# Notes

District home to the [[Box Boys]].

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
        - district.contains(link("The Rust Yards"))
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true

```





