---
title: Dominion Crew
dg-publish: true
type: underground group
cover:
created: 2026-04-29
modified: 2026-07-16
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

![[0 Session Index.base#Encounters]]
