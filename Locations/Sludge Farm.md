---
dg-publish: true
type: location
cover:
created: 2026-04-29
modified: 2026-07-23
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Sludge Farmers]]"
tags:
---

# Notes

- A Point of Interest in the [[Not Far Sewer]] where they [[Sludge Farmers|farm sludge]].
- will move to [[Hood Station]] after the next harvest

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
        - formula.location_names.contains("Sludge Farm")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps



![[admin/assets/location_notfarsewer_sludgefarm.webp]]
