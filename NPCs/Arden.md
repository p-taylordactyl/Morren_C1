---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-06-29
modified: 2026-07-16
disposition:
  - neutral
  - friendly
organizations:
associates:
  - "[[Dex Dad]]"
  - "[[Dex]]"
brief: One of the priests at the Relay Shrine
tags:
status:
  - alive
locations:
  - "[[Relay Shrine]]"
---

![[npc_Arden.webp]]

# Description

A priest of the [[Cult of the Machine God]] located at the [[Relay Shrine]].

# Notes

- helped us track down that our [[Stalker]]'s redacted number is affiliated with the [[Titan Corporation]]

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
