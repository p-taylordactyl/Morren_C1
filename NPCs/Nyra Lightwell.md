---
dg-publish: true
type: npc
aliases:
  - Nyra
cover: "[[npc_nyralightwell.webp]]"
created: 2026-05-21
modified: 2026-07-27
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Iron Form Dojo]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Kairo Voss|Kairo]]"
brief: Keena's friend and member of the Chojo
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_NyraLightwell.webp|400]]

# Description

Keena's friend and member of the Chojo.


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
