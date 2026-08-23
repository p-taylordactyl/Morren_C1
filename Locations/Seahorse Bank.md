---
dg-publish: true
aliases:
type: location
cover: "[[location_ValencianSeahorseBank-DeadwaterWharf.webp]]"
created: 2026-07-28
modified: 2026-08-23
district: "[[Cloud District]]"
parent: "[[Deadwater Wharf]]"
associations:
  - "[[Valencian Seahorses]]"
tags:
  - under_construction
---



# Notes

- location where [[Gideon Oublier]] pretended to be [[Victor Halden]] and stole 1 of the 4 data stick keys needed to unlock...something.

### Points of Interest


```base
filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: Sublocations-embed
    filters:
      and:
        - parent.contains("Valencian Seahorse Bank - Deadwater Wharf")
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
        - formula.location_names.contains("Seahorse Bank")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain
```


# Maps











