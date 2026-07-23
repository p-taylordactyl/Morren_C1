---
dg-publish: true
type: npc
aliases:
cover: "[[npc_animator.webp]]"
created: 2026-07-06
modified: 2026-07-23
disposition:
  - neutral
  - unknown
organizations:
associates:
brief: A man who sells animated paintings he creates using a magic paintbrush
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
---

![[npc_animator.webp]]

# Description

A man who can bring paintings to life using a magic paintbrush.

### Notes

- the paintbrush he uses is likely the one [[Paintbrush Gnome]] claims [[Bron]] stole (that Bron says he validly sold)
- [[Dorian Caldwell|Dorian]] has made the initial deposit to have his parents portrait animated but needs to know more about them in order to have it animated further (so he can talk to them)

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
