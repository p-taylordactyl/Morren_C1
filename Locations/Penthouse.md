---
dg-publish: true
type: location
aliases:
cover: "[[location_ThePenthouse.webp]]"
created: 2026-06-08
modified: 2026-07-16
district: "[[Cloud District]]"
parent: "[[BB Megatower]]"
associations:
tags:
---

# Notes

- Top of the BB Megatower, visited for quest [[Penthouse Signal Rehearsal]]
- space was supposed to be abandoned but actually appears to be some kind of bougie OogBnB/rental situation 

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
        - formula.location_names.contains("Penthouse")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps








![[admin/assets/location_bbmegatower_penthouse.webp]]
