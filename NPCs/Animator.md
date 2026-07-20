---
dg-publish: true
type: npc
aliases:
cover: "[[npc_animator.webp]]"
created: 2026-07-06
modified: 2026-07-13
disposition:
  - neutral
  - unknown
organizations:
associates:
brief: A man who sells animated paintings he creates using a magic paintbrush
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
---

![[npc_animator.webp]]

# Description

A man who can bring paintings to life using a magic paintbrush

# Notes

- the paintbrush he uses is likely the one [[Paintbrush Gnome]] claims [[Bron]] stole (that Bron says he validly sold)
- 

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
