---
title: Lightning Crew
dg-publish: true
aliases:
  - Lightning Crew
type: underground group
cover:
created: 2026-06-29
modified: 2026-07-14
parent: "[[West Valence Saints]]"
associations:
  - "[[Dominion Crew]]"
locations:
  - "[[Westreach]]"
tags:
---
# Description

A crew of the [[West Valence Saints|Saints]] who follow principles similar to the [[Dominion Crew]]. 

# Notes

[[Kieran Graves]] was a member of the crew until he failed his initiation by refusing to kill someone. 

While helping Kieran, the party disabled several crew members (and killed one on accident). They took two hostages and called the [[Enforcers]] to pick up the rest.



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
        - organizations.contains("Lightning Crew")
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
