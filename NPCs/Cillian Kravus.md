---
dg-publish: true
type: npc
aliases:
  - Cillian
cover:
created: 2026-05-21
modified: 2026-07-16
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[The Redacted]]"
associates:
  - "[[Maximilius Adkins|Max]]"
brief: Max's friend and fellow member of The Redacted.
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_CillianKravus.webp]]

# Description

One of the first people Max connected with through [[The Redacted]], both online and in person. They quickly recognized a shared mindset: a drive to expose the truth while still creating compelling, high-quality pieces. Before long, they began working together regularly, forming a natural partnership, Max as the front-facing voice and operator, and Cillian handling the technical side, keeping recordings clean, systems running, and operations stable behind the scenes.

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
        - file.hasLink("Cillian Kravus")
    order:
      - file.name
      - locations
```
