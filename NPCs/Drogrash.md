---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-04-23
modified: 2026-07-22
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
associates:
brief: The bartender at the Station House Hood Station's only bar
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_Drogrash.webp|400]]

# Description

Drogrash is the bartender at The Station House, [[Hood Station]]'s premier (and only) bar.


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
        - file.links.join(", ").contains("Drogrash")
    order:
      - file.name
```
