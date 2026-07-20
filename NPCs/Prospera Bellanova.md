---
dg-publish: true
type: npc
aliases:
  - Prospera
cover: "[[placeholder2.webp]]"
created: 2026-05-25
modified: 2026-07-16
disposition:
  - unknown
organizations:
  - "[[Bellanova Family]]"
associates:
  - "[[Rosetta Thorne]]"
brief: High-ranking member of the Bellanova Family
tags:
status:
  - alive
locations:
---

![[npc_ProsperaBellanova.webp]]

# Description

High-ranking member of the Bellanova Family. 

# Notes

- [[Silas Sorelli|Silas]] and [[Dorian Caldwell|Dorian]] name-dropped her to the [[Bellanova Family|Bellanovas]] at the [[Pipe Junction]] to get us access to the computer controlling the forcefield around the [[Filter Shrine]].
- The name-drop was recorded and sent to [[Gideon Oublier|Gideon]] by the party's [[Stalker]].

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
        - file.hasLink("Prospera Bellanova")
    order:
      - file.name
      - locations
```
