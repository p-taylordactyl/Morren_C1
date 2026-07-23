---
dg-publish: true
type: group
cover: "[[npc_mirasporehand.webp]]"
created: 2026-04-29
modified: 2026-07-23
parent:
associations:
locations:
  - "[[Not Far Sewer]]"
  - "[[Sludge Farm]]"
tags:
---

# Description

A group of people who formed the [[Sludge Farm]] in the [[Not Far Sewer]] to farm...sludge. And mushrooms. 

# Notes

- Due to concerns about the fungi clogging up filters used for the drinking water supply of [[Hood Station]] among others, the party convinced [[Mira Sporehand]] that it would be mutually beneficial to move the Sludge Farm to the Station after the next harvest

# NPCs

```base
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  organization_names: organizations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Organization-embed
    filters:
      and:
        - formula.organization_names.contains("Sludge Farmers")
    order:
      - file.name
      - brief
      - locations
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain
```


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
