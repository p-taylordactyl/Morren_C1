---
dg-publish: true
type: npc
aliases:
cover: "[[npc_paintbrushgnome.webp]]"
created: 2026-07-06
modified: 2026-07-20
disposition:
  - unknown
organizations:
associates:
  - "[[Bron]]"
brief: Gnome trying to find his magic paintbrush
tags:
  - name-needed
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_PaintbrushGnome.webp]]

# Description

Gnome who jumped in front of the party's car on [[Tier 2]] of the [[BB Megatower]] to ask for help recovering his magic paintbrush

# Notes

- He claimed his paintbrush was stolen from him by [[Bron]] in the [[Neon Corridor]]
- vanished in front of our eyes and said we'll never see him again unless we find the paintbrush
- Per Brug, the paintbrush was freely given as collateral for an unpaid drug debt and he sold it
- Apparently we aren't the first people he's asked for help getting the paintbrush back

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
        - file.links.contains("Paintbrush Gnome")
    order:
      - file.name
```


