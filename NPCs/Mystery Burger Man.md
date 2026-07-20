---
dg-publish: true
type: npc
aliases:
cover: "[[npc_mysteryburgerman.webp]]"
created: 2026-07-09
modified: 2026-07-09
disposition:
  - neutral
  - friendly
  - unknown
organizations:
associates:
brief: A mysterious connoisseur of the various burgers available in the BB Megatower
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_mysteryburgerman.webp]]

# Description

A mysterious connoisseur of the various burgers available in the [[BB Megatower]].

# Notes

- 1st encounter outside of Krystal's in the [[BB Megatower]]
- bestowed upon [[Silas Sorelli|Silas]] the title of "Burger Destroyer" but said he'd remember Silas's actual name
- 2nd encounter on [[Tier 2]] where he gifted [[Maximilius Adkins|Max]] a bag of chili cheese burgers

# Session Mentions

```base
filters:
  and:
    - type == "session_note"
    - file.folder != "admin/templates"
properties:
  file.name:
    displayName: Session
  note.locations:
    displayName: Session Locations
views:
  - type: table
    name: Encounters
    filters:
      and:
        - file.hasLink("<%tp.file.title%>")
    order:
      - file.name
      - locations
```
