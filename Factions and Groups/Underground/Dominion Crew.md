---
dg-publish: true
type: underground group
cover:
created: 2026-04-29
modified: 2026-07-23
parent: "[[West Valence Saints]]"
associations:
  - "[[Hadrian Buchanon]]"
locations:
  - "[[Westreach]]"
tags:
---

# Description

A militant religious sect of the [[West Valence Saints]] who practice their own form of the Doctrine of Ordained Authority. They're known for being more violent than the broader Saints organization.

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
        - formula.organization_names.contains("Dominion Crew")
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
