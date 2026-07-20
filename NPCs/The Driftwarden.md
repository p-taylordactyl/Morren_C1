---
dg-publish: true
type: npc
aliases:
cover:
created: 2026-05-01
modified: 2026-07-20
disposition:
  - unknown
organizations:
associates:
  - "[[Mira Sporehand]]"
brief: Mysterious leader of an unknown group of people living in the Not Far Sewer
tags:
status:
  - unknown
locations:
  - "[[Not Far Sewer]]"
---

![[npc_TheDriftwarden.webp|400]]

# Description

Mysterious leader of an unknown group of people living in the [[Not Far Sewer]]. Supposedly a kind and helpful figure who takes in lost souls. Some call him a myth, but [[Mira Sporehand]] at the [[Sludge Farm]] has apparently interacted with him/may know where to find him.

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
        - file.links.join(", ").contains("The Driftwarden")
    order:
      - file.name
```
