---
dg-publish: true
type: npc
aliases:
cover: "[[npc_kelm.webp]]"
created: 2026-05-25
modified: 2026-07-16
disposition:
  - neutral
  - friendly
organizations:
  - "[[Titan Corporation]]"
associates:
brief: Mechanic working for the Titan Corporation at the Not Far Sewer's Pumping Station
tags:
status:
  - unknown
locations:
  - "[[Not Far Sewer]]"
  - "[[Pumping Station]]"
---

![[npc_Kelm.webp]]

# Description

Mechanic working for the Titan Corporation at the Not Far Sewer's Pumping Station

# Notes

- Guarded by two constructs who prevent him from redirecting any water flow
- Current status unknown after the [[Box Boys|Box Boys]] took the [[Pumping Station]].

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
        - file.hasLink("Kelm")
    order:
      - file.name
      - locations
```
