---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-07-08
modified: 2026-07-27
disposition:
  - unknown
organizations:
associates:
  - "[[Nyx]]"
brief: Nyx's missing brother who is presumed to be trapped in a cursed Hamlet Keeper game
tags:
status:
  - unknown
locations:
---
![[placeholder2.webp]]
![[npc_Styx.webp]]

# Description

[[Nyx]]'s missing brother, who disappeared after acquiring a trove of cursed Hamlet Keeper games. He's presumably trapped in one of the games, but no one knows which. 

### Notes

- Styx was not trapped in the OG Hamlet Keeper 

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
