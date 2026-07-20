---
dg-publish: true
type: npc
aliases:
cover: "[[npc_stu.webp]]"
created: 2026-07-09
modified: 2026-07-16
disposition:
  - unfriendly
  - neutral
organizations:
associates:
  - "[[Stalker]]"
brief: A hired thug working for the Stalker
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Ransom Location]]"
---

![[npc_Stu.webp]]

# Description

A hired thug working for the Stalker.

# Notes

- Stu isn't his real name, but rather a fake name he gives at [[Maximilius Adkins|Max]]'s request
- He never turns down a hug

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
