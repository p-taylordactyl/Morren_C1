---
dg-publish: true
type: location
aliases:
cover: "[[location_Tier2.webp]]"
created: 2026-07-09
modified: 2026-07-29
district: "[[Cloud District]]"
parent: "[[BB Megatower]]"
associations:
  - "[[Bellanova Family]]"
  - "[[Cult of the Machine God]]"
tags:
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
        - parent.contains("Tier 2")
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
        - formula.location_names.contains("Tier 2")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps




![[admin/assets/location_bbmegatower_tier2_combat1.webp]]
![[admin/assets/location_bbmegatower_tier2_relayshrine.webp]]
![[admin/assets/location_bbmegatower_tier2__neoncorridor.webp]]
![[admin/assets/location_bbmegatower_tier2_ransomlocation.webp]]
