---
dg-publish: true
type: npc
aliases:
  - Kairo
cover: "[[npc_kairovoss.webp]]"
created: 2026-05-08
modified: 2026-07-27
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Iron Form Dojo]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Katriel Buchanon|Kat]]"
  - "[[Nyra Lightwell|Nyra]]"
brief: Keena's friend, who both works out and attends church sessions at the Iron Form Dojo. Also friendly with Kat. They/them
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_KairoVoss.webp|400]]

# Description

Keena's friend, who both works out and attends church sessions at the Iron Form Dojo. Also friendly with Kat.


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
