---
dg-publish: true
type: npc
aliases:
  - Nyra
cover: "[[npc_nyralightwell.webp]]"
created: 2026-05-21
modified: 2026-07-16
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Iron Form Dojo]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Kairo Voss|Kairo]]"
brief: Keena's friend and member of the Chojo
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_NyraLightwell.webp]]

# Description

Keena's friend and member of the Chojo.

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
        - file.hasLink("Nyra Lightwell")
    order:
      - file.name
      - locations
```
