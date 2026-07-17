---
title: Enforcers
dg-publish: true
aliases:
type: corporate group
cover: "[[placeholder1.webp]]"
created: 2026-06-29
modified: 2026-07-16
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
formulas:
  organization_names: organizations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Organization-embed
    filters:
      and:
        - formula.organization_names.contains("Enforcers")
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
