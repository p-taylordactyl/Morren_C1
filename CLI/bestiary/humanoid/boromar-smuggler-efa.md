---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/efa
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/halfling
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Boromar Smuggler"
---
# [Boromar Smuggler](CLI/bestiary/humanoid/boromar-smuggler-efa.md)
*Source: Eberron: Forge of the Artificer p. 57*  

Smugglers employed by the Boromar Clan (mostly halflings) are notoriously hard to catch. These speedy criminals traffic everything from narcotics to illegal arcane weaponry across Sharn.

```statblock
"name": "Boromar Smuggler (EFA)"
"size": "Small"
"type": "humanoid"
"subtype": "halfling"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "15"
  - !!int "12"
  - !!int "11"
  - !!int "10"
  - !!int "14"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Perception](CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Sleight of Hand](CLI/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+6"
  - "name": "[Stealth](CLI/rules/skills.md#Stealth)"
    "desc": "+6"
"gear":
  - "[leather armor](CLI/items/leather-armor-xphb.md)"
  - "[pistol](CLI/items/pistol-xphb.md)"
  - "[shortsword](CLI/items/shortsword-xphb.md)"
"senses": "passive Perception 12"
"languages": "Common, Halfling, Thieves' cant"
"cr": "1/2"
"traits":
  - "desc": "The smuggler can move through the space of any creature that is of a\
      \ larger size, but it can't stop there."
    "name": "Hustle"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage plus 2 (1d4) Poison damage."
    "name": "Shortsword"
  - "desc": "*Ranged Attack Roll:* +4, range 30/90 ft. *Hit:* 7 (1d10 + 2) Piercing\
      \ damage."
    "name": "Pistol"
"source":
  - "EFA"
"image": "CLI/bestiary/humanoid/token/boromar-smuggler-efa.webp"
```
^statblock