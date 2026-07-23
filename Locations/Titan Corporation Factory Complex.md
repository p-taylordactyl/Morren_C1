---
dg-publish: true
type: location
aliases:
  - Titan Complex
cover: "[[location_TitanCorporationFactoryComplex.webp]]"
created: 2026-06-01
modified: 2026-07-16
district: "[[Cloud District]]"
parent:
associations:
  - "[[Titan Corporation]]"
tags:
---

# Notes

Primary location of [[Titan Corporation]] factories. Site of the accident that led to many deaths and injuries, including [[Keena O'Malley|Keena's]] brother Lorcan O'Malley, the loss of [[Róisín Ward]]'s arm, and the subsequent beating of [[Augustin Devereaux]] (the responsible party) into a coma.

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
        - formula.location_names.contains("Titan Corporation Factory Complex")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps



