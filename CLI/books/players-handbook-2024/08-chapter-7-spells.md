---
obsidianUIMode: preview
cssclasses:
- json5e-note
tags:
- ttrpg-cli/compendium/src/5e/xphb
aliases:
- "Chapter 7: Spells"
---
# Chapter 7: Spells
*Source: Player's Handbook (2024), p. 235* 

![Archmages of Greyhawk—Jallarzi, Mordenkainen, and Bigby—prepare their magic as they open a gate to another plane](CLI/books/players-handbook-2024/img/181-08-001-jallarzi-mordenkainen-bigby.webp#center)

This chapter gives rules for casting spells. It also includes "descriptions" of common spells in the worlds of Dungeons & Dragons. Those spells are used by many class features, magic items, and monsters.

## Gaining Spells

Before you can cast a spell, you must have the spell prepared in your mind or have access to the spell from a magic item, such as a [Spell Scroll](CLI/items/spell-scroll-xdmg.md). Your features specify which spells you have access to, if any; whether you always have certain spells prepared; and whether you can change the list of spells you have prepared.

### Preparing Spells

If you have a list of level 1+ spells you prepare, your spellcasting feature specifies when you can change the list and the number of spells you can change, as summarized in the Spell Preparation by Class table.

![Preparing Spells; Spell Preparation by Class](CLI/tables/preparing-spells-spell-preparation-by-class-xphb.md)

Most spellcasting monsters don't change their lists of prepared spells, but the DM is free to alter them.

### Always-Prepared Spells

Certain features might give you a spell that you always have prepared. If you also have a list of prepared spells that you can change, a spell that you always have prepared doesn't count against the number of spells on that list.

> [!note] Casting in Armor
> 
> You must have training with any armor you are wearing to cast spells while wearing it. You are otherwise too hampered by the armor for spellcasting.
^casting-in-armor

## Casting Spells

Each "spell description" has a series of entries that provide the details needed to cast the spell. The following sections explain each of those entries, which follow a spell's name.

### Spell Level

Every spell has a level from 0 to 9, which is indicated in a spell's description. A spell's level is an indicator of how powerful it is. Cantrips—simple spells that can be cast almost by rote—are level 0. The rules for each spellcasting class say when its members gain access to spells of certain levels.

#### Spell Slots

Spellcasting is taxing, so a spellcaster can cast only a limited number of level 1+ spells before resting. Spell slots are the main way a spellcaster's magical potential is represented. Each spellcasting class gives its members a limited number of spell slots of certain spell levels. For example, a level 3 Wizard has four level 1 spell slots and two level 2 slots.

When you cast a spell, you expend a slot of that spell's level or higher, effectively "filling" a slot with the spell. Imagine a spell slot is a groove of a certain size—small for a level 1 slot and larger for a higher-level spell. A level 1 spell fits into a slot of any size, but a level 2 spell fits only into a slot that's at least level 2. So when a level 3 Wizard casts [Magic Missile](CLI/spells/magic-missile-xphb.md), a level 1 spell, that Wizard spends one of four level 1 slots and has three remaining.

Finishing a [Long Rest](CLI/rules/variant-rules/long-rest-xphb.md) restores any expended spell slots.

#### Casting without Slots

There are several ways to cast a spell without expending a spell slot:

- **Cantrips.** A cantrip is cast without a spell slot.  
- **Rituals.** Certain spells have the Ritual tag in the Casting Time entry. Such a spell can be cast following the normal rules for spellcasting, or it can be cast as a Ritual. The Ritual version of a spell takes 10 minutes longer to cast than normal, but it doesn't expend a spell slot. To cast a spell as a Ritual, a spellcaster must have it prepared.  
- **Special Abilities.** Some characters and monsters have special abilities that allow them to cast specific spells without a spell slot. This casting is usually limited in another way, such as being able to cast the spell a limited number of times per day.  
- **Magic Items.** [Spell Scrolls](CLI/items/spell-scroll-xdmg.md) and some other magic items contain spells that can be cast without a spell slot. The description of such an item specifies how many times a spell can be cast from it.  

#### Using a Higher-Level Spell Slot

When a spellcaster casts a spell using a slot that is of a higher level than the spell, the spell takes on the higher level for that casting. For instance, if a Wizard casts [Magic Missile](CLI/spells/magic-missile-xphb.md) using a level 2 slot, that *Magic Missile* is level 2. Effectively, the spell expands to fill the slot it is put into.

Some spells, such as [Magic Missile](CLI/spells/magic-missile-xphb.md) and [Cure Wounds](CLI/spells/cure-wounds-xphb.md), have more powerful effects when cast at a higher level, as detailed in a spell's description.

### School of Magic

Each spell belongs to a school of magic. The schools are listed in the Schools of Magic table. These categories help describe spells but have no rules of their own, although some other rules refer to them.

![School of Magic; Schools of Magic](CLI/tables/school-of-magic-schools-of-magic-xphb.md)

### Class Spell Lists

If a spell is on a class's spell list, the class's name appears in parentheses after the spell's school of magic. Some features add a spell to a character's spell list even if the character isn't a member of a class in the parentheses.

### Casting Time

Most spells require the [Magic](CLI/rules/actions.md#Magic) action to cast, but some spells require a Bonus Action, a Reaction, or 1 minute or more. A spell's Casting Time entry specifies which of those is required.

#### One Spell with a Spell Slot per Turn

On a turn, you can expend only one spell slot to cast a spell. This rule means you can't, for example, cast a spell with a spell slot using the [Magic](CLI/rules/actions.md#Magic) action and another one using a Bonus Action on the same turn.

#### Reaction and Bonus Action Triggers

A spell that has a casting time of a Reaction is cast in response to a trigger that is defined in the spell's Casting Time entry. Some spells that have a casting time of a Bonus Action are also cast in response to a trigger defined in the spell.

#### Longer Casting Times

Certain spells—including a spell cast as a [Ritual](CLI/rules/variant-rules/ritual-xphb.md)—require more time to cast: minutes or even hours. While you cast a spell with a casting time of 1 minute or more, you must take the [Magic](CLI/rules/actions.md#Magic) action on each of your turns, and you must maintain [Concentration](CLI/rules/conditions.md#Concentration) while you do so. If your Concentration is broken, the spell fails, but you don't expend a spell slot. To cast the spell again, you must start over.

### Range

A spell's range indicates how far from the spellcaster the spell's effect can originate, and the spell's description specifies which part of the effect is limited by the range.

A range usually takes one of the following forms:

- **Distance.** The range is expressed in feet.  
- **Touch.** The spell's effect originates on something the spellcaster must touch, as defined in the spell.  
- **Self.** The spell is cast on the spellcaster or emanates from them, as specified in the spell.  

If a spell has movable effects, they aren't restricted by its range unless the spell's description says otherwise.

### Components

![An aasimar Wizard uses a crystal material component to focus the magic of Cone of Cold](CLI/books/players-handbook-2024/img/182-08-002-aasimar-wizard.webp#center)

A spell's components are physical requirements the spellcaster must meet to cast the spell. Each spell's description indicates whether it requires Verbal (V), Somatic (S), or Material (M) components. If the spellcaster can't provide one or more of a spell's components, the spellcaster can't cast the spell.

#### Verbal (V)

A Verbal component is the chanting of esoteric words that sound like nonsense to the uninitiated. The words must be uttered in a normal speaking voice. The words themselves aren't the source of the spell's power; rather, the particular combination of sounds, with specific pitch and resonance, sets the threads of magic in motion. Thus, a creature who is gagged or in an area of magical silence can't cast a spell with a Verbal component.

> [!note] Creating Verbal Components
> 
> If you'd like to say a spell's Verbal component, you may make up the words. However you make them, the goal is to create something that's easy to say and that doesn't mean anything in the real world. Consider this method: take the name of the spell, keep only one instance of each of its letters, and rearrange the remaining letters into words. For example, remove the second *l* from [Fireball](CLI/spells/fireball-xphb.md) and rearrange the remaining letters to create *Ber Fila* or *Fel Bira*.
^creating-verbal-components

#### Somatic (S)

A Somatic component is a forceful gesticulation or an intricate set of gestures. A spellcaster must use at least one of their hands to perform these movements.

#### Material (M)

A Material component is a particular material used in a spell's casting, as specified in parentheses in the Components entry. These materials aren't consumed by the spell unless the spell's description states otherwise. The spellcaster must have a hand free to access them, but it can be the same hand used to perform Somatic components, if any.

If a spell doesn't consume its materials and doesn't specify a cost for them, a spellcaster can use a [Component Pouch](CLI/items/component-pouch-xphb.md) (see "chapter 6") instead of providing the materials specified in the spell, or the spellcaster can substitute a [Spellcasting Focus](CLI/rules/variant-rules/spellcasting-focus-xphb.md) if the caster has a feature that allows that substitution. To use a Component Pouch, you must have a hand free to reach into it, and to use a [Spellcasting Focus](CLI/rules/variant-rules/spellcasting-focus-xphb.md), you must hold it unless its description says otherwise (see "chapter 6" for descriptions).

### Duration

A spell's duration is the length of time the spell persists after it is cast. A duration typically takes one of the following forms:

- **Concentration.** A duration that requires Concentration follows the [Concentration](CLI/rules/conditions.md#Concentration) rules.  
- **Instantaneous.** An instantaneous duration means the spell's magic appears only for a moment and then disappears.  
- **Time Span.** A duration that provides a time span specifies how long the spell lasts in rounds, minutes, hours, or the like. For example, a Duration entry might say "1 minute," meaning the spell ends after 1 minute has passed. While a time-span spell that you cast is ongoing, you can dismiss it (no action required) if you don't have the [Incapacitated](CLI/rules/conditions.md#Incapacitated) condition.  

### Effects

The effects of a spell are detailed after its duration entry. Those details present exactly what the spell does, which ignores mundane physical laws; any outcomes beyond those effects are under the DM's purview. Whatever the effects, they typically deal with targets, saving throws, attack rolls, or all three, each of which is detailed below.

#### Targets

A typical spell requires the caster to pick one or more targets to be affected by the spell's magic. A spell's description says whether the spell targets creatures, objects, or something else.

##### A Clear Path to the Target

To target something with a spell, a caster must have a clear path to it, so it can't be behind [Total Cover](CLI/rules/variant-rules/cover-xphb.md).

##### Targeting Yourself

If a spell targets a creature of your choice, you can choose yourself unless the creature must be [Hostile](CLI/rules/variant-rules/hostile-attitude-xphb.md) or specifically a creature other than you.

##### Areas of Effect

Some spells, such as [Thunderwave](CLI/spells/thunderwave-xphb.md), cover an area called an [area of effect](CLI/rules/variant-rules/area-of-effect-xphb.md), which is defined in the "rules glossary". The area determines what the spell targets. The description of a spell specifies whether it has an area of effect, which is typically one of these shapes: [Cone](CLI/rules/variant-rules/cone-area-of-effect-xphb.md), [Cube](CLI/rules/variant-rules/cube-area-of-effect-xphb.md), [Cylinder](CLI/rules/variant-rules/cylinder-area-of-effect-xphb.md), [Emanation](CLI/rules/variant-rules/emanation-area-of-effect-xphb.md), [Line](CLI/rules/variant-rules/line-area-of-effect-xphb.md), or [Sphere](CLI/rules/variant-rules/sphere-area-of-effect-xphb.md).

![](CLI/books/players-handbook-2024/img/183-08-003-areas-of-effect.webp#center)

##### Awareness of Being Targeted

Unless a spell has a perceptible effect, a creature doesn't know it was targeted by the spell. An effect like lightning is obvious, but a more subtle effect, such as an attempt to read thoughts, goes unnoticed unless a spell's description says otherwise.

##### Invalid Targets

If you cast a spell on someone or something that can't be affected by it, nothing happens to that target, but if you used a spell slot to cast the spell, the slot is still expended.

If the spell normally has no effect on a target that succeeds on a saving throw, the invalid target appears to have succeeded on its saving throw, even though it didn't attempt one (giving no hint that the creature is an invalid target). Otherwise, you perceive that the spell did nothing to the target.

#### Saving Throws

Many spells specify that a target makes a saving throw to avoid some or all of a spell's effects. The spell specifies the ability that the target uses for the save and what happens on a success or failure. Here's how to calculate the DC for your spells:

<span class='abilityDc'>**Spell save DC**: Spellcasting + Proficiency Bonus</span>

#### Attack Rolls

Some spells require the caster to make an attack roll to determine whether the spell hits a target. Here's how to calculate the attack modifier for your spells:

<span class='abilityAttackMod'>**Spell attack modifier**: Spellcasting + Proficiency Bonus</span>

#### Combining Spell Effects

The effects of different spells add together while their durations overlap. In contrast, the effects of the same spell cast multiple times don't combine. Instead, the most potent effect—such as the highest bonus—from those castings applies while their durations overlap. The most recent effect applies if the castings are equally potent and their durations overlap. For example, if two Clerics cast [Bless](CLI/spells/bless-xphb.md) on the same target, that target gains the spell's benefit only once; the target doesn't receive two bonus dice. But if the durations of the spells overlap, the effect continues until the duration of the second *Bless* ends.

> [!note] Identifying an Ongoing Spell
> 
> You can try to identify a non-instantaneous spell by its observable effects if its duration is ongoing. To identify it, you must take the [Study](CLI/rules/actions.md#Study) action and succeed on a DC 15 Intelligence ([Arcana](CLI/rules/skills.md#Arcana)) check.
^identifying-an-ongoing-spell

## Spell Descriptions

The spells are presented in alphabetical order.

- [Acid Splash](CLI/spells/acid-splash-xphb.md)  
- [Aid](CLI/spells/aid-xphb.md)  
- [Alarm](CLI/spells/alarm-xphb.md)  
- [Alter Self](CLI/spells/alter-self-xphb.md)  
- [Animal Friendship](CLI/spells/animal-friendship-xphb.md)  
- [Animal Messenger](CLI/spells/animal-messenger-xphb.md)  
- [Animal Shapes](CLI/spells/animal-shapes-xphb.md)  
- [Animate Dead](CLI/spells/animate-dead-xphb.md)  
- [Animate Objects](CLI/spells/animate-objects-xphb.md)  
- [Antilife Shell](CLI/spells/antilife-shell-xphb.md)  
- [Antimagic Field](CLI/spells/antimagic-field-xphb.md)  
- [Antipathy/Sympathy](CLI/spells/antipathy-sympathy-xphb.md)  
- [Arcane Eye](CLI/spells/arcane-eye-xphb.md)  
- [Arcane Gate](CLI/spells/arcane-gate-xphb.md)  
- [Arcane Lock](CLI/spells/arcane-lock-xphb.md)  
- [Arcane Vigor](CLI/spells/arcane-vigor-xphb.md)  
- [Armor of Agathys](CLI/spells/armor-of-agathys-xphb.md)  
- [Arms of Hadar](CLI/spells/arms-of-hadar-xphb.md)  
- [Astral Projection](CLI/spells/astral-projection-xphb.md)  
- [Augury](CLI/spells/augury-xphb.md)  
- [Aura of Life](CLI/spells/aura-of-life-xphb.md)  
- [Aura of Purity](CLI/spells/aura-of-purity-xphb.md)  
- [Aura of Vitality](CLI/spells/aura-of-vitality-xphb.md)  
- [Awaken](CLI/spells/awaken-xphb.md)  

- [Bane](CLI/spells/bane-xphb.md)  
- [Banishing Smite](CLI/spells/banishing-smite-xphb.md)  
- [Banishment](CLI/spells/banishment-xphb.md)  
- [Barkskin](CLI/spells/barkskin-xphb.md)  
- [Beacon of Hope](CLI/spells/beacon-of-hope-xphb.md)  
- [Beast Sense](CLI/spells/beast-sense-xphb.md)  
- [Befuddlement](CLI/spells/befuddlement-xphb.md)  
- [Bestow Curse](CLI/spells/bestow-curse-xphb.md)  
- [Bigby's Hand](CLI/spells/bigbys-hand-xphb.md)  
- [Blade Barrier](CLI/spells/blade-barrier-xphb.md)  
- [Blade Ward](CLI/spells/blade-ward-xphb.md)  
- [Bless](CLI/spells/bless-xphb.md)  
- [Blight](CLI/spells/blight-xphb.md)  
- [Blinding Smite](CLI/spells/blinding-smite-xphb.md)  
- [Blindness/Deafness](CLI/spells/blindness-deafness-xphb.md)  
- [Blink](CLI/spells/blink-xphb.md)  
- [Blur](CLI/spells/blur-xphb.md)  
- [Burning Hands](CLI/spells/burning-hands-xphb.md)  

- [Call Lightning](CLI/spells/call-lightning-xphb.md)  
- [Calm Emotions](CLI/spells/calm-emotions-xphb.md)  
- [Chain Lightning](CLI/spells/chain-lightning-xphb.md)  
- [Charm Monster](CLI/spells/charm-monster-xphb.md)  
- [Charm Person](CLI/spells/charm-person-xphb.md)  
- [Chill Touch](CLI/spells/chill-touch-xphb.md)  
- [Chromatic Orb](CLI/spells/chromatic-orb-xphb.md)  
- [Circle of Death](CLI/spells/circle-of-death-xphb.md)  
- [Circle of Power](CLI/spells/circle-of-power-xphb.md)  
- [Clairvoyance](CLI/spells/clairvoyance-xphb.md)  
- [Clone](CLI/spells/clone-xphb.md)  
- [Cloud of Daggers](CLI/spells/cloud-of-daggers-xphb.md)  
- [Cloudkill](CLI/spells/cloudkill-xphb.md)  
- [Color Spray](CLI/spells/color-spray-xphb.md)  
- [Command](CLI/spells/command-xphb.md)  
- [Commune](CLI/spells/commune-xphb.md)  
- [Commune with Nature](CLI/spells/commune-with-nature-xphb.md)  
- [Compelled Duel](CLI/spells/compelled-duel-xphb.md)  
- [Comprehend Languages](CLI/spells/comprehend-languages-xphb.md)  
- [Compulsion](CLI/spells/compulsion-xphb.md)  
- [Cone of Cold](CLI/spells/cone-of-cold-xphb.md)  
- [Confusion](CLI/spells/confusion-xphb.md)  
- [Conjure Animals](CLI/spells/conjure-animals-xphb.md)  
- [Conjure Barrage](CLI/spells/conjure-barrage-xphb.md)  
- [Conjure Celestial](CLI/spells/conjure-celestial-xphb.md)  
- [Conjure Elemental](CLI/spells/conjure-elemental-xphb.md)  
- [Conjure Fey](CLI/spells/conjure-fey-xphb.md)  
- [Conjure Minor Elementals](CLI/spells/conjure-minor-elementals-xphb.md)  
- [Conjure Volley](CLI/spells/conjure-volley-xphb.md)  
- [Conjure Woodland Beings](CLI/spells/conjure-woodland-beings-xphb.md)  
- [Contact Other Plane](CLI/spells/contact-other-plane-xphb.md)  
- [Contagion](CLI/spells/contagion-xphb.md)  
- [Contingency](CLI/spells/contingency-xphb.md)  
- [Continual Flame](CLI/spells/continual-flame-xphb.md)  
- [Control Water](CLI/spells/control-water-xphb.md)  
- [Control Weather](CLI/spells/control-weather-xphb.md)  
- [Cordon of Arrows](CLI/spells/cordon-of-arrows-xphb.md)  
- [Counterspell](CLI/spells/counterspell-xphb.md)  
- [Create Food and Water](CLI/spells/create-food-and-water-xphb.md)  
- [Create or Destroy Water](CLI/spells/create-or-destroy-water-xphb.md)  
- [Create Undead](CLI/spells/create-undead-xphb.md)  
- [Creation](CLI/spells/creation-xphb.md)  
- [Crown of Madness](CLI/spells/crown-of-madness-xphb.md)  
- [Crusader's Mantle](CLI/spells/crusaders-mantle-xphb.md)  
- [Cure Wounds](CLI/spells/cure-wounds-xphb.md)  

- [Dancing Lights](CLI/spells/dancing-lights-xphb.md)  
- [Darkness](CLI/spells/darkness-xphb.md)  
- [Darkvision](CLI/spells/darkvision-xphb.md)  
- [Daylight](CLI/spells/daylight-xphb.md)  
- [Death Ward](CLI/spells/death-ward-xphb.md)  
- [Delayed Blast Fireball](CLI/spells/delayed-blast-fireball-xphb.md)  
- [Demiplane](CLI/spells/demiplane-xphb.md)  
- [Destructive Wave](CLI/spells/destructive-wave-xphb.md)  
- [Detect Evil and Good](CLI/spells/detect-evil-and-good-xphb.md)  
- [Detect Magic](CLI/spells/detect-magic-xphb.md)  
- [Detect Poison and Disease](CLI/spells/detect-poison-and-disease-xphb.md)  
- [Detect Thoughts](CLI/spells/detect-thoughts-xphb.md)  
- [Dimension Door](CLI/spells/dimension-door-xphb.md)  
- [Disguise Self](CLI/spells/disguise-self-xphb.md)  
- [Disintegrate](CLI/spells/disintegrate-xphb.md)  
- [Dispel Evil and Good](CLI/spells/dispel-evil-and-good-xphb.md)  
- [Dispel Magic](CLI/spells/dispel-magic-xphb.md)  
- [Dissonant Whispers](CLI/spells/dissonant-whispers-xphb.md)  
- [Divination](CLI/spells/divination-xphb.md)  
- [Divine Favor](CLI/spells/divine-favor-xphb.md)  
- [Divine Smite](CLI/spells/divine-smite-xphb.md)  
- [Divine Word](CLI/spells/divine-word-xphb.md)  
- [Dominate Beast](CLI/spells/dominate-beast-xphb.md)  
- [Dominate Monster](CLI/spells/dominate-monster-xphb.md)  
- [Dominate Person](CLI/spells/dominate-person-xphb.md)  
- [Dragon's Breath](CLI/spells/dragons-breath-xphb.md)  
- [Drawmij's Instant Summons](CLI/spells/drawmijs-instant-summons-xphb.md)  
- [Dream](CLI/spells/dream-xphb.md)  
- [Druidcraft](CLI/spells/druidcraft-xphb.md)  

- [Earthquake](CLI/spells/earthquake-xphb.md)  
- [Eldritch Blast](CLI/spells/eldritch-blast-xphb.md)  
- [Elemental Weapon](CLI/spells/elemental-weapon-xphb.md)  
- [Elementalism](CLI/spells/elementalism-xphb.md)  
- [Enhance Ability](CLI/spells/enhance-ability-xphb.md)  
- [Enlarge/Reduce](CLI/spells/enlarge-reduce-xphb.md)  
- [Ensnaring Strike](CLI/spells/ensnaring-strike-xphb.md)  
- [Entangle](CLI/spells/entangle-xphb.md)  
- [Enthrall](CLI/spells/enthrall-xphb.md)  
- [Etherealness](CLI/spells/etherealness-xphb.md)  
- [Evard's Black Tentacles](CLI/spells/evards-black-tentacles-xphb.md)  
- [Expeditious Retreat](CLI/spells/expeditious-retreat-xphb.md)  
- [Eyebite](CLI/spells/eyebite-xphb.md)  

- [Fabricate](CLI/spells/fabricate-xphb.md)  
- [Faerie Fire](CLI/spells/faerie-fire-xphb.md)  
- [False Life](CLI/spells/false-life-xphb.md)  
- [Fear](CLI/spells/fear-xphb.md)  
- [Feather Fall](CLI/spells/feather-fall-xphb.md)  
- [Feign Death](CLI/spells/feign-death-xphb.md)  
- [Find Familiar](CLI/spells/find-familiar-xphb.md)  
- [Find Steed](CLI/spells/find-steed-xphb.md)  
- [Find the Path](CLI/spells/find-the-path-xphb.md)  
- [Find Traps](CLI/spells/find-traps-xphb.md)  
- [Finger of Death](CLI/spells/finger-of-death-xphb.md)  
- [Fire Bolt](CLI/spells/fire-bolt-xphb.md)  
- [Fire Shield](CLI/spells/fire-shield-xphb.md)  
- [Fire Storm](CLI/spells/fire-storm-xphb.md)  
- [Fireball](CLI/spells/fireball-xphb.md)  
- [Flame Blade](CLI/spells/flame-blade-xphb.md)  
- [Flame Strike](CLI/spells/flame-strike-xphb.md)  
- [Flaming Sphere](CLI/spells/flaming-sphere-xphb.md)  
- [Flesh to Stone](CLI/spells/flesh-to-stone-xphb.md)  
- [Fly](CLI/spells/fly-xphb.md)  
- [Fog Cloud](CLI/spells/fog-cloud-xphb.md)  
- [Forbiddance](CLI/spells/forbiddance-xphb.md)  
- [Forcecage](CLI/spells/forcecage-xphb.md)  
- [Foresight](CLI/spells/foresight-xphb.md)  
- [Fount of Moonlight](CLI/spells/fount-of-moonlight-xphb.md)  
- [Freedom of Movement](CLI/spells/freedom-of-movement-xphb.md)  
- [Friends](CLI/spells/friends-xphb.md)  

- [Gaseous Form](CLI/spells/gaseous-form-xphb.md)  
- [Gate](CLI/spells/gate-xphb.md)  
- [Geas](CLI/spells/geas-xphb.md)  
- [Gentle Repose](CLI/spells/gentle-repose-xphb.md)  
- [Giant Insect](CLI/spells/giant-insect-xphb.md)  
- [Glibness](CLI/spells/glibness-xphb.md)  
- [Globe of Invulnerability](CLI/spells/globe-of-invulnerability-xphb.md)  
- [Glyph of Warding](CLI/spells/glyph-of-warding-xphb.md)  
- [Goodberry](CLI/spells/goodberry-xphb.md)  
- [Grasping Vine](CLI/spells/grasping-vine-xphb.md)  
- [Grease](CLI/spells/grease-xphb.md)  
- [Greater Invisibility](CLI/spells/greater-invisibility-xphb.md)  
- [Greater Restoration](CLI/spells/greater-restoration-xphb.md)  
- [Guardian of Faith](CLI/spells/guardian-of-faith-xphb.md)  
- [Guards and Wards](CLI/spells/guards-and-wards-xphb.md)  
- [Guidance](CLI/spells/guidance-xphb.md)  
- [Guiding Bolt](CLI/spells/guiding-bolt-xphb.md)  
- [Gust of Wind](CLI/spells/gust-of-wind-xphb.md)  

- [Hail of Thorns](CLI/spells/hail-of-thorns-xphb.md)  
- [Hallow](CLI/spells/hallow-xphb.md)  
- [Hallucinatory Terrain](CLI/spells/hallucinatory-terrain-xphb.md)  
- [Harm](CLI/spells/harm-xphb.md)  
- [Haste](CLI/spells/haste-xphb.md)  
- [Heal](CLI/spells/heal-xphb.md)  
- [Healing Word](CLI/spells/healing-word-xphb.md)  
- [Heat Metal](CLI/spells/heat-metal-xphb.md)  
- [Hellish Rebuke](CLI/spells/hellish-rebuke-xphb.md)  
- [Heroes' Feast](CLI/spells/heroes-feast-xphb.md)  
- [Heroism](CLI/spells/heroism-xphb.md)  
- [Hex](CLI/spells/hex-xphb.md)  
- [Hold Monster](CLI/spells/hold-monster-xphb.md)  
- [Hold Person](CLI/spells/hold-person-xphb.md)  
- [Holy Aura](CLI/spells/holy-aura-xphb.md)  
- [Hunger of Hadar](CLI/spells/hunger-of-hadar-xphb.md)  
- [Hunter's Mark](CLI/spells/hunters-mark-xphb.md)  
- [Hypnotic Pattern](CLI/spells/hypnotic-pattern-xphb.md)  

- [Ice Knife](CLI/spells/ice-knife-xphb.md)  
- [Ice Storm](CLI/spells/ice-storm-xphb.md)  
- [Identify](CLI/spells/identify-xphb.md)  
- [Illusory Script](CLI/spells/illusory-script-xphb.md)  
- [Imprisonment](CLI/spells/imprisonment-xphb.md)  
- [Incendiary Cloud](CLI/spells/incendiary-cloud-xphb.md)  
- [Inflict Wounds](CLI/spells/inflict-wounds-xphb.md)  
- [Insect Plague](CLI/spells/insect-plague-xphb.md)  
- [Invisibility](CLI/spells/invisibility-xphb.md)  

- [Jallarzi's Storm of Radiance](CLI/spells/jallarzis-storm-of-radiance-xphb.md)  
- [Jump](CLI/spells/jump-xphb.md)  

- [Knock](CLI/spells/knock-xphb.md)  

- [Legend Lore](CLI/spells/legend-lore-xphb.md)  
- [Leomund's Secret Chest](CLI/spells/leomunds-secret-chest-xphb.md)  
- [Leomund's Tiny Hut](CLI/spells/leomunds-tiny-hut-xphb.md)  
- [Lesser Restoration](CLI/spells/lesser-restoration-xphb.md)  
- [Levitate](CLI/spells/levitate-xphb.md)  
- [Light](CLI/spells/light-xphb.md)  
- [Lightning Arrow](CLI/spells/lightning-arrow-xphb.md)  
- [Lightning Bolt](CLI/spells/lightning-bolt-xphb.md)  
- [Locate Animals or Plants](CLI/spells/locate-animals-or-plants-xphb.md)  
- [Locate Creature](CLI/spells/locate-creature-xphb.md)  
- [Locate Object](CLI/spells/locate-object-xphb.md)  
- [Longstrider](CLI/spells/longstrider-xphb.md)  

- [Mage Armor](CLI/spells/mage-armor-xphb.md)  
- [Mage Hand](CLI/spells/mage-hand-xphb.md)  
- [Magic Circle](CLI/spells/magic-circle-xphb.md)  
- [Magic Jar](CLI/spells/magic-jar-xphb.md)  
- [Magic Missile](CLI/spells/magic-missile-xphb.md)  
- [Magic Mouth](CLI/spells/magic-mouth-xphb.md)  
- [Magic Weapon](CLI/spells/magic-weapon-xphb.md)  
- [Major Image](CLI/spells/major-image-xphb.md)  
- [Mass Cure Wounds](CLI/spells/mass-cure-wounds-xphb.md)  
- [Mass Heal](CLI/spells/mass-heal-xphb.md)  
- [Mass Healing Word](CLI/spells/mass-healing-word-xphb.md)  
- [Mass Suggestion](CLI/spells/mass-suggestion-xphb.md)  
- [Maze](CLI/spells/maze-xphb.md)  
- [Meld into Stone](CLI/spells/meld-into-stone-xphb.md)  
- [Melf's Acid Arrow](CLI/spells/melfs-acid-arrow-xphb.md)  
- [Mending](CLI/spells/mending-xphb.md)  
- [Message](CLI/spells/message-xphb.md)  
- [Meteor Swarm](CLI/spells/meteor-swarm-xphb.md)  
- [Mind Blank](CLI/spells/mind-blank-xphb.md)  
- [Mind Sliver](CLI/spells/mind-sliver-xphb.md)  
- [Mind Spike](CLI/spells/mind-spike-xphb.md)  
- [Minor Illusion](CLI/spells/minor-illusion-xphb.md)  
- [Mirage Arcane](CLI/spells/mirage-arcane-xphb.md)  
- [Mirror Image](CLI/spells/mirror-image-xphb.md)  
- [Mislead](CLI/spells/mislead-xphb.md)  
- [Misty Step](CLI/spells/misty-step-xphb.md)  
- [Modify Memory](CLI/spells/modify-memory-xphb.md)  
- [Moonbeam](CLI/spells/moonbeam-xphb.md)  
- [Mordenkainen's Faithful Hound](CLI/spells/mordenkainens-faithful-hound-xphb.md)  
- [Mordenkainen's Magnificent Mansion](CLI/spells/mordenkainens-magnificent-mansion-xphb.md)  
- [Mordenkainen's Private Sanctum](CLI/spells/mordenkainens-private-sanctum-xphb.md)  
- [Mordenkainen's Sword](CLI/spells/mordenkainens-sword-xphb.md)  
- [Move Earth](CLI/spells/move-earth-xphb.md)  

- [Nondetection](CLI/spells/nondetection-xphb.md)  
- [Nystul's Magic Aura](CLI/spells/nystuls-magic-aura-xphb.md)  

- [Otiluke's Freezing Sphere](CLI/spells/otilukes-freezing-sphere-xphb.md)  
- [Otiluke's Resilient Sphere](CLI/spells/otilukes-resilient-sphere-xphb.md)  
- [Otto's Irresistible Dance](CLI/spells/ottos-irresistible-dance-xphb.md)  

- [Pass without Trace](CLI/spells/pass-without-trace-xphb.md)  
- [Passwall](CLI/spells/passwall-xphb.md)  
- [Phantasmal Force](CLI/spells/phantasmal-force-xphb.md)  
- [Phantasmal Killer](CLI/spells/phantasmal-killer-xphb.md)  
- [Phantom Steed](CLI/spells/phantom-steed-xphb.md)  
- [Planar Ally](CLI/spells/planar-ally-xphb.md)  
- [Planar Binding](CLI/spells/planar-binding-xphb.md)  
- [Plane Shift](CLI/spells/plane-shift-xphb.md)  
- [Plant Growth](CLI/spells/plant-growth-xphb.md)  
- [Poison Spray](CLI/spells/poison-spray-xphb.md)  
- [Polymorph](CLI/spells/polymorph-xphb.md)  
- [Power Word Fortify](CLI/spells/power-word-fortify-xphb.md)  
- [Power Word Heal](CLI/spells/power-word-heal-xphb.md)  
- [Power Word Kill](CLI/spells/power-word-kill-xphb.md)  
- [Power Word Stun](CLI/spells/power-word-stun-xphb.md)  
- [Prayer of Healing](CLI/spells/prayer-of-healing-xphb.md)  
- [Prestidigitation](CLI/spells/prestidigitation-xphb.md)  
- [Prismatic Spray](CLI/spells/prismatic-spray-xphb.md)  
- [Prismatic Wall](CLI/spells/prismatic-wall-xphb.md)  
- [Produce Flame](CLI/spells/produce-flame-xphb.md)  
- [Programmed Illusion](CLI/spells/programmed-illusion-xphb.md)  
- [Project Image](CLI/spells/project-image-xphb.md)  
- [Protection from Energy](CLI/spells/protection-from-energy-xphb.md)  
- [Protection from Evil and Good](CLI/spells/protection-from-evil-and-good-xphb.md)  
- [Protection from Poison](CLI/spells/protection-from-poison-xphb.md)  
- [Purify Food and Drink](CLI/spells/purify-food-and-drink-xphb.md)  

- [Raise Dead](CLI/spells/raise-dead-xphb.md)  
- [Rary's Telepathic Bond](CLI/spells/rarys-telepathic-bond-xphb.md)  
- [Ray of Enfeeblement](CLI/spells/ray-of-enfeeblement-xphb.md)  
- [Ray of Frost](CLI/spells/ray-of-frost-xphb.md)  
- [Ray of Sickness](CLI/spells/ray-of-sickness-xphb.md)  
- [Regenerate](CLI/spells/regenerate-xphb.md)  
- [Reincarnate](CLI/spells/reincarnate-xphb.md)  
- [Remove Curse](CLI/spells/remove-curse-xphb.md)  
- [Resistance](CLI/spells/resistance-xphb.md)  
- [Resurrection](CLI/spells/resurrection-xphb.md)  
- [Reverse Gravity](CLI/spells/reverse-gravity-xphb.md)  
- [Revivify](CLI/spells/revivify-xphb.md)  
- [Rope Trick](CLI/spells/rope-trick-xphb.md)  

- [Sacred Flame](CLI/spells/sacred-flame-xphb.md)  
- [Sanctuary](CLI/spells/sanctuary-xphb.md)  
- [Scorching Ray](CLI/spells/scorching-ray-xphb.md)  
- [Scrying](CLI/spells/scrying-xphb.md)  
- [Searing Smite](CLI/spells/searing-smite-xphb.md)  
- [See Invisibility](CLI/spells/see-invisibility-xphb.md)  
- [Seeming](CLI/spells/seeming-xphb.md)  
- [Sending](CLI/spells/sending-xphb.md)  
- [Sequester](CLI/spells/sequester-xphb.md)  
- [Shapechange](CLI/spells/shapechange-xphb.md)  
- [Shatter](CLI/spells/shatter-xphb.md)  
- [Shield](CLI/spells/shield-xphb.md)  
- [Shield of Faith](CLI/spells/shield-of-faith-xphb.md)  
- [Shillelagh](CLI/spells/shillelagh-xphb.md)  
- [Shining Smite](CLI/spells/shining-smite-xphb.md)  
- [Shocking Grasp](CLI/spells/shocking-grasp-xphb.md)  
- [Silence](CLI/spells/silence-xphb.md)  
- [Silent Image](CLI/spells/silent-image-xphb.md)  
- [Simulacrum](CLI/spells/simulacrum-xphb.md)  
- [Sleep](CLI/spells/sleep-xphb.md)  
- [Sleet Storm](CLI/spells/sleet-storm-xphb.md)  
- [Slow](CLI/spells/slow-xphb.md)  
- [Sorcerous Burst](CLI/spells/sorcerous-burst-xphb.md)  
- [Spare the Dying](CLI/spells/spare-the-dying-xphb.md)  
- [Speak with Animals](CLI/spells/speak-with-animals-xphb.md)  
- [Speak with Dead](CLI/spells/speak-with-dead-xphb.md)  
- [Speak with Plants](CLI/spells/speak-with-plants-xphb.md)  
- [Spider Climb](CLI/spells/spider-climb-xphb.md)  
- [Spike Growth](CLI/spells/spike-growth-xphb.md)  
- [Spirit Guardians](CLI/spells/spirit-guardians-xphb.md)  
- [Spiritual Weapon](CLI/spells/spiritual-weapon-xphb.md)  
- [Staggering Smite](CLI/spells/staggering-smite-xphb.md)  
- [Starry Wisp](CLI/spells/starry-wisp-xphb.md)  
- [Steel Wind Strike](CLI/spells/steel-wind-strike-xphb.md)  
- [Stinking Cloud](CLI/spells/stinking-cloud-xphb.md)  
- [Stone Shape](CLI/spells/stone-shape-xphb.md)  
- [Stoneskin](CLI/spells/stoneskin-xphb.md)  
- [Storm of Vengeance](CLI/spells/storm-of-vengeance-xphb.md)  
- [Suggestion](CLI/spells/suggestion-xphb.md)  
- [Summon Aberration](CLI/spells/summon-aberration-xphb.md)  
- [Summon Beast](CLI/spells/summon-beast-xphb.md)  
- [Summon Celestial](CLI/spells/summon-celestial-xphb.md)  
- [Summon Construct](CLI/spells/summon-construct-xphb.md)  
- [Summon Dragon](CLI/spells/summon-dragon-xphb.md)  
- [Summon Elemental](CLI/spells/summon-elemental-xphb.md)  
- [Summon Fey](CLI/spells/summon-fey-xphb.md)  
- [Summon Fiend](CLI/spells/summon-fiend-xphb.md)  
- [Summon Undead](CLI/spells/summon-undead-xphb.md)  
- [Sunbeam](CLI/spells/sunbeam-xphb.md)  
- [Sunburst](CLI/spells/sunburst-xphb.md)  
- [Swift Quiver](CLI/spells/swift-quiver-xphb.md)  
- [Symbol](CLI/spells/symbol-xphb.md)  
- [Synaptic Static](CLI/spells/synaptic-static-xphb.md)  

- [Tasha's Bubbling Cauldron](CLI/spells/tashas-bubbling-cauldron-xphb.md)  
- [Tasha's Hideous Laughter](CLI/spells/tashas-hideous-laughter-xphb.md)  
- [Telekinesis](CLI/spells/telekinesis-xphb.md)  
- [Telepathy](CLI/spells/telepathy-xphb.md)  
- [Teleport](CLI/spells/teleport-xphb.md)  
- [Teleportation Circle](CLI/spells/teleportation-circle-xphb.md)  
- [Tenser's Floating Disk](CLI/spells/tensers-floating-disk-xphb.md)  
- [Thaumaturgy](CLI/spells/thaumaturgy-xphb.md)  
- [Thorn Whip](CLI/spells/thorn-whip-xphb.md)  
- [Thunderclap](CLI/spells/thunderclap-xphb.md)  
- [Thunderous Smite](CLI/spells/thunderous-smite-xphb.md)  
- [Thunderwave](CLI/spells/thunderwave-xphb.md)  
- [Time Stop](CLI/spells/time-stop-xphb.md)  
- [Toll the Dead](CLI/spells/toll-the-dead-xphb.md)  
- [Tongues](CLI/spells/tongues-xphb.md)  
- [Transport via Plants](CLI/spells/transport-via-plants-xphb.md)  
- [Tree Stride](CLI/spells/tree-stride-xphb.md)  
- [True Polymorph](CLI/spells/true-polymorph-xphb.md)  
- [True Resurrection](CLI/spells/true-resurrection-xphb.md)  
- [True Seeing](CLI/spells/true-seeing-xphb.md)  
- [True Strike](CLI/spells/true-strike-xphb.md)  
- [Tsunami](CLI/spells/tsunami-xphb.md)  

- [Unseen Servant](CLI/spells/unseen-servant-xphb.md)  

- [Vampiric Touch](CLI/spells/vampiric-touch-xphb.md)  
- [Vicious Mockery](CLI/spells/vicious-mockery-xphb.md)  
- [Vitriolic Sphere](CLI/spells/vitriolic-sphere-xphb.md)  

- [Wall of Fire](CLI/spells/wall-of-fire-xphb.md)  
- [Wall of Force](CLI/spells/wall-of-force-xphb.md)  
- [Wall of Ice](CLI/spells/wall-of-ice-xphb.md)  
- [Wall of Stone](CLI/spells/wall-of-stone-xphb.md)  
- [Wall of Thorns](CLI/spells/wall-of-thorns-xphb.md)  
- [Warding Bond](CLI/spells/warding-bond-xphb.md)  
- [Water Breathing](CLI/spells/water-breathing-xphb.md)  
- [Water Walk](CLI/spells/water-walk-xphb.md)  
- [Web](CLI/spells/web-xphb.md)  
- [Weird](CLI/spells/weird-xphb.md)  
- [Wind Walk](CLI/spells/wind-walk-xphb.md)  
- [Wind Wall](CLI/spells/wind-wall-xphb.md)  
- [Wish](CLI/spells/wish-xphb.md)  
- [Witch Bolt](CLI/spells/witch-bolt-xphb.md)  
- [Word of Radiance](CLI/spells/word-of-radiance-xphb.md)  
- [Word of Recall](CLI/spells/word-of-recall-xphb.md)  
- [Wrathful Smite](CLI/spells/wrathful-smite-xphb.md)  

- [Yolande's Regal Presence](CLI/spells/yolandes-regal-presence-xphb.md)  

- [Zone of Truth](CLI/spells/zone-of-truth-xphb.md)