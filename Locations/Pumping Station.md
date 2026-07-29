---
dg-publish: true
type: location
aliases:
  - Hot Pipe
cover: "[[location_PumpingStation.webp]]"
created: 2026-05-25
modified: 2026-07-16
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Titan Corporation]]"
  - "[[Box Boys]]"
tags:
---

# Notes

- controls the water flow to various locations near the [[Not Far Sewer]]
- The party defeated a nasty orange slime that was blocking a pipe underneath the station causing significant flow issues
- Previously controlled by the [[Titan Corporation]] until the party convinced the [[Box Boys]] to take it over in the hopes they could then negotiate to further improve [[Hood Station]]'s water flow.

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
        - formula.location_names.contains("Pumping Station")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain
```

# Maps





![[admin/assets/location_notfarsewer_pumpingstation_blockagefight.webp]]
![[admin/assets/location_notfarsewer_pumpingstation_blockage.webp]]
![[admin/assets/location_notfarsewer_pumpingstation.webp]]
