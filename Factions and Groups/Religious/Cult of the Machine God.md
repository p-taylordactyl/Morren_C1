---
title:
dg-publish: true
aliases:
  - Machine God worshippers
type: religious group
cover:
created: 2026-07-06
modified: 2026-07-14
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
views:
  - type: cards
    name: Organizations-embedonly
    filters:
      and:
        - organizations.contains("Cult of the Machine God")
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
