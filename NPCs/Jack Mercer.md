---
dg-publish: true
type: npc
aliases:
  - Jack
cover: "[[npc_jackmercer.webp]]"
created: 2026-06-22
modified: 2026-07-23
disposition:
  - neutral
  - friendly
  - unknown
organizations:
associates:
brief: A popular Oogtuber who collects rare media and comic books
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_JackMercer.webp]]

# Description

A popular Oogtuber who collects rare media and comic books.  [[Gideon Oublier|Gideon]] is a fan. 

### Notes

- We found him beaten and robbed on [[Tier 2]] of the [[BB Megatower]]
- He was tracking cursed video game that might be related to [[The Silent Floor]]
- We recovered his tracking device from the [[West Valence Saints|Saints]] that stole it and used it to find the [[Quiet Place]].
- Jack gave Max [[Maximilius Adkins|Max]] his camera and waited outside to keep us from being blocked in while we entered to search for the video game
- The party accepted Jack's offer to "take care of" our Saint hostages, but regretted it after realizing he murdered them

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
