---
dg-publish: true
type: npc
aliases:
  - Prospera
cover: "[[placeholder2.webp]]"
created: 2026-05-25
modified: 2026-07-23
disposition:
  - unknown
organizations:
  - "[[Bellanova Family]]"
associates:
  - "[[Rosetta Thorne]]"
brief: High-ranking member of the Bellanova Family
tags:
status:
  - alive
locations:
---

![[npc_ProsperaBellanova.webp]]

# Description

High-ranking member of the Bellanova Family. 

### Notes

- [[Silas Sorelli|Silas]] and [[Dorian Caldwell|Dorian]] name-dropped her to the [[Bellanova Family|Bellanovas]] at the [[Pipe Junction]] to get us access to the computer controlling the forcefield around the [[Filter Shrine]].
- The name-drop was recorded and sent to [[Gideon Oublier|Gideon]] by the party's [[Sterling Corvain]].

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
