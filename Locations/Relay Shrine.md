---
dg-publish: true
type: location
aliases:
cover: "[[location_RelayShrine.webp]]"
created: 2026-06-29
modified: 2026-07-16
district: "[[Cloud District]]"
parent: "[[Tier 2]]"
associations:
  - "[[Cult of the Machine God]]"
tags:
---

# Notes

A shrine to the [[Cult of the Machine God|Machine God]] located on [[Tier 2]] of the [[BB Megatower]].

- the priests here helped the party trace the cell number of the [[Sterling Corvain]]
- [[Katriel Buchanon|Kat]] discovered that one of the door levers at the shrine was broken such that the whole place would explode if it was pulled. Fortunately the priests fixed it correctly.

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
        - formula.location_names.contains("Relay Shrine")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps









![[admin/assets/location_bbmegatower_tier2_relayshrine.webp]]
