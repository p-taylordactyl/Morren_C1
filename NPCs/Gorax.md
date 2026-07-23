---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-05-25
modified: 2026-07-23
disposition:
  - enemy
organizations:
  - "[[West Valence Saints]]"
  - "[[Dominion Crew]]"
associates:
  - "[[Hadrian Buchanon]]"
brief: Leader of the Dominion Crew of the West Valence Saints
tags:
status:
  - unknown
locations:
  - unknown
---

![[npc_Gorax.webp]]

# Description

Leader of the Dominion Crew of the West Valence Saints.


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
