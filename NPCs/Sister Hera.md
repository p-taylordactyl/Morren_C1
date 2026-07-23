---
dg-publish: true
type: npc
aliases:
  - Hera
cover: "[[npc_sisterhera.webp]]"
created: 2026-05-04
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - Cult of the Machine God
associates:
brief: A priestess of the Machine God and only survivor at the Filter Shrine
tags:
status:
  - alive
locations:
  - "[[Filter Shrine]]"
---

![[npc_SisterHera.webp]]

# Description

A Priestess of the [[Cult of the Machine God|Machine God]] living in the [[Not Far Sewer]].We found Sister Hera cowering from crocodiles at the [[Filter Shrine]], her fellow devotees having all been killed already. We killed the crocs and she gratefully told us what was going on with the Filter, which seemed to have stopped working.


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
