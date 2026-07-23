---
dg-publish: true
type: npc
aliases:
  - Róisín
cover: "[[npc_róisínward.webp]]"
created: 2026-05-21
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Cillian Ward|Cillian]]"
  - "[[Vinny Brassjaw|Brassjaw]]"
brief: Keena's cousin, who lost an arm in a Titan Corporation accident.
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
  - "[[BB Megatower]]"
---

![[npc_Róisín.webp]]

# Description

[[Keena O'Malley|Keena]]'s cousin, who lost an arm in a [[Titan Corporation]] accident.

### Notes

- Keena and [[Maximilius Adkins|Max]] investigated the accident that cost Róisín her arm and found it was caused and covered up by [[Augustin Devereaux]], who they subsequently interrogated and beat into a coma
- We ran into her at the [[BB Megatower]] seemingly being supplied drugs by [[Vinny Brassjaw|Brassjaw]] 
- When confronted by Keena, she said it was her best way to make money/support the family now

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
