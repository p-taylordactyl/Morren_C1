---
title: steel-defender-efa
draft: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/efa
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Steel Defender"
---
# [Steel Defender](CLI/bestiary/construct/steel-defender-efa.md)
*Source: Eberron: Forge of the Artificer p. 19*  

```statblock
"name": "Steel Defender (EFA)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac_class": "12 + your Intelligence modifier"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "14"
  - !!int "4"
  - !!int "10"
  - !!int "6"
"speed": "40 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](CLI/rules/conditions.md#Charmed), [exhaustion](CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](CLI/rules/conditions.md#Poisoned)"
"senses": "[Darkvision](CLI/rules/senses.md#Darkvision) 60 ft., passive Perception\
  \ 10"
"languages": "understands the languages you know"
"traits":
  - "desc": "Add your [Proficiency Bonus](CLI/rules/variant-rules/proficiency-xphb.md)\
      \ to any ability check or saving throw the defender makes."
    "name": "Steel Bond"
"actions":
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 1d8 + 2 plus your Intelligence modifier Force damage."
    "name": "Force-Empowered Rend"
  - "desc": "The defender, or one Construct or object it can see within 5 feet of\
      \ itself, regains a number of [Hit Points](CLI/rules/variant-rules/hit-points-xphb.md)\
      \ equal to 2d8 plus your Intelligence modifier."
    "name": "Repair (3/Day)"
"reactions":
  - "desc": "Trigger: A creature the defender can see within 5 feet of itself makes\
      \ an attack roll against a creature other than the defender. _Response:_ The\
      \ triggering creature makes the attack roll with [Disadvantage](CLI/rules/variant-rules/disadvantage-xphb.md)."
    "name": "Deflect Attack"
"source":
  - "EFA"
"image": "CLI/bestiary/construct/token/steel-defender-efa.webp"
```
^statblock