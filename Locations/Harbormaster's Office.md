---
dg-publish: true
aliases:
type: location
cover: "[[location_Harbormaster'sOffice.webp]]"
created: 2026-07-26
modified: 2026-07-26
district: "[[Cloud District]]"
parent: "[[Deadwater Wharf]]"
associations:
tags:
  - under_construction
---



# Notes


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
        - parent.contains("Harbormaster's Office")
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
        - formula.location_names.contains("Harbormaster's Office")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```


# Maps





