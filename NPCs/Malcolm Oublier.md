---
dg-publish: true
type: npc
aliases:
  - Malcolm
cover: "[[npc_malcolmoublier.webp]]"
created: 2026-05-28
modified: 2026-07-23
disposition:
  - friendly
  - annoying
organizations:
  - "[[Hood Station]]"
associates:
  - "[[Gideon Oublier|Gideon]]"
brief: Gideon's twin brother and an absolute twerp
tags:
status:
  - alive
  - captured
locations:
  - "[[Hood Station]]"
---

![[npc_malcolmoublier.webp]]

# Description

[[Gideon Oublier|Gideon]]'s twin brother and favorite child of their father. Also an absolute twerp.

### Notes

- Malcolm currently owes [[Vinnie Brassjaw|Brassjaw]] 100 platinum, plus interest - due 1/15/26
- [[Stalker]] texted Gideon a picture of the outside of the casino, and then a picture of Malcolm tied up, asking whether we would give up [[Keena O'Malley|Keena]] or [[Maximilius Adkins|Max]] in trade.
- Max ultimately traded himself for Malcolm
- During his captivity, a hole was drilled in Malcolm's temple. Whatever was placed in his brain has given him magic powers but also seems to allow him to be mind controlled
- Under the effects of mind control, Malcolm murdered his own father and has been taken in by [[Enforcers]]

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
