---
dg-publish: true
type: npc
aliases:
cover: "[[npc_nyx.webp]]"
created: 2026-07-08
modified: 2026-07-23
disposition:
  - friendly
organizations:
associates:
  - "[[Styx]]"
brief: A tiefling woman searching for her missing brother, Styx
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Quiet Place]]"
---

![[npc_Nyx.webp]]

# Description

A tiefling woman who held a Cursed Hamlet Keeper tournament event to try and attract gamers who could beat the cursed copy and help find her brother. This got all parties involved trapped in the cursed game, where real-world combat skills matter much more than gaming skills. She and the other trapped people were rescued by the party when they defeated the game as part of their quest [[The Silent Floor]].

### Notes

- The party has agreed to help Nyx continue rescuing people from the other games so that she doesn't get more innocent people trapped during her search
- [[Dorian Caldwell|Dorian]] has made an agreement with her to purchase the (formerly?) cursed copy of OG Hamlet Keeper

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
