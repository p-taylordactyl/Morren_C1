---
dg-publish: true
aliases:
type: npc
cover: "[[npc_VictorHalden.webp]]"
created:
modified:
status:
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
locations:
associates:
brief:
tags:
  - under_construction
---
![[npc_VictorHalden.webp|400]]

# Description



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
