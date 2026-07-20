---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-05-25
modified: 2026-07-20
disposition:
  - enemy
organizations:
  - "[[West Valence Saints]]"
  - "[[Dominion Crew]]"
associates:
  - "[[Hadrian Buchanon]]"
brief: Leader of the Dominion Crew of the West Valence Saints
tags:
status:
  - unknown
locations:
  - unknown
---

![[npc_Gorax.webp]]

# Description

Leader of the Dominion Crew of the West Valence Saints.

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
views:
  - type: list
    name: Encounters
    filters:
      and:
        - file.links.join(", ").contains("Gorax")
    order:
      - file.name
```
