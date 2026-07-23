---
dg-publish: true
type: main location
cover:
created: 2026-04-23
modified: 2026-07-23
district: "[[Westreach]]"
parent:
associations:
  - "[[Sludge Farmers]]"
  - "[[Bellanova Family|Bellanovas]]"
  - "[[The Driftwarden]]"
  - "[[Sewer Goblins]]"
  - "[[Cult of the Machine God]]"
tags:
---

# Notes

- [[Crownlight Media]] made it sound like there is going to be some kind of attempt to "bring order" to the sewers

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
        - parent.contains("Not Far Sewer")
    order:
      - file.name
    indentProperties: true

```

### # Quests

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
        - formula.location_names.contains("Not Far Sewer")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps


![[admin/assets/location_notfarsewer_filtershrine.webp]]
![[admin/assets/location_notfarsewer_pipejunction.webp]]
![[admin/assets/location_notfarsewer_sludgefarm.webp]]
![[admin/assets/location_notfarsewer_slimefight.webp]]
![[admin/assets/location_notfarsewer_pumpingstation_blockagefight.webp]]
![[admin/assets/location_notfarsewer_pumpingstation_blockage.webp]]
![[admin/assets/location_notfarsewer_pumpingstation.webp]]
![[admin/assets/location_notfarsewer_floodgatebazaar.webp]]
![[admin/assets/location_notfarsewer_boneculvert_combat.webp]]
