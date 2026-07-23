---
dg-publish: true
type: npc
aliases:
cover: "[[npc_bron.webp]]"
created: 2026-06-22
modified: 2026-07-23
disposition:
  - neutral
  - friendly
organizations:
associates:
  - "[[Paintbrush Gnome]]"
brief: A pawn broker of sorts who runs the Neon Corridor
tags:
status:
  - alive
locations:
  - "[[Neon Corridor]]"
---

![[npc_Bron.webp]]

# Description

A pawn broker of sorts who runs the Neon Corridor.

### Notes

- [[Paintbrush Gnome]] claims Brug stole his magic paintbrush and [[Dorian Caldwell|Dorian]] offered that we would talk to him about it
- Per Brug, the gnome had given the paintbrush as collateral for a debt that he never paid
- Brug has since sold the paintbrush (likely to the [[Animator]])
- [[Katriel Buchanon|Kat]] gave Brug the racist orc statue she picked up at the [[Penthouse]]

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
