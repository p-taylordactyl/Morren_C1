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
  - "[[Arden]]"
  - "[[Dex]]"
brief: Priest at the relay shrine and adoptive father of Dex
tags:
  - name-needed
status:
  - alive
locations:
  - "[[Relay Shrine]]"
---

![[npc_Faile.webp]]

# Description

One of the tech priests serving the [[Cult of the Machine God|Machine Spirit]] at the [[Relay Shrine]]. Adoptive father of [[Dex]].

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
