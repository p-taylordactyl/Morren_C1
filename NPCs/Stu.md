---
dg-publish: true
type: npc
aliases:
cover: "[[npc_stu.webp]]"
created: 2026-07-09
modified: 2026-07-23
disposition:
  - unfriendly
  - neutral
organizations:
associates:
  - "[[Sterling Corvain]]"
  - "[[Sterling Corvain]]"
brief: A hired thug working for the Stalker
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Ransom Location]]"
---

![[npc_Stu.webp]]

# Description

A hired thug working for the Stalker.

# Notes

- Stu isn't his real name, but rather a fake name he gives at [[Maximilius Adkins|Max]]'s request
- Never turns down a hug

# Session Mentions

```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  join(map(locations, (l) => "• " + string(l)), "<br>") AS "Session Locations"
FROM ""
WHERE type = "session_note"
  AND file.folder != "admin/templates"
  AND contains(this.file.inlinks, file.link)
SORT file.name ASC, locations ASC
```
