---
title: Enforcers
dg-publish: true
aliases:
type: corporate group
cover: "[[placeholder.webp]]"
created: 2026-06-29
modified: 2026-07-14
parent: "[[Oligarchs]]"
associations:
locations:
tags:
---
# Description

A group that can be called out to come pick up criminals and take them to some kind of prison to await trial. If video evidence of wrongdoing is provided at the time of the arrest, no witness is needed at the trial. However, without video evidence there must be testimony in order for a conviction to occur.

# Notes



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
        - organizations.contains("Enforcers")
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
