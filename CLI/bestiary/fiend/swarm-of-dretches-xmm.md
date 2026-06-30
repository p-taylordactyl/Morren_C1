---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Swarm of Dretches"
---
# [Swarm of Dretches](CLI/bestiary/fiend/swarm-of-dretches-xmm.md)
*Source: Monster Manual (2024) p. 104*  

Swarms of dretches sometimes escape the Abyss onto other planes of existence, or they might be part of a demonic invasion. Without direction, these crude demons rampage and despoil with cruel enthusiasm.

## Dretches

*Demons of Frenzy and Vulgarity*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

The servants and victims of greater demons, dretches embody petty instincts, chaotic impulses, and violent urges. Dretches exist in unfathomable numbers in the depths of the Abyss, where their reeking throngs fill vast demonic hordes.

> [!quote] A quote from Jaranda, Expert on the Abyss  
> 
> Ah, the infinite wonders of the Abyss. If there's anything you don't like, you'll find it here.


```statblock
"name": "Swarm of Dretches (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "11"
  - !!int "14"
  - !!int "5"
  - !!int "8"
  - !!int "3"
"speed": "40 ft."
"damage_resistances": "bludgeoning, cold, fire, lightning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[charmed](CLI/rules/conditions.md#Charmed), [frightened](CLI/rules/conditions.md#Frightened),\
  \ [grappled](CLI/rules/conditions.md#Grappled), [paralyzed](CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](CLI/rules/conditions.md#Petrified), [poisoned](CLI/rules/conditions.md#Poisoned),\
  \ [prone](CLI/rules/conditions.md#Prone), [restrained](CLI/rules/conditions.md#Restrained),\
  \ [stunned](CLI/rules/conditions.md#Stunned)"
"senses": "[Darkvision](CLI/rules/senses.md#Darkvision) 60 ft., passive Perception\
  \ 9"
"languages": "Abyssal; telepathy 60 ft. (works only with creatures that understand\
  \ Abyssal)"
"cr": "4"
"traits":
  - "desc": "*Constitution Saving Throw:* DC 12, any creature that starts its turn\
      \ in a 10-foot [Emanation](CLI/rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the swarm. *Failure:* The target has the [Poisoned](CLI/rules/conditions.md#Poisoned)\
      \ condition until the start of its next turn. While [Poisoned](CLI/rules/conditions.md#Poisoned),\
      \ the target can take either an action or a [Bonus Action](CLI/rules/variant-rules/bonus-action-xphb.md)\
      \ on its turn, not both, and it can't take Reactions."
    "name": "Fetid Aura"
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Small creature. The\
      \ swarm can't regain [Hit Points](CLI/rules/variant-rules/hit-points-xphb.md)\
      \ or gain [Temporary Hit Points](CLI/rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Swarm"
"actions":
  - "desc": "The swarm makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 12 (3d6 + 2) Slashing\
      \ damage, or 9 (3d4 + 2) Slashing damage if the swarm is [Bloodied](CLI/rules/conditions.md#Bloodied)."
    "name": "Rend"
"source":
  - "XMM"
"image": "CLI/bestiary/fiend/token/swarm-of-dretches-xmm.webp"
```
^statblock

## Environment

planar, abyss