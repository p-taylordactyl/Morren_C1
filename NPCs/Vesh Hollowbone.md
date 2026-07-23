---
dg-publish: true
type: npc
aliases:
  - Vesh
cover: "[[npc_veshhollowbone.webp]]"
created: 2026-05-21
modified: 2026-07-23
disposition:
  - friendly
organizations:
associates:
brief: A tiefling encountered in the Bone Culvert who died helping the party disrupt an undead ritual.
tags:
status: deceased
locations:
  - "[[Not Far Sewer]]"
  - "[[Bone Culvert]]"
---

![[npc_veshhollowbone.webp]]

# Description

A tiefling encountered in the [[Bone Culvert]] who died helping the party disrupt an undead ritual.


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
