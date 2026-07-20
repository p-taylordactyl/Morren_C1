---
dg-publish: true
aliases:
  - Lightning Crew
type: underground group
cover:
created: 2026-06-29
modified: 2026-07-16
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
formulas:
  organization_names: organizations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Organization-embed
    filters:
      and:
        - formula.organization_names.contains("Lightning Crew")
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
