---
dg-publish: true
type: npc
aliases:
  - Elyra
cover: "[[npc_elyrasol.webp]]"
created: 2026-06-22
modified: 2026-07-20
disposition:
  - unknown
organizations:
associates:
brief: Some kind of filmmaker that was staying at the penthouse of the BB Megatower
tags:
status:
  - alive
locations:
  - "[[Penthouse]]"
---

![[npc_ElyraSol.webp]]

# Description

Some kind of filmmaker that was staying at the [[Penthouse|penthouse]] of the [[BB Megatower]].

# Notes

- Her guest account on the penthouse computer contained the clips of the performance referenced in [[Penthouse Signal Rehearsal]]

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
        - file.links.join(", ").contains("Elyra Sol")
    order:
      - file.name
```
