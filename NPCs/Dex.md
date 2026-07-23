---
dg-publish: true
type: npc
aliases:
cover: "[[npc_dex.webp]]"
created: 2026-06-29
modified: 2026-07-23
disposition:
  - neutral
  - friendly
organizations:
  - "[[Cult of the Machine God]]"
associates:
  - "[[Arden]]"
  - "[[Faile]]"
brief: Adoptive son of a tech priest living at the Relay Shrine
tags:
status:
  - alive
locations:
  - "[[Relay Shrine]]"
---

![[npc_Dex.webp]]

# Description

Adoptive son of a tech priest living at the [[Relay Shrine]]. He's a big fan of some of [[Maximilius Adkins|Max]]'s content but unfortunately only has an attention span of about 7 seconds.

### Notes

- brainrot visuals help him focus on conversations
- threw a wrench at [[Keena O'Malley|Keena]]'s head (theoretically) on accident 
- almost blew up the shrine by pulling the broken lever

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
