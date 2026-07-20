---
dg-publish: true
aliases:
  - Machine God worshippers
type: religious group
cover:
created: 2026-07-06
modified: 2026-07-16
parent:
associations:
locations:
  - "[[Filter Shrine]]"
  - "[[Relay Shrine]]"
tags:
---

# Description

People who worship the Machine God and tend to the Machine Spirits they believe live inside mechanical things. 

# Notes

- The Machine God prefers used mechanical components/offerings (such as used motor oil) to new

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
        - formula.organization_names.contains("Cult of the Machine God")
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
