---
dg-publish: true
type: npc
aliases:
  - Kairo
cover: "[[npc_kairovoss.webp]]"
created: 2026-05-08
modified: 2026-07-20
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Iron Form Dojo]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Katriel Buchanon|Kat]]"
  - "[[Nyra Lightwell|Nyra]]"
brief: Keena's friend, who both works out and attends church sessions at the Iron Form Dojo. Also friendly with Kat. They/them
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_KairoVoss.webp|821]]

# Description

Keena's friend, who both works out and attends church sessions at the Iron Form Dojo. Also friendly with Kat.

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
        - file.links.join(", ").contains("Kairo Voss")
    order:
      - file.name
```
