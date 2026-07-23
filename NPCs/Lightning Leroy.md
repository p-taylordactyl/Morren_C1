---
dg-publish: true
type: npc
aliases:
  - Leroy
cover: "[[placeholder2.webp]]"
created: 2026-06-29
modified: 2026-07-23
disposition:
  - enemy
  - unfriendly
organizations:
  - "[[West Valence Saints]]"
  - "[[Lightning Crew]]"
associates:
  - Jerry
brief: Leader of the Lightning Crew of the West Valence Saints.
tags:
status:
  - alive
locations:
---

![[npc_LightningLeroy.webp]]

# Description

Leader of the [[Lightning Crew|Lightning Crew]] of [[West Valence Saints]].

### Notes

- party learned of Leroy's existence from Jerry, a Lightning Crew acolyte we captured and interrogated

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
