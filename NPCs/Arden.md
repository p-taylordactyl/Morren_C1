---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-06-29
modified: 2026-07-23
disposition:
  - neutral
  - friendly
organizations:
  - "[[Cult of the Machine God]]"
associates:
  - "[[Faile]]"
  - "[[Dex]]"
brief: One of the priests at the Relay Shrine
tags:
status:
  - alive
locations:
  - "[[Relay Shrine]]"
---

![[npc_Arden.webp]]

# Description

A priest of the [[Cult of the Machine God]] located at the [[Relay Shrine]].

### Notes

- helped us track down that our [[Sterling Corvain]]'s redacted number is affiliated with the [[Titan Corporation]]

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
