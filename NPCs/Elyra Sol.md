---
dg-publish: true
type: npc
aliases:
  - Elyra
cover: "[[npc_elyrasol.webp]]"
created: 2026-06-22
modified: 2026-07-23
disposition:
  - unknown
organizations:
associates:
brief: Some kind of filmmaker that was staying at the penthouse of the BB Megatower
tags:
status:
  - alive
locations:
  - "[[Penthouse]]"
---

![[npc_ElyraSol.webp]]

# Description

Some kind of filmmaker that was staying at the [[Penthouse|penthouse]] of the [[BB Megatower]].

### Notes

- Her guest account on the penthouse computer contained the clips of the performance referenced in [[Penthouse Signal Rehearsal]]

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
