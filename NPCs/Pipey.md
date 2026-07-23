---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-04-29
modified: 2026-07-23
disposition:
  - neutral
  - friendly
  - unknown
organizations:
associates:
brief: A mysterious tiefling hanging out in a sewer pipe
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
---


# Description

Mysterious tiefling we met in a pipe in the [[Not Far Sewer]]. Wouldn't give his real name but did kind of sort of point us towards [[Pipe Junction]].


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
