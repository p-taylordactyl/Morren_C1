---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-05-01
modified: 2026-07-27
disposition:
  - unknown
organizations:
associates:
  - "[[Mira Sporehand]]"
brief: Mysterious leader of an unknown group of people living in the Not Far Sewer
tags:
status:
  - unknown
locations:
  - "[[Not Far Sewer]]"
---



# Description

Mysterious leader of an unknown group of people living in the [[Not Far Sewer]]. Supposedly a kind and helpful figure who takes in lost souls. Some call him a myth, but [[Mira Sporehand]] at the [[Sludge Farm]] has apparently interacted with him/may know where to find him.


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
