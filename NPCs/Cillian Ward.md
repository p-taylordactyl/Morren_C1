---
dg-publish: true
type: npc
aliases:
  - Cillian
cover: "[[npc_cillianward.webp]]"
created: 2026-05-21
modified: 2026-07-20
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Iron Form Dojo]]"
associates:
  - "[[Róisín Ward|Róisín]]"
  - "[[Keena O'Malley|Keena]]"
brief: Keena's uncle and owner of the Iron Form Dojo
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_cillianward.webp|590]]

# Description

A human man in his late 40s/early 50s, originally from [[Westreach]]. Although he looks severe, he is a rather jovial man, and always has a kind word to spare for someone who needs some encouragement, though he isn't above a bit of tough love if someone needs it. He's a master martial artist and enjoys learning and practicing new disciplines. His guiding tenets in both the dojo and his own life are Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit.

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
views:
  - type: list
    name: Encounters
    filters:
      and:
        - file.links.join(", ").contains("Cillian Ward")
    order:
      - file.name
```

# Quests

![[0 Quest Index.base#NPC-embedonly]]