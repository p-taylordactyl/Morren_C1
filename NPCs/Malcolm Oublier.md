---
dg-publish: true
type: npc
aliases:
  - Malcolm
cover: "[[npc_malcolmoublier.webp]]"
created: 2026-05-28
modified: 2026-07-20
disposition:
  - friendly
  - annoying
organizations:
  - "[[Hood Station]]"
associates:
  - "[[Gideon Oublier|Gideon]]"
brief: Gideon's twin brother and an absolute twerp
tags:
status:
  - alive
  - captured
locations:
  - "[[Hood Station]]"
---

![[npc_malcolmoublier.webp]]

# Description

[[Gideon Oublier|Gideon]]'s twin brother and favorite child of their father. Also an absolute twerp.

# Notes

- Malcolm currently owes [[Vinny Brassjaw|Brassjaw]] 100 platinum, plus interest - due 1/15/26
- He was at a casino trying to win big to pay the debt
- [[Stalker]] texted Gideon a picture of the outside of the casino, and then a picture of Malcolm tied up, asking whether we would give up [[Keena O'Malley|Keena]] or [[Maximilius Adkins|Max]] in trade.

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
        - file.links.join(", ").contains("Malcolm Oublier")
    order:
      - file.name
```
