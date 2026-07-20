---
dg-publish: false
aliases:
type: npc
cover: "[[npc_<% tp.file.title.replace(/ /g, '') %>.webp]]"
created:
modified:
status:
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
locations:
associates:
brief:
tags:
  - under_construction
---
![[npc_<% tp.file.title.replace(/ /g, '') %>.webp|htall]]

# Description


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
