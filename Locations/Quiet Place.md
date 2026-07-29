---
dg-publish: true
type: location
aliases:
cover: "[[location_QuietPlace.webp]]"
created: 2026-06-29
modified: 2026-07-16
district: "[[Cloud District]]"
parent: "[[Tier 2]]"
associations:
tags:
---

# Notes

- the location of the cursed video game Hamlet Keeper, which was behind the mysterious disappearances in the quest [[The Silent Floor]]
- has good enough beds for comfortable rest
- [[Katriel Buchanon|Kat]] helped [[Stonespear]] steal from a [[Cael Foundation]] ATM outside
- 

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
        - formula.location_names.contains("Quiet Place")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps









![[admin/assets/location_quietplace_hamletkeeper.webp]]
