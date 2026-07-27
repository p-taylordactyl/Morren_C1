---
dg-publish: true
type: npc
aliases:
  - Hadrian
cover: "[[placeholder2.webp]]"
created: 2026-04-23
modified: 2026-07-27
disposition:
  - unknown
organizations:
  - "[[West Valence Saints]]"
  - "[[Dominion Crew]]"
associates:
  - "[[Gorax]]"
brief: Kat's father and member of the Dominion Crew
tags:
status: unknown
locations:
  - unknown
---



# Description

Katriel was raised by her widowed father, [[Hadrian Buchanon]] in a militant religious sect of the [[West Valence Saints]] known as the [[Dominion Crew]], who practiced their own form of the Doctrine of Ordained Authority. They controlled only a handful of buildings, which were ruled with an iron fist, and more violence than was common with other crews. 

In addition to the normal Saints rules, the Dominion had their own additional rules to enforce control over their own members as well as their block.  Chief among these rules was to respect the hierarchy, starting with her father up the chain to the Dominion Crew leader, [[Gorax]]. Even the oligarchs, since they could overpower anyone they chose.


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
