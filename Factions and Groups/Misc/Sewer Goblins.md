---
dg-publish: true
aliases:
  - goblins
type: group
cover: "[[npc_sprocket.webp]]"
created: 2026-06-01
modified: 2026-07-16
parent:
associations:
locations:
  - "[[Not Far Sewer]]"
  - "[[Floodgate Bazaar]]"
tags:
---

# Description

A group of goblins who live in the [[Not Far Sewer]] and run the [[Floodgate Bazaar]].


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
        - formula.organization_names.contains("Sewer Goblins")
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

```base
filters:
  and:
    - type == "session_note"
    - file.folder != "admin/templates"
properties:
  file.name:
    displayName: Session
  note.locations:
    displayName: Session Locations
views:
  - type: table
    name: Encounters
    filters:
      and:
        - file.hasLink("<%tp.file.title%>")
    order:
      - file.name
      - locations
```
