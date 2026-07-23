---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-04-29
modified: 2026-07-22
disposition:
  - neutral
  - friendly
  - unknown
organizations:
associates:
brief: A mysterious tiefling hanging out in a sewer pipe
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
---


# Description

Mysterious tiefling we met in a pipe in the [[Not Far Sewer]]. Wouldn't give his real name but did kind of sort of point us towards [[Pipe Junction]].


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
        - file.links.join(", ").contains("Pipey")
    order:
      - file.name
```
