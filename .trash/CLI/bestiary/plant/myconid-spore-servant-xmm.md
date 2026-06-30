---
title: myconid-spore-servant-xmm
draft: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Myconid Spore Servant"
---
# [Myconid Spore Servant](CLI/bestiary/plant/myconid-spore-servant-xmm.md)
*Source: Monster Manual (2024) p. 223*  

Spore servants are corpses that have been overgrown and reanimated by a myconid sovereign's spores. These fungus-infested bodies are extensions of a myconid sovereign and obey its will.

## Myconids

*Keepers of the Spore*

- **Habitat.** Underdark  
- **Treasure.** Any  

Myconids dwell in remote Underdark reaches overgrown with molds and mushrooms. These ambulatory fungal creatures tend to their sanctuaries and avoid becoming embroiled in the conflicts of other creatures. They use specialized spores to communicate, to alert one another to danger, and to defend themselves. When myconids encounter others beings, they use mind-linking spores to allow nearby creatures to telepathically share thoughts. Nevertheless, myconids' goals remain mysterious to most non-fungal creatures.

```statblock
"name": "Myconid Spore Servant (XMM)"
"size": "Small or Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "2"
  - !!int "6"
  - !!int "1"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "[blinded](CLI/rules/conditions.md#Blinded), [charmed](CLI/rules/conditions.md#Charmed),\
  \ [frightened](CLI/rules/conditions.md#Frightened), [paralyzed](CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](CLI/rules/conditions.md#Poisoned)"
"senses": "[Blindsight](CLI/rules/senses.md#Blindsight) 30 ft., passive Perception\
  \ 8"
"languages": "telepathy 30 ft."
"cr": "1"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Bludgeoning\
      \ damage plus 2 (1d4) Poison damage."
    "name": "Slam"
"source":
  - "XMM"
"image": "CLI/bestiary/plant/token/myconid-spore-servant-xmm.webp"
```
^statblock

## Environment

underdark