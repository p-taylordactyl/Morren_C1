---
dg-publish: true
type: npc
aliases:
  - the chef
cover: "[[placeholder2.webp]]"
created: 2026-07-06
modified: 2026-07-23
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
associates:
  - "[[Orgo]]"
brief: The "chef" who makes the drug known as Red Thunder
tags:
status:
locations:
  - "[[BB Megatower]]"
  - "[[Tier 3]]"
  - "[[The Kitchen]]"
---

![[npc_Morgo.webp]]

# Description

The "chef" who makes the drug known as Red Thunder. Supposedly can be found on [[Tier 3]] of the [[BB Megatower]] in a place called the [[The Kitchen]].

### Notes

- learned about him from a Red Thunder addict named [[Orgo]]
- [[Keena O'Malley|Keena]] very badly wants to [[Keena O'Malley#Candle Vision|"candle"]] him

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
