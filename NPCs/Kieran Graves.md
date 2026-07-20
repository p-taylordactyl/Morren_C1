---
dg-publish: true
type: npc
aliases:
  - Kieran
cover: "[[npc_kierangraves.webp]]"
created: 2026-06-22
modified: 2026-07-20
disposition:
  - friendly
organizations:
  - "[[West Valence Saints]]"
associates:
brief: Former Saint who failed his initiation into the Lightning Crew
tags:
status:
  - alive
locations:
  - "[[Westreach]]"
---

![[npc_kierangraves.webp]]

# Description

Former [[West Valence Saints|Saint]] ([[Lightning Crew]]) who failed his initiation in the [[BB Megatower]] by refusing to kill a badly beaten [[Jax Riven]].

# Notes

- fought with the party against the [[West Valence Saints|Saints]] after [[Katriel Buchanon|Kat]] interrupted his initiation
- was okay with us handing the defeated crew over to the [[Enforcers]] as long as we could help protect his family. Kat offered them a place at [[Hood Station]]
- exchanged numbers with Kat so she can help coordinate getting his family out of [[Westreach]] before the [[West Valence Saints|Saints]] find out what happened

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
        - file.links.join(", ").contains("Kieran Graves")
    order:
      - file.name
```
