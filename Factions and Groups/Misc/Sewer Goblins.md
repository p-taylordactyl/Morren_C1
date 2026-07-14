---
aliases:
type: group
cover: "[[npc_sprocket.webp]]"
created: 2026-06-01
modified: 2026-07-14
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
views:
  - type: cards
    name: Organizations-embedonly
    filters:
      and:
        - organizations.contains("Sewer Goblins")
    order:
      - file.name
      - brief
      - locations
      - associates
    image: note.cover
    cardSize: 240
    imageAspectRatio: 1.1
```




# Session Mentions

![[0 Session Index.base#Encounters]]
