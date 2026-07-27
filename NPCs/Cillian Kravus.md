---
dg-publish: true
type: npc
aliases:
  - Cillian
cover: "[[placeholder2.webp]]"
created: 2026-05-21
modified: 2026-07-27
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[The Redacted]]"
associates:
  - "[[Maximilius Adkins|Max]]"
brief: Max's friend and fellow member of The Redacted.
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---


# Description

One of the first people Max connected with through [[The Redacted]], both online and in person. They quickly recognized a shared mindset: a drive to expose the truth while still creating compelling, high-quality pieces. Before long, they began working together regularly, forming a natural partnership, Max as the front-facing voice and operator, and Cillian handling the technical side, keeping recordings clean, systems running, and operations stable behind the scenes.



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
