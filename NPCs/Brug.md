---
dg-publish: true
type: npc
aliases:
cover: "[[npc_brug.webp]]"
created: 2026-06-01
modified: 2026-07-23
disposition:
  - neutral
organizations:
  - "[[Box Boys]]"
associates:
brief: A member of the Box Boys we met in the Not Far Sewer
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Box City]]"
  - Incarcerated
---

![[npc_Brug.webp]]

# Description

A member of the [[Box Boys|Box Boys]] we saved from getting his ass kicked by a group of [[West Valence Saints|Saints]]. 

### Notes

- might get the Box Boys to help us with our [[Titan Corporation]] problem at the [[Pumping Station]]…assuming he actually makes it back to [[Box City]] alive and with his memory intact.
- Did in fact go through with taking over the [[Pumping Station]]

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
