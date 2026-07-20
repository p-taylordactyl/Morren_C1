---
dg-publish: false
type: npc
aliases:
cover: "[[npc_ozwinwicker.webp]]"
created: 2026-07-13
modified: 2026-07-16
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
associates:
brief:
tags:
  - under_construction
status:
locations:
---

![[npc_OzwinWicker.webp]]

# Description

- most likely the guy from Keena's Vision

# Notes

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
