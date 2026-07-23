---
dg-publish: true
type: npc
aliases:
  - Morrgen
cover: "[[npc_morrgenoublier.webp]]"
created: 2026-05-08
modified: 2026-07-22
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Morrgen's Community Center]]"
associations:
  - "[[Gideon Oublier]]"
  - "[[Katriel Buchanon|Kat Buchanon]]"
  - "[[Malcolm Oublier]]"
brief: Gideon's mother, Kat's adoptive mother and leader of the Community Center
tags:
  - pcbond/gideon
  - pcbond/kat
status:
  - alive
locations:
  - unknown
---

![[npc_morrgenoublier.webp|404]]

# Description

Morrgen Oublier, a high elf in her early hundreds with deep wine red hair. She is kind and graceful, not a pillar of the community but the very foundation that it was built on. She believes in the [[Covenant of Equal Measure]] but sees value in all of Morrenel's teachings. Her perfect world is one where everyone is seen as an equal and has all the same opportunities.

- After her husband was murdered, [[Morrgen Oublier]]

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
        - file.links.join(", ").contains("Morrgen Oublier")
    order:
      - file.name
```

# Quests

![[0 Quest Index.base#NPC-embedonly]]