---
title: Heart of Valence
dg-publish: true
aliases:
type: district
cover: "[[location_HeartofValence.webp]]"
created: 2026-06-01
modified: 2026-07-14
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
  - type: table
    name: District-embed
    filters:
      and:
        - district.contains("Heart of Valence")
        - parent.isEmpty()
```

# NPCs

![[0 NPC Index.base#Location-embedonly]]




# Map
