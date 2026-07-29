---
dg-publish: true
type: location
aliases:
  - bazaar
cover: "[[location_Bazaar]]"
created: 2026-05-08
modified: 2026-07-16
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Sewer Goblins]]"
tags:
---

# Notes

Market run by the [[Sewer Goblins|goblins]] living in the [[Not Far Sewer]].

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
        - formula.location_names.contains("Floodgate Bazaar")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps



![[admin/assets/location_notfarsewer_floodgatebazaar.webp]]
