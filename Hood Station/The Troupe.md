---
dg-publish: true
aliases:
  - Troupe
  - The Stage
type: group
cover: "[[location_hoodstation_thetroupe.webp]]"
created: 2026-05-25
modified: 2026-07-23
parent: "[[Hood Station]]"
associations:
  - "[[Dorian Caldwell]]"
locations:
  - "[[Hood Station]]"
tags:
---
![[location_hoodstation_thetroupe.webp]]
# Description

A menagerie of writers, actors, poets, musicians from many previous walks of life who collectively wandered through Old Valence for a while. Originally formed from a small band of actors down on their luck who were unhappy with the overbearing nature of Crownlight Media and Paragon Soundworks sought to put their own voice into the world. As they traveled they gathered more people to The Troupe; street artists, buskers, the like. Through their travels they heard about [[Hood Station]] through a rumor and decided to make it their permanent residence. 

**What they do for station:** In Hood Station they paint murals, put on shows, play music, but also teach the people of the station of the arts in whichever medium they wish to pursue. Occasionally a group of them will head up to the park in the Heart of Valance to perform music/plays in the bandshell for tips or sell art, using the funds to help get things for the commune which could only be bought from the rest of the city. 

**What the station does for them:** Provides a permanent place where they can create art as well as protection.

### Leadership

[[Az]] - Androgynous Tiefling late 30's, denies being the leader, but everyone seems to look towards them. One of the original members of The Troupe. They keep their ear to the ground as best as they can. And genuinely wants to help people go after their artistic goals.

They emphasize that art is supposed to be messy and confusing. They encourage others to pursue art. Whether it be for personal reasons, to spread awareness of injustices or to find beauty in the darkness of this city they all call home. Though they now have a permanent place to stay some nomadic tendencies have prevailed through. Popup art galleries, one day concerts/shows, sidewalk art classes, midnight graffiti murals. Though it is not mandatory some members have taken to branding their art in some way with a dented crown and a broken halo (an old drawing of Az’s). 



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
        - formula.organization_names.contains("The Troupe")
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

```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  join(map(locations, (l) => "• " + string(l)), "<br>") AS "Session Locations"
FROM ""
WHERE type = "session_note"
  AND file.folder != "admin/templates"
  AND contains(this.file.inlinks, file.link)
SORT file.name ASC, locations ASC
```
