---
dg-publish: true
type: location
cover: "[[location_BoneCulvert.webp]]"
created: 2026-05-21
modified: 2026-07-16
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
tags:
---

# Notes

- creepy tunnel full of undead and scavengers
- [[Vesh Hollowbone]] helped the party fight off undead trying to complete a ritual but died during the combat

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
        - formula.location_names.contains("Bone Culvert")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps


![[admin/assets/location_notfarsewer_boneculvert_combat.webp]]
