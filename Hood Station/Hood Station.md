---
dg-publish: true
aliases:
  - station
type:
  - faction
  - location
cover:
created: 2026-05-20
modified: 2026-07-23
district: "[[Cloud District]]"
parent:
associations:
  - "[[Morrgen's Community Center]]"
  - "[[Endline Garage]]"
  - "[[The Troupe]]"
  - "[[The Redacted]]"
  - "[[Protective Association for Wayward and Neglected Strays|PAWNS]]"
  - "[[Iron Form Dojo]]"
locations:
tags:
---

# Description

Hood Station has been the stage for a variety of actors throughout the years. During the Corporate Wars it was a public bomb shelter - when it was in operation it served as the Headquarters for the [[Bellanova Family]] before they took over the Towers - for a short time after it was retired from service the [[Box Boys]] were utilizing it to test their "submersible vehicles" which were in fact just modified shipping containers before they were run off by the [[Ghosts of the Flooded Zone|Ghosts]] whose presence marked the station as "haunted". None of these regime changes ever proved enough to drive away [[Memaw Shoe]], however. In time her presence would inspire others to brave the Station once more - now after a great many houses were demolished in the [[Cloud District]] to make room for even larger mega towers that will not be habitable for years to come; a great influx of folk from across the district have come with no where else to go and hopes of creating a new future.

_**Goals:**_ Find Equilibrium with the new influx of "settlers", Maintain a low-profile to ward off corporate and gang influence, Survive 

_**Themes:**_ Survival, Creating One's Place in the World, Lost/Found, Ingenuity, When a Door Closes - A Window Opens, Greater Good, Necessary Sacrifices

### Leadership

[[Memaw Shoe]]: Once a custodian of Hood Station - upon its retiring from service she was unable to secure other work leading to the loss of her apartment in [[Bellanova Towers]]. With no where else to turn she fashioned a makeshift home in Hood Station where she spent years on her own. Others would come seeking to build a community center and Shoe would turn her wisdom both of the tunnels systems and its dangers toward their cause. In more recent times her wisdom, unorthodox but reliable skills, and matronly approach to conflict resolution has proven invaluable to those who have followed in her shoeprints and thus earned her much respect; with many in the burgeoning community considering her the closest thing Da Hood has to a leader. 


# NPCs

```base
filters:
  and:
    - type == "session_note"
    - file.folder != "admin/templates"
properties:
  file.name:
    displayName: Session
views:
  - type: list
    name: Encounters
    filters:
      and:
        - file.links.join(", ").contains("Hood Station")
    order:
      - file.name
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
