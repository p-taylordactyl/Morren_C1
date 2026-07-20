---
dg-publish: true
aliases:
  - garage
type: group
cover: "[[location_hoodstation_endlinegarage.webp]]"
created: 2026-05-08
modified: 2026-07-20
parent: "[[Hood Station]]"
associations:
  - "[[Katriel Buchanon|Kat Buchanon]]"
locations:
  - "[[Hood Station]]"
tags:
---
![[location_hoodstation_endlinegarage.webp]]

# Description

Endline Garage started (and remains at its core) the workshop of [[Thorbin Sprake]], a mechanical genius and [[Hood Station]]'s resident tall dwarf. After he quite literally fell into the [[Hood Station|station]] horribly, he set up a workshop space - at first just to build himself some prosthetics, but ultimately using it as a home base for ongoing maintenance work around the station. As the station started to grow, the garage grew with it, and eventually Thorbin expanded his projects, creating a community auto-share as well as an apprenticeship program. In his free time, he works on inventions to improve the lives of the station and its residents.

**What they do for Hood Station**: The shop builds and maintains a small fleet of community scrap autos, providing Hood Stations' residents with reliable transport, as well as offering build and repair services for residents on a pay/barter-what-you-can basis. Thorbin also offers shop apprenticeships for the youth and/or unemployed, where he teaches the skills needed to keep the lights on and the engines running in the community.

### Leadership

Thorbin Sprake was a mechanic for the [[Titan Corporation]], until he lost his legs and most of his right arm in a freak accident (surprisingly) unrelated to the workplace. The long tale he spins for curious gawkers includes but is not limited to: a carjacking, a fall down several flights of stairs, a butcher shop, a cat in heat, a dumpster fire, and ultimately, a lucky bounce onto a broken manhole cover, where he fell directly into the arms of one [[Memaw Shoe]]. Through sheer determination, she and the few founding residents of Hood Station patched the dwarf up as best they could, and he miraculously survived, which still left him with only one good arm. With the Titan Corporation uninterested in continuing his employment, Thorbin instead dedicated his mechanic skills to restoring both his missing limbs and the home of the woman that saved him (starting with the manhole covers). Now, Thorbin stands 6ft tall on his homemade prosthetic legs and proudly runs the Endline Garage, a mechanic (and general tinkering) shop where he builds and maintains scrap vehicles as well as working on various mechanical projects for the burgeoning station community.



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
        - formula.organization_names.contains("Endline Garage")
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
        - file.hasLink("Endline Garage")
    order:
      - file.name
      - locations
```