---
dg-publish: true
type: npc
aliases:
cover: "[[npc_stonespear.webp]]"
created: 2026-07-06
modified: 2026-07-20
disposition:
  - friendly
organizations:
associates:
brief: A huge man who Kat helped rob an ATM outside the Quiet Place
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Quiet Place]]"
---

![[npc_Stonespear.webp|htall]]

# Description

A huge man we found bonking the shit out of an ATM outside the [[Quiet Place]] after escaping the cursed Hamlet Keeper game. [[Katriel Buchanon|Kat]] helped him rob the [[Cael Foundation]] ATM by hacking it, mostly so the bonking would stop. 

# Notes

- Per Stonespear he will contact Kat to do crime together again in the future and rather than getting her phone number, he will find her by scent

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
        - file.links.contains("Stonespear")
    order:
      - file.name
```
