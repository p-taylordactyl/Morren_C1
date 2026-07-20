---
dg-publish: true
type: npc
aliases:
cover: "[[npc_sprocket.webp]]"
created: 2026-04-27
modified: 2026-07-19
disposition:
  - neutral
  - friendly
organizations:
  - "[[Sewer Goblins]]"
associates:
brief: A goblin merchant in the bazaar located in the south section of the Not Far Sewer
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Floodgate Bazaar]]"
---

![[npc_sprocket.webp|400]]

# Description

A goblin merchant in the [[Floodgate Bazaar|bazaar]] located in the south section of the [[Not Far Sewer]]. Likes to party.

# Notes

# Session Mentions

```base
filters:
  and:
    - type == "session_note"
    - file.folder != "admin/templates"
formulas:
  test_links: file.links.join(", ")
  test_haslink: file.hasLink("Sprocket")
  test_haslink_v2: file.links.contains("sprocket")
  raw_locations: locations.join(";;")
  raw_locations_length: locations.join(" | ").length
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
        - file.links.join(",").contains("sprocket")
    order:
      - file.name
      - locations
    sort:
      - property: file.name
        direction: ASC
      - property: locations
        direction: ASC
  - type: table
    name: Debug
    filters:
      and:
        - file.links.join(",").lower().contains("sprocket")
    order:
      - file.name
      - formula.raw_locations
      - formula.raw_locations_length
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      formula.raw_locations: 588

```

