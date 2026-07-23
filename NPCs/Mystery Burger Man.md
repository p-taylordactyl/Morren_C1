---
dg-publish: true
type: npc
aliases:
cover: "[[npc_mysteryburgerman.webp]]"
created: 2026-07-09
modified: 2026-07-23
disposition:
  - neutral
  - friendly
  - unknown
organizations:
  - "[[Titan Corporation]]"
associates:
  - "[[Stalker]]"
  - "[[Augustin Devereaux]]"
brief: A mysterious connoisseur of the various burgers available in the BB Megatower
status:
  - alive
locations:
  - "[[BB Megatower]]"
tags:
  - merge_needed
---

![[npc_mysteryburgerman.webp]]

# Description

A mysterious connoisseur of the various burgers available in the [[BB Megatower]].

# Notes

- 1st encounter outside of Krystal's in the [[BB Megatower]]
- bestowed upon [[Silas Sorelli|Silas]] the title of "Burger Destroyer" but said he'd remember Silas's actual name
- 2nd encounter on [[Tier 2]] where he gifted [[Maximilius Adkins|Max]] a bag of chili cheese burgers
- Is revealed to be the party's [[Stalker]]
- Tortured [[Maximilius Adkins|Max]] for 7 days after accepting him in trade for [[Malcolm Oublier|Malcolm]]
- apparently lives in constant pain

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
