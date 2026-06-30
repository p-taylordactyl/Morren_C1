---
title: swarm-of-venomous-snakes-xmm
draft: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Swarm of Venomous Snakes"
---
# [Swarm of Venomous Snakes](CLI/bestiary/beast/swarm-of-venomous-snakes-xmm.md)
*Source: Monster Manual (2024) p. 371. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Swarm of Venomous Snakes (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "36"
"hit_dice": "8d8"
"modifier": !!int "4"
"stats":
  - !!int "8"
  - !!int "18"
  - !!int "11"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](CLI/rules/conditions.md#Charmed), [frightened](CLI/rules/conditions.md#Frightened),\
  \ [grappled](CLI/rules/conditions.md#Grappled), [paralyzed](CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](CLI/rules/conditions.md#Petrified), [prone](CLI/rules/conditions.md#Prone),\
  \ [restrained](CLI/rules/conditions.md#Restrained), [stunned](CLI/rules/conditions.md#Stunned)"
"senses": "[Blindsight](CLI/rules/senses.md#Blindsight) 10 ft., passive Perception\
  \ 10"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny snake. The swarm\
      \ can't regain [Hit Points](CLI/rules/variant-rules/hit-points-xphb.md) or gain\
      \ [Temporary Hit Points](CLI/rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Attack Roll:* +6, reach 5 ft. *Hit:* 8 (1d8 + 4) Piercing\
      \ damage—or 6 (1d4 + 4) Piercing damage if the swarm is [Bloodied](CLI/rules/conditions.md#Bloodied)—\
      plus 10 (3d6) Poison damage."
    "name": "Bites"
"source":
  - "XMM"
"image": "CLI/bestiary/beast/token/swarm-of-venomous-snakes-xmm.webp"
```
^statblock

## Environment

coastal, desert, forest, grassland, hill, swamp