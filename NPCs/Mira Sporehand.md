---
dg-publish: true
type: npc
aliases:
  - Mira
cover: "[[npc_mirasporehand.webp]]"
created: 2026-04-27
modified: 2026-07-16
disposition:
  - friendly
organizations:
  - "[[Sludge Farmers]]"
associates:
brief: Our primary contact with the Sludge Farmers
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Sludge Farm]]"
---

![[npc_mirasporehand.webp|400]]

# Description

Elfin farmer at the [[Sludge Farm]]. Friendly and generous, even before she found out [[Katriel Buchanon|Kat]] used to be in the [[West Valence Saints|Saints]]. Knows how to milk a giant toad.

# Notes

- Agreed to move the Sludge Farm to [[Hood Station]] after the next harvest 
- first person to mention the [[The Driftwarden]]

# Session Appearances

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
        - file.hasLink("Mira Sporehand")
    order:
      - file.name
      - locations
```
