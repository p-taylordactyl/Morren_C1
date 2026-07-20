---
dg-publish: true
type: npc
aliases:
  - Leroy
cover: "[[placeholder2.webp]]"
created: 2026-06-29
modified: 2026-07-20
disposition:
  - enemy
  - unfriendly
organizations:
  - "[[West Valence Saints]]"
  - "[[Lightning Crew]]"
associates:
  - Jerry
brief: Leader of the Lightning Crew of the West Valence Saints.
tags:
status:
  - alive
locations:
---

![[npc_LightningLeroy.webp]]

# Description

Leader of the [[Lightning Crew|Lightning Crew]] of [[West Valence Saints]].

# Notes

- party learned of Leroy's existence from Jerry, a Lightning Crew acolyte we captured and interrogated

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
        - file.links.contains("Lightning Leroy")
    order:
      - file.name
```
