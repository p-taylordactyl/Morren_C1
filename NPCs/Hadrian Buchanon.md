---
dg-publish: true
type: npc
aliases:
  - Hadrian
cover:
created: 2026-04-23
modified: 2026-07-16
disposition:
  - unknown
organizations:
  - "[[West Valence Saints]]"
  - "[[Dominion Crew]]"
associates:
  - "[[Gorax]]"
brief: Kat's father and member of the Dominion Crew
tags:
status: unknown
locations:
  - unknown
---

![[npc_HadrianBuchanon.webp|400]]

# Description

Katriel was raised by her widowed father, [[Hadrian Buchanon]] in a militant religious sect of the [[West Valence Saints]] known as the [[Dominion Crew]], who practiced their own form of the Doctrine of Ordained Authority. They controlled only a handful of buildings, which were ruled with an iron fist, and more violence than was common with other crews. 

In addition to the normal Saints rules, the Dominion had their own additional rules to enforce control over their own members as well as their block.  Chief among these rules was to respect the hierarchy, starting with her father up the chain to the Dominion Crew leader, [[Gorax]]. Even the oligarchs, since they could overpower anyone they chose.

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
  note.locations:
    displayName: Session Locations
views:
  - type: table
    name: Encounters
    filters:
      and:
        - file.hasLink("Hadrian Buchanon")
    order:
      - file.name
      - locations
```