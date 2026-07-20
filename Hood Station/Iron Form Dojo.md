---
dg-publish: true
aliases:
  - Dojo
  - Chojo
type: group
cover: "[[location_hoodstation_ironformdojo.webp]]"
created: 2026-05-25
modified: 2026-07-20
parent: "[[Hood Station]]"
associations:
  - "[[Keena O'Malley]]"
locations:
  - "[[Hood Station]]"
tags:
---
![[location_hoodstation_ironformdojo.webp]]

# Description

The Iron Form Dojo initially started as something a bit more informal -- [[Cillian Ward]] and his family were mourning the loss of his nephew, Lorcan O'Malley, and the dojo was a place they could work out their frustrations in a healthier manner, as well as practice self defense. Eventually, more people started stopping by -- members of the guard who wanted a place to spar and some of the younger residents of [[Hood Station]] who wanted to learn to fight. Cillian happily opened the dojo's doors to members of the community, setting up class schedules and clubs so others could enjoy and learn as well. There's a small memorial shrine for Lorcan in the dojo, and the family stays in apartments located above.

**What they do for Hood Station**: The Iron Form Dojo teaches various martial arts and self defense classes, allowing the residents of Hood Station to learn to defend themselves or spar as a way to keep fit, decompress, and bond. Members and instructors often take on odd jobs as a protective detail for other members of Hood Station if needed. They also have semiformal regular tournaments for different disciplines or age brackets. And for a few pious few, they may congregate at the dojo after hours for (secret) religious services.

**What Hood Station does for them**: Provides a permanent place for practicing fighting. The community will also pitch in for different prizes for their tournaments -- these are rarely things like money and are tailored to the specific age groups or events themselves. Some members of the community, usually the guard, will hold workshops or act as guest teachers for special classes.

### Leadership

Cillian Ward. A human man in his late 40s/early 50s, originally from [[Westreach]]. Although he looks severe, he is a rather jovial man, and always has a kind word to spare for someone who needs some encouragement, though he isn't above a bit of tough love if someone needs it. He's a master martial artist and enjoys learning and practicing new disciplines. His guiding tenets in both the dojo and his own life are Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit.

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
        - formula.organization_names.contains("Iron Form Dojo")
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
        - file.hasLink("Iron Form Dojo")
    order:
      - file.name
      - locations
```
