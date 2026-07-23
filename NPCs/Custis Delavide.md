---
dg-publish: true
type: npc
aliases:
  - Custis
cover:
created: 2026-05-25
modified: 2026-07-23
disposition:
  - enemy
organizations:
  - "[[Oligarchs]]"
associates:
brief: The oligarch who had Dorian's parents murdered
tags:
status:
  - unknown
locations:
  - unknown
---

![[npc_CustisDelavide.webp]]

# Description

The [[Oligarchs|Oligarch]] who had [[Dorian Caldwell|Dorian]]'s parents murdered.

### Notes

- Dorian has revealed to [[Silas Sorelli|Silas]]  and [[Maximilius Adkins|Max]] that Custis is actually his uncle, who tried to kill him shortly after he turned 18

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

