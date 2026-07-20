---
dg-publish: true
type: npc
aliases:
  - Róisín
cover: "[[npc_róisínward.webp]]"
created: 2026-05-21
modified: 2026-07-20
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Cillian Ward|Cillian]]"
  - "[[Vinny Brassjaw|Brassjaw]]"
brief: Keena's cousin, who lost an arm in a Titan Corporation accident.
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
  - "[[BB Megatower]]"
---

![[npc_Róisín.webp]]

# Description

[[Keena O'Malley|Keena]]'s cousin, who lost an arm in a [[Titan Corporation]] accident.

# Notes

- Keena and [[Maximilius Adkins|Max]] investigated the accident and found it was caused and covered up by [[Augustin Devereaux]], who they subsequently interrogated and beat into a coma
- We ran into her at the [[BB Megatower]] seemingly being supplied drugs by [[Vinny Brassjaw|Brassjaw]] 
- When confronted by Keena, she said it was her best way to make money/support the family now

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
        - file.links.join(", ").contains("Róisín Ward")
    order:
      - file.name
```
