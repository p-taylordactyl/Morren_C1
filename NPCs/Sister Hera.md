---
dg-publish: true
type: npc
aliases:
  - Hera
cover: "[[npc_sisterhera.webp]]"
created: 2026-05-04
modified: 2026-07-22
disposition:
  - friendly
organizations:
  - Cult of the Machine God
associates:
brief: A priestess of the Machine God and only survivor at the Filter Shrine
tags:
status:
  - alive
locations:
  - "[[Filter Shrine]]"
---

![[npc_SisterHera.webp]]

# Description

A Priestess of the [[Machine God]] living in the [[Not Far Sewer]].We found Sister Hera cowering from crocodiles at the [[Filter Shrine]], her fellow devotees having all been killed already. We killed the crocs and she gratefully told us what was going on with the Filter, which seemed to have stopped working.


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
        - file.links.join(", ").contains("Sister Hera")
    order:
      - file.name
```
