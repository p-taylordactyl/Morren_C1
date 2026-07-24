---
dg-publish: true
type: npc
aliases:
  - Kali
  - Commander Torreo
cover:
created: 2026-05-25
modified: 2026-07-23
disposition:
  - unknown
organizations:
  - "[[Ghosts of the Flooded Zone]]"
associates:
  - "[[Silas Sorelli|Silas]]"
  - "[[Vinnie Brassjaw|Brassjaw]]"
brief: Silas's childhood friend who joined the Ghosts of the Flooded Zone
tags:
status:
  - alive
locations:
  - "[[Flooded Zone]]"
---

![[npc_KaliTorreo.webp]]

# Description

Silas's childhood friend who joined the [[Ghosts of the Flooded Zone]].

### Notes

- At the [[BB Megatower]] we steal documents from a [[Ghosts of the Flooded Zone|Ghosts]] van that reference the battle plans of a "Commander Torreo"
- After he asked "Commander Torreo" is likely Kali, Silas asked [[Vinnie Brassjaw|Brassjaw]] to arrange a meeting. It's a no until we build more trust.
- Max saw a figure he later realized was Kali breaking into an abandoned building in [[Hood Station]] with a group of Ghosts.
- At the [[Wharf]] we saw a "Wanted" poster for Kali and 

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
