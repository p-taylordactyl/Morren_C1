---
dg-publish: true
type: npc
aliases:
cover: "[[npc_kelm.webp]]"
created: 2026-05-25
modified: 2026-07-23
disposition:
  - neutral
  - friendly
organizations:
  - "[[Titan Corporation]]"
associates:
brief: Mechanic working for the Titan Corporation at the Not Far Sewer's Pumping Station
tags:
status:
  - unknown
locations:
  - "[[Not Far Sewer]]"
  - "[[Pumping Station]]"
---

![[npc_Kelm.webp]]

# Description

Mechanic working for the Titan Corporation at the Not Far Sewer's Pumping Station

### Notes

- Guarded by two constructs who prevent him from redirecting any water flow
- Current status unknown after the [[Box Boys|Box Boys]] took the [[Pumping Station]].

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
