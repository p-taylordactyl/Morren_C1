---
dg-publish: true
type: npc
aliases:
  - Solomon
  - Hexley
cover: "[[npc_solomonhexley.webp]]"
created: 2026-06-29
modified: 2026-07-23
disposition:
  - unfriendly
  - neutral
  - friendly
  - unknown
organizations:
associates:
  - "[[Silas Sorelli|Silas]]"
brief: The original owner of Silas's spellbook
tags:
status:
  - alive
locations:
---

![[npc_solomonhexley.webp|589]]

# Description

When [[Silas Sorelli]] was first studying wizardry, he couldn't afford a spellbook and thus stole one from Solomon. 

Solomon has spent the intervening years tracking Silas down to extract restitution in one form or another. 

### Notes

- first found Silas/the party in the [[BB Megatower]] outside of the Quiet Place. After a brief scuffle, we paid him off with a bottle of wine that Dorian passed off as much more expensive than its true value. We'll likely be seeing Solomon again.

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
