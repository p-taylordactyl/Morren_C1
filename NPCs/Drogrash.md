---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-04-23
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
associates:
brief: The bartender at the Station House Hood Station's only bar
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_Drogrash.webp|400]]

# Description

Drogrash is the bartender at The Station House, [[Hood Station]]'s premier (and only) bar.


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
