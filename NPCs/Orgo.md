---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-07-06
modified: 2026-07-16
disposition:
  - neutral
organizations:
associates:
  - "[[Morgo]]"
brief: A drug addict the party encountered outside the Quiet Place
tags:
  - drugs
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Quiet Place]]"
  - "[[Tier 3]]"
  - "[[The Kitchen]]"
---

![[npc_Orgo.webp]]

# Description

A addict living in the [[BB Megatower]] whose drug of choice is Red Thunder. He is close friends with [[Morgo]] the "chef" who makes Red Thunder in a place called [[The Kitchen]] on [[Tier 3]]. 

# Notes

- party encountered him distraught that [[Katriel Buchanon|Kat]] and [[Stonespear]] had robbed all the cash from a [[Cael Foundation]] ATM outside the [[Quiet Place]] because he wanted to withdraw 10 platinum to buy more Red Thunder
- 

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
        - file.hasLink("<%tp.file.title%>")
    order:
      - file.name
      - locations
```
