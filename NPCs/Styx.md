---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-07-08
modified: 2026-07-16
disposition:
  - unknown
organizations:
associates:
  - "[[Nyx]]"
brief: Nyx's missing brother who is presumed to be trapped in a cursed Hamlet Keeper game
tags:
status:
  - unknown
locations:
---

![[npc_Styx.webp]]

# Description

[[Nyx]]'s missing brother, who disappeared after acquiring a trove of cursed Hamlet Keeper games. He's presumably trapped in one of the games, but no one knows which. 

# Notes

- Styx was not trapped in the OG Hamlet Keeper 

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
