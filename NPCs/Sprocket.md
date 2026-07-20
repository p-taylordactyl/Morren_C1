---
dg-publish: true
type: npc
aliases:
cover: "[[npc_sprocket.webp]]"
created: 2026-04-27
modified: 2026-07-20
disposition:
  - neutral
  - friendly
organizations:
  - "[[Sewer Goblins]]"
associates:
brief: A goblin merchant in the bazaar located in the south section of the Not Far Sewer
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
tags:
---

![[npc_sprocket.webp|400]]

# Description

A goblin merchant in the [[Floodgate Bazaar|bazaar]] located in the south section of the [[Not Far Sewer]]. Likes to party.

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
        - file.links.join(", ").contains("sprocket")
    order:
      - file.name
```

