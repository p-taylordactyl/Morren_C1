---
dg-publish: true
type: npc
aliases:
  - the chef
cover: "[[placeholder2.webp]]"
created: 2026-07-06
modified: 2026-07-20
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
associates:
  - "[[Orgo]]"
brief: The "chef" who makes the drug known as Red Thunder
tags:
status:
locations:
  - "[[BB Megatower]]"
  - "[[Tier 3]]"
  - "[[The Kitchen]]"
---

![[npc_Morgo.webp]]

# Description

The "chef" who makes the drug known as Red Thunder. Supposedly can be found on [[Tier 3]] of the [[BB Megatower]] in a place called the [[The Kitchen]].

# Notes

- learned about him from a Red Thunder addict named [[Orgo]]

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
        - file.links.contains("Morgo")
    order:
      - file.name
```
