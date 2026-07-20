---
dg-publish: true
type: npc
aliases:
  - Barron
cover: "[[npc_barronsutton.webp]]"
created: 2026-05-21
modified: 2026-07-20
disposition:
  - unknown
organizations:
  - "[[Crownlight Media]]"
associates:
  - "[[Maximilius Adkins|Max]]"
brief: Max's former colleague at Crownlight Media
tags:
status:
  - alive
locations:
  - "[[Crownlight Media Studio Lot]]"
  - "[[Not Far Sewer]]"
---

![[npc_BarronSutton.webp]]

# Description

A former manager of a team adjacent to [[Maximilius Adkins|Max]]’s during his time at [[Crownlight Media]]. The two got along well professionally, and Barron has recently attempted to reestablish contact. Max is uncertain of his intentions—whether it’s an attempt to locate him on behalf of Crownlight or a genuine, sympathetic outreach. He wants to believe the latter, but for now, he considers it too much of a risk to respond.

# Notes

- Baron interviewed [[Keena O'Malley|Keena]] and [[Dorian Caldwell|Dorian]] outside the exit of the [[Not Far Sewer]]. They tried to gauge if he might actually be sympathetic to Max, but it was hard to tell.

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
        - file.links.join(", ").contains("Barron Sutton")
    order:
      - file.name
```
