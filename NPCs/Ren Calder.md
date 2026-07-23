---
dg-publish: true
type: npc
aliases:
  - Ren
cover: "[[npc_rencalder.webp]]"
created: 2026-05-04
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[The Redacted]]"
associates:
  - "[[Maximilius Adkins|Max]]"
brief: Max's friend and fellow member of The Redacted.
tags:
  - pcbond/max
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_rencalder.webp|400]]

# Description

An active member of [[The Redacted]] who is constantly searching for leads and opportunities to push back against the oligarchs. He’s young and a bit naive, but genuinely committed to the cause. Ren sends a high volume of tips to [[Maximilius Adkins|Max]], many of which go unused, but he was the one who connected Max to [[Keena O'Malley|Keena]]’s story and, by extension, [[Hood Station]]. Since then, Max has taken Ren’s contributions more seriously, though he still tries to temper some of his more reckless ideas.


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

# Quests

![[0 Quest Index.base#NPC-embedonly]]