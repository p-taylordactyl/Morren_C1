---
title: The Box Boys
dg-publish: true
aliases:
  - Box Boys
  - Box Boy
type: underground faction
cover: "[[faction_boxboys.webp]]"
created: 2026-04-23
modified: 2026-07-14
associations:
locations:
  - "[[Box City]]"
tags:
---

![[faction_boxboys.webp||banner p+t]]

# Description

The Box Boys are a territorial gang that controls an abandoned cargo container lot on the industrial fringe of [[Old Valence]], a former logistics yard left behind after major shipping routes were automated and rerouted through orbital and arcane transit systems. What was once a flat expanse of idle freight containers has been transformed into a dense vertical settlement, with crates stacked into irregular towers, bridges welded between rows, and entire neighborhoods carved out inside repurposed cargo shells. The area is commonly referred to as the [[Box City]], though no official maps still acknowledge its existence.

The gang uses the container city as both living space and defensive structure. Individual stacks are reinforced with scrap plating, barricades, and internal passageways known only to members. Power is siphoned from nearby industrial grids and derelict substations. Water is collected through condensation systems, rain capture, and illegal pipeline taps. Most containers are refitted into living quarters, workshops, drug labs, chop shops, or storage vaults. Exterior access points are limited, with narrow corridors, retractable bridges, and hidden drop shafts creating natural chokepoints throughout the settlement.

The Box Boys primarily operate in smuggling, theft, and black-market logistics. Their territory sits on top of abandoned shipping registries and outdated cargo tracking systems, allowing them to intercept misrouted goods, hijack forgotten freight, and repurpose sealed containers that were never properly reclaimed. They also specialize in moving contraband through routes that still exist in corporate infrastructure but are no longer actively monitored. Many members are former dock workers, warehouse staff, or freight security contractors who already understood logistics systems before being displaced.

During the Corporate Wars, the container yard functioned as an informal exchange zone where multiple factions quietly moved supplies, refugees, and stolen materials outside of official oversight. After the wars ended, most corporate interests abandoned the area entirely, leaving behind infrastructure that the Box Boys gradually seized and fortified. Several of the gang’s senior figures are veterans from that period, experienced in both urban conflict and supply manipulation.

In the Modern Age, the Box Boys maintain control by remaining small, mobile, and difficult to formalize. They avoid large-scale operations that would attract megacorporate attention, focusing instead on steady, low-profile trade and territorial control. Their strength lies in their environment. The container city is a maze of steel corridors, hidden access points, and layered defenses that makes external enforcement costly and unpredictable. As long as the Box Boys remain economically inconvenient rather than strategically valuable, they are tolerated as another unofficial territory within the neglected industrial zones of Old Valence.



# NPCs

```base
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
views:
  - type: cards
    name: Organizations-embedonly
    filters:
      and:
        - organizations.contains("Box Boys")
    order:
      - file.name
      - brief
      - locations
      - associates
    image: note.cover
    cardSize: 240
    imageAspectRatio: 1.1
```



# Sessions Encountered
