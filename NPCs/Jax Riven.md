---
dg-publish: true
type: npc
aliases:
  - Jax
cover: "[[npc_jaxriven.webp]]"
created: 2026-06-22
modified: 2026-07-20
disposition:
  - neutral
  - friendly
organizations:
associates:
brief: Courier in the BB Megatower
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_JaxRiven.webp]]

# Description

Courier working in the [[BB Megatower]]. Specializes in navigating collapsed sections. 

# Notes

- first met super briefly outside of Krystal's when he fell through the ceiling and then immediately grappled away
- got his grappling hook at the [[Infinity Plaza Mall]]
- Later on [[Tier 2]] of the Megatower, the party rescued him from being killed by a group of [[West Valence Saints|Saints]] from the [[Lightning Crew]]

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
        - file.links.join(", ").contains("Jax Riven")
    order:
      - file.name
```
