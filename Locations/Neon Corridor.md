---
dg-publish: true
type: location
aliases:
cover: "[[location_NeonCorridor.webp]]"
created: 2026-06-22
modified: 2026-07-16
district: "[[Cloud District]]"
parent: "[[Tier 2]]"
associations:
tags:
---

# Notes

Area of [[Tier 2]] of the [[BB Megatower]] controlled by an orc named [[Bron]].

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
        - formula.location_names.contains("Neon Corridor")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps



![[admin/assets/location_bbmegatower_neoncorridor.webp]]
