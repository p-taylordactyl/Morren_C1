---
dg-publish: true
aliases:
  - Community Center
type: group
cover: "[[location_hoodstation_communitycenter.webp]]"
created: 2026-05-25
modified: 2026-07-20
parent: "[[Hood Station]]"
associations:
  - "[[Gideon Oublier]]"
locations:
  - "[[Hood Station]]"
tags:
---
![[location_hoodstation_communitycenter.webp]]
# Description

Morrgen's Community Center came to be more from necessity than ambition. The [[Titan Corporation]] and the [[West Valence Saints|Saints]] left the people dwelling in these neighborhoods broken in mind, body, and spirit. Gideon's [[Morrgen Oublier|mother]] took it upon herself to help the people mend what could be mended and rebuild that which was beyond repair. What started as just a run down train car eventually turned into a community.

**What they do for Hood Station**: A place of respite for those in need. Whether it's medical care, spiritual guidance or food the Community Center functions around the clock for the community.

**What Hood Station does for them**: If The Hood was a body, the community center would be its heart. A heart needs a body to do it's job or it is just a pound of flesh.


### Leadership

[[Morrgen Oublier]], a high elf in her early hundreds with deep wine red hair.  She is kind and graceful, not a pillar of the community but the very foundation that it was built on.  She believes in the [[Covenant of Equal Measure]] but sees value in all of Morrenel's teachings.  Her perfect world is one where everyone is seen as an equal and has all the same opportunities. 


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
        - formula.organization_names.contains("Morrgen's Community Center")
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
        - file.hasLink("Morrgen's Community Center")
    order:
      - file.name
      - locations
```
