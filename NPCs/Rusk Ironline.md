---
dg-publish: true
type: npc
aliases:
  - Rusk
cover: "[[npc_ruskironline.webp]]"
created: 2026-07-06
modified: 2026-07-16
disposition:
  - neutral
organizations:
  - "[[Bellanova Family]]"
associates:
brief: Dwarf who runs Pipe Junction for the Bellanovas
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Pipe Junction]]"
---

![[npc_ruskironline.webp]]

# Description

Dwarf who runs [[Pipe Junction]] for the [[Bellanova Family|Bellanovas]].

# Notes

- allowed the party to use the computer terminal at Pipe Junction in order to disable the forcefield blocking the [[Filter Shrine]] after we namedropped [[Prospera Bellanova]] and he couldn't immediately confirm
- notably the terminal was also full of beastiality porn
- probably won't be happy to see us next time assuming he's found out we lied to him

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
        - file.hasLink("Rusk Ironline")
    order:
      - file.name
      - locations
```
