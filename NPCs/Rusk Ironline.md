---
dg-publish: true
type: npc
aliases:
  - Rusk
cover: "[[npc_ruskironline.webp]]"
created: 2026-07-06
modified: 2026-07-23
disposition:
  - neutral
organizations:
  - "[[Bellanova Family]]"
associates:
brief: Dwarf who runs Pipe Junction for the Bellanovas
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Pipe Junction]]"
---

![[npc_ruskironline.webp]]

# Description

Dwarf who runs [[Pipe Junction]] for the [[Bellanova Family|Bellanovas]].

### Notes

- allowed the party to use the computer terminal at Pipe Junction in order to disable the forcefield blocking the [[Filter Shrine]] after we namedropped [[Prospera Bellanova]] and he couldn't immediately confirm
- notably the terminal was also full of beastiality porn
- probably won't be happy to see us next time assuming he's found out we lied to him

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
