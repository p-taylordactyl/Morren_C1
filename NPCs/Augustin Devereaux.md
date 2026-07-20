---
dg-publish: true
type: npc
aliases:
  - Augustin
  - Devereaux
cover:
created: 2026-05-04
modified: 2026-07-19
disposition:
  - enemy
organizations:
  - "[[Titan Corporation]]"
associates:
brief: The man Keena and Max beat into a coma for causing and covering up the Titan Line Incident.
tags:
status:
  - comatose
locations:
  - unknown
---

![[npc_augustindevereaux.webp|400]]

# Description

Individual responsible for accident at the [[Titan Corporation]] that killed over 50 people, including [[Keena O'Malley|Keena]]'s brother, Lorcan O'Malley, and wounding many others. He covered up the accident but [[Keena O'Malley|Keena]] and [[Maximilius Adkins|Max]] were able to track it back to him. They originally just planned to question him and get the answers they were looking for, but ended up beating him into a coma. 

# Notes

- Our mysterious [[Stalker]] texted [[Gideon Oublier|Gideon]] a picture of Devereaux in a coma along with his last name
- based on the Stalker's fixation with Max and Keena, may be a close friend or relative

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
        - file.hasLink("Augustin Devereaux")
    order:
      - file.name
      - locations
```
