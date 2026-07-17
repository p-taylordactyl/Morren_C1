---
title: Valencian Seahorses
dg-publish: true
aliases:
  - Seahorses
type: corporate faction
cover: "[[faction_valencianseahorses.webp]]"
created: 2026-03-05
modified: 2026-07-16
associations:
locations:
  - "[[Crownlight Strip]]"
  - "[[Seahorse Stadium]]"
tags:
---

![[faction_valencianseahorses.webp]]

# Description

The Valencian Seahorses are a prolific Aquaball team renowned across Morren as the reigning champions, holding more titles and recorded victories than any other franchise in the Morren Aquaball League. Their matches draw audiences from across the Archipelago, broadcast through arcane relays and immersive scrying arrays that allow spectators to experience the game from within the tank itself. To many citizens of Morren, Aquaball is not merely entertainment but a cultural institution, a shared spectacle that bridges the divides between sub-cities, factions, and social strata.

Aquaball is played inside a colossal, sealed glass arena known as a Balltank, typically a spherical or cylindrical structure filled with enchanted water that remains perfectly clear regardless of turbulence or impact. Each team fields six active players at a time, though rosters usually include a dozen or more specialists rotated between matches. Players rely on a mix of archotech augmentations, arcane harnesses, alchemical jets, or innate magical abilities to navigate the three-dimensional space, allowing for bursts of speed, sudden directional shifts, and controlled hovering within the water column. Physical contact is permitted, but lethal force and reality-altering magic are strictly prohibited by League regulation, enforced by embedded ward systems and autonomous referee constructs.

The objective of the game is to score points by delivering the Ball, a dense, rune-inscribed sphere that resists magical interference, into one of the opposing team’s goal rings. These rings float at opposite ends of the tank and slowly drift along pre-set vertical and horizontal paths, ensuring that no two scoring opportunities are ever quite the same. A standard goal is worth one point, but more dangerous plays, such as scoring while passing through designated high-pressure zones or performing a chained relay between multiple teammates, can yield bonus points depending on the match format. Games are divided into three periods, each lasting fifteen minutes, with short intermissions during which the tank is stabilized and the field wards are recalibrated.

Strategically, Aquaball is as much about spatial control as it is about raw athleticism. Teams must manage vertical territory, using defenders to block ascent routes while attackers exploit blind angles and pressure currents. Specialized roles have emerged over time: Anchors who dominate central space and disrupt enemy formations, Runners who specialize in rapid ball transport, and Keepers who guard the goal rings using layered shields and counter-force fields. The best teams, like the Valencian Seahorses, are known for fluid role switching, with players seamlessly shifting between offense and defense in response to evolving conditions within the tank.

Despite their fame, the Seahorses themselves are a relatively small cadre of elite athletes, elevated to near-mythic status through branding, spectacle, and constant media presence. Individually, they possess little formal authority beyond the arena, serving primarily as public icons rather than political actors. Behind them, however, exists an enormous infrastructure of managers, trainers, engineers, arcanists, marketers, and fan organizations who treat Aquaball as both sacred tradition and industrial enterprise. Corporate sponsors fund the development of new archotech gear, commission experimental training environments, and lobby the League to adjust rules in ways that favor emerging playstyles or profitable rivalries.

Over time, this ecosystem has transformed the “love of Ball” into a genuine social force. Fanatics organize mass viewing rituals, decorate entire districts in team colors, and occasionally riot or strike in response to controversial referee calls or player trades. Entire supply chains exist solely to serve the Aquaball economy, from energy allocation for Balltanks to black-market enhancement tech designed to skirt League regulations. While the Seahorses may lack direct power, their symbolic weight is immense, and in Morren, public sentiment shaped by Aquaball can influence corporate policy, urban planning, and even the deployment of security forces. In this way, the game quietly rivals traditional institutions as one of the most potent engines of loyalty, identity, and collective behavior in the Modern Age.


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
        - formula.organization_names.contains("Valencian Seahorses")
    order:
      - file.name
      - brief
      - locations
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain
```



# Sessions Encountered

![[0 Session Index.base#Encounters]]