---
dg-publish: true
type: npc
aliases:
  - Vinny
  - Brassjaw
cover: "[[npc_vinnybrassjaw.webp]]"
created: 2026-06-08
modified: 2026-07-16
disposition:
  - neutral
  - friendly
  - unknown
organizations:
  - "[[Bellanova Family|Bellanovas]]"
associates:
  - "[[Kali Torreo]]"
  - "[[Róisín Ward]]"
  - "[[Malcolm Oublier]]"
brief: A goblin that seems to be the Bellanova boss in the BB Megatower.
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_vinnybrassjaw.webp]]

# Description

A goblin that seems to be some kind of crime boss in the [[BB Megatower]].

# Notes

- Received some videos from our [[Stalker]] and is interested in unmasking them
- Willing to help us if we do some work for him
- Holds [[Malcolm Oublier]]'s debt
- If we build enough trust, could set up a meeting between [[Silas Sorelli|Silas]] and [[Kali Torreo|Commander Torreo]]
- Gave us some old wrestling costumes to use as disguises

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
        - file.hasLink("Vinny Brassjaw")
    order:
      - file.name
      - locations
```

# Quests

![[0 Quest Index.base#NPC-embedonly]]