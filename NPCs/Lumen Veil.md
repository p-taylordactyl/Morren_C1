---
dg-publish: true
type: npc
aliases:
  - Lumen
cover: "[[npc_lumenveil.webp]]"
created: 2026-05-04
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - "[[Cael Foundation]]"
associates:
brief: A superhero with the Cael Foundation, powered by his Lumenite suit
tags:
status:
  - alive
locations:
---

![[npc_LumenVeil.webp]]

# Description

A superhero with the [[Cael Foundation]], powered by a custom suit made of Lumenite. 

### Notes

- [[Gideon Oublier|Gideon]] and [[Dorian Caldwell|Dorian]] saved his life in the [[Not Far Sewer]] and gave him directions to the [[Sludge Farm]]
- his suit will explode if removed by anyone other than himself - even after death
- he gifted us a car to thank us for helping him in the sewer

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
