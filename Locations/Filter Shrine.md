---
dg-publish: true
type: location
cover: "[[location_notfarsewer_filtershrine.webp]]"
created: 2026-05-08
modified: 2026-07-16
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Cult of the Machine God]]"
tags:
---

# Notes

Place where [[Cult of the Machine God|Cultists of the Machine God]] worship the Machine Spirit that inhabits the Great Filter

- Unfortunately all but [[Sister Hera]] were eaten by sewer crocodiles
- The Filter had been broken, but [[Dorian Caldwell|Dorian]] was able to intimidate it into working again, at least for now

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
        - formula.location_names.contains("Filter Shrine")
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
