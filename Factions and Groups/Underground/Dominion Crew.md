---
title: Dominion Crew
dg-publish: true
type: underground group
cover:
created: 2026-04-29
modified: 2026-07-14
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
views:
  - type: cards
    name: Organizations-embedonly
    filters:
      and:
        - organizations.contains("Dominion Crew")
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
