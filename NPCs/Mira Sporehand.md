---
dg-publish: true
type: npc
aliases:
  - Mira
cover: "[[npc_mirasporehand.webp]]"
created: 2026-04-27
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - "[[Sludge Farmers]]"
associates:
brief: Our primary contact with the Sludge Farmers
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Sludge Farm]]"
---
c
![[npc_mirasporehand.webp|400]]

# Description

Elfin farmer at the [[Sludge Farm]]. Friendly and generous, even before she found out [[Katriel Buchanon|Kat]] used to be in the [[West Valence Saints|Saints]]. Knows how to milk a giant toad.

# Notes

- Agreed to move the Sludge Farm to [[Hood Station]] after the next harvest 
- first person to mention the [[The Driftwarden]]

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
