---
dg-publish: true
type: npc
aliases:
  - Vesh
cover: "[[npc_veshhollowbone.webp]]"
created: 2026-05-21
modified: 2026-07-16
disposition:
  - friendly
organizations:
associates:
brief: A tiefling encountered in the Bone Culvert who died helping the party disrupt an undead ritual.
tags:
status: deceased
locations:
  - "[[Not Far Sewer]]"
  - "[[Bone Culvert]]"
---

![[npc_veshhollowbone.webp]]

# Description

A tiefling encountered in the [[Bone Culvert]] who died helping the party disrupt an undead ritual.

# Notes

- her death really bothered [[Gideon Oublier|Gideon]]

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
        - file.hasLink("Vesh Hollowbone")
    order:
      - file.name
      - locations
```
