---
dg-publish: true
type: npc
aliases:
cover: "[[npc_paintbrushgnome.webp]]"
created: 2026-07-06
modified: 2026-07-23
disposition:
  - unknown
organizations:
associates:
  - "[[Bron]]"
brief: Gnome trying to find his magic paintbrush
tags:
  - name-needed
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_PaintbrushGnome.webp]]

# Description

Gnome who jumped in front of the party's car on [[Tier 2]] of the [[BB Megatower]] to ask for help recovering his magic paintbrush

### Notes

- He claimed his paintbrush was stolen from him by [[Bron]] in the [[Neon Corridor]]
- vanished in front of our eyes and said we'll never see him again unless we find the paintbrush
- Per Brug, the paintbrush was freely given as collateral for an unpaid drug debt and he sold it
- Apparently we aren't the first people he's asked for help getting the paintbrush back
- It appears the paintbrush is now owned by the [[Animator]]

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


