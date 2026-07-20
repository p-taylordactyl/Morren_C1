---
dg-publish: true
type: npc
aliases:
  - Custis
cover:
created: 2026-05-25
modified: 2026-07-16
disposition:
  - enemy
organizations:
  - "[[Oligarchs]]"
associates:
brief: The oligarch who had Dorian's parents murdered
tags:
status:
  - unknown
locations:
  - unknown
---

![[npc_CustisDelavide.webp]]

# Description

The [[Oligarchs|Oligarch]] who had [[Dorian Caldwell|Dorian]]'s parents murdered.

# Notes

- Dorian revealed to [[Silas Sorelli|Silas]] that Custis is actually his uncle

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
        - file.hasLink("Custis Delavide")
    order:
      - file.name
      - locations
```
