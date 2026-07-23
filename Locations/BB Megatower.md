---
dg-publish: true
type: location
aliases:
cover: "[[location_BBMegatower.webp]]"
created: 2026-06-03
modified: 2026-07-16
district: "[[Cloud District]]"
parent: "[[Bellanova Towers]]"
associations:
  - "[[Bellanova Family|Bellanova Family]]"
tags:
---

# Notes

- Megatower owned by the [[Bellanova Family]] and run by [[Vinny Brassjaw|Brassjaw]].

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
        - parent.contains("BB Megatower")
    order:
      - file.name
    indentProperties: true

```

### Quests

![[0 Quest Index.base#location-embedonly]]

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
        - formula.location_names.contains("BB Megatower")
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
![[admin/assets/location_bbmegatower_wizardfight.webp]]
![[admin/assets/location_bbmegatower_tier2_ransomlocation.webp]]
![[admin/assets/location_bbmegatower_relayshrine.webp]]
![[admin/assets/location_bbmegatower_neoncorridor.webp]]
![[admin/assets/location_bbmegatower_krystals.webp]]
