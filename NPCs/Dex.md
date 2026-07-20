---
dg-publish: true
type: npc
aliases:
cover: "[[npc_dex.webp]]"
created: 2026-06-29
modified: 2026-07-16
disposition:
  - neutral
  - friendly
organizations:
  - "[[Cult of the Machine God]]"
associates:
  - "[[Arden]]"
  - "[[Dex Dad]]"
brief: Adoptive son of a tech priest living at the Relay Shrine
tags:
status:
  - alive
locations:
  - "[[Relay Shrine]]"
---

![[npc_Dex.webp]]

# Description

Adoptive son of a tech priest living at the [[Relay Shrine]]. He's a big fan of some of [[Maximilius Adkins|Max]]'s content but unfortunately only has an attention span of about 7 seconds.

# Notes

- brainrot visuals help him focus on conversations
- threw a wrench at [[Keena O'Malley|Keena]]'s head (theoretically) on accident 
- almost blew up the shrine by pulling the broken level

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
