---
dg-publish: false
type: session_note
created: 2026-07-20
modified: 2026-07-26
session_date: 07/20/2026
session_number: 13
players:
  - Alek
  - Cinna
  - Jordan
  - Kuya
  - Taylor
missed:
paid:
level: "4"
ingame_start: 1/19/2012
ingame_finish: 1/20/2012
locations:
  - "[[Hood Station]]"
tags:
  - under_construction
---

```dataviewjs
const container = dv.el("div", "", { cls: "session-nav" });
container.style.display = "flex";
container.style.gap = "1rem";

const prev = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates" && p.session_number === dv.current().session_number - 1)[0];
const next = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates" && p.session_number === dv.current().session_number + 1)[0];

function makeCard(label, page) {
  const card = container.createEl("div", { cls: "session-nav-card" });
  card.style.flex = "1";
  card.style.border = "2px solid var(--text-normal)";
  card.style.borderRadius = "8px";
  card.style.padding = "1rem";
  card.style.textAlign = "center";
  card.createEl("div", { text: label });
  if (page) {
    card.appendChild(dv.el("strong", dv.fileLink(page.file.path)).firstChild ?? dv.span(`[[${page.file.path}]]`));
  } else {
    card.createEl("em", { text: "None" });
  }
}

makeCard("⬅️ Previous Session", prev);
makeCard("Next Session ➡️", next);
```

# Flashback to Winter 12, 2012

Max returns to consciousness, finding himself tied to a chair at a table in a windowless metal room.

Sitting across from him is the fucking [[Mystery Burger Man]].

He starts to unwrap a roll of torture instruments and take off his rings.

"Ah, it's been some time."

"Got any burgers in there?"

"Not this time. We're going to do something a little different."

He picks up a pointy blade. "Do you know how you made me suffer? Do you know how much agony I am in?"

"Come again?"

He stabs Max where he had previously stabbed himself as the Tickler.

"This is just a fraction."

He hammers the dagger into Max's thigh and something snaps.

Basically he goes through every damage type as he tortures Max. Piercing, bludgeoning, slashing, acid, freezing, fire, etc.

Max is near death when [[Mystery Burger Man]] gets rid of all the external stuff and then shoves a poisoned burger in his mouth, waiting hours.

At the very end, as Max is on the true edge of death and says "Ah, that will be enough for today, see you tomorrow."

A cleric comes in and fully heals him. This continues every day for 7 days. On the 7th day, he's late, and there's a clamor outside, explosions. The door falls down and [[Lumen Veil]] stands in the doorway.

The two don't actually know each other. 

Lumen examines the chair and says it's rigged to explode if Max leaves it. He disarms the trap and releases Max from his restraints.

A traumatized Max tries to stand but stumbles.

Max asks who he is and Lumen introduces himself and asks what Max thinks about rebranding to Lumen Knight.

Lumen is after the "Burger Man." His name is Sterling Corvain and he's a Titan Executive. He wasn't here when Lumen showed up, only his goons. 

Lumen scoops Max up and after leaving the room, flies out of a hole in the roof in some kind of compound. They were somewhere in the southeast of the [[The Scar|Scar]] not far from [[The Old Fort]]. They get back to the Lumen Mobile and he asks where to drop Max off. Max asks to drop off about Hood Station and as they realize their connection, they chat about the party.

Max feels indebted to Lumen but the hero just says to try and just pass it on. He also offers that there are people at the Cael Foundation that might be able to help him process what happened.

There's a mini bar in the glove compartment of the Lumen Mobile.

When they get there Lumen gives Max a free phone card and then Cael Foundation number.



# Winter 19, 2012

![[oldvalence_map3.webp]]

As he comes down the stairs, he sees a group of [[Ghosts of the Flooded Zone|Ghosts]] have emerged from the tunnels into [[Hood Station]] and started ransacking the place.

They aren't really killing people, but they are looting and threatening.

Keena checks Max for a head hole like Malcolm's but there isn't one, only lots of scars.

He says they just kept him in the dark for a few days until Lumen Veil rescued him.

Keena insight checks him but it seems like it was just an uncomfortable experience at the most.

We see the submarine seems to be guarded by a single individual.

Dorian and Kat sneak over to the submarine, successfully getting past the guard.

We notice strange metal filigree on the submarine around the interior edges. They look like little frog men in various poses like little mechanics.

Overall though it's very utlitarian.

We get to the cockpit.

These subs are very scrap-based. Kat is unable to take control of the sub, but she removes enough crucial components to disable it. Dorian brings up that we could trap everyone.

![[session13_combat1.webp]]

New Gideon Art!

![[npc_gideonoublier_disguise2.webp|554]]


Anyway we fight now.

Notably when Max casts spells he feels weird phantom pains.

As we defeat a small group of Ghosts, a horde starts to form from the remaining. A group of muscular men emerges from the darkness and begins to fight off the horde. 

This lady is leading them and 

"I see you're in a pickle, allow us to help?"

They're with the Stevedore Union. They'll give us protection from this incursion and future incursions if we pay "union" dues. 

We look the contract over and Dorian spots a clause that says if there's ever a failure to pay, we become indebted to the Stevedore Union and they can ask a favor of their choosing.

We sign the contract and the muscle men beat the absolute fuck out of the ghosts. They ghosts swim away and leave 

The lady is named [[Talia Mercina]] and she is apparently our union rep.

![[npc_taliamercina.webp|444]]


If they fail to protect us from something then the contract enters arbitration (with their arbiters).

Keena is very suspicious and Talia says the union police each other.

We get new quests.

We tell Keena 

![[npc_victorhalden.webp|527]]

This guy is coming into the station. Kat and Keena recognize him as [[Victor Halden]], manager of the [[Valencian Seahorses]].

Kat talks her way past his bodyguards.

On watch, Max and Dorian discuss the party's stance on killing and Max clarifies he very much sees it as a time and place thing, reserved for the people at the top, which Dorian agrees with. Dorian confesses his former Oligarch status to Max. 

Max sees this person sneak into Hood Station with a large contingent of [[Ghosts of the Flooded Zone|Ghosts]].

![[npc_kalitorreo.webp]]

They sneak into a building and start reinforcing it immediately. The woman's rebreather-y mask seems like some kind of cybernetic augmentation.

Watch convo continues. Dorian explains his true history more to Max.

Gideon sneaks off to talk to Az in the middle of the night. Max clocks it but doesn't say anything.

Gideon asks Az for something that makes stuff hurt less and Az offers him some "simple halfling pipeweed" on the house this time.

As he tries it, Gideon feels the effect of the weed but not too much. Calming and relaxing but not crazy.

In the morning, Max gives Gideon a knowing look and tries to surreptititously discuss the topic. As Gideon replies, Kat gets a whiff of the pipeweed and calls him out - though she implies she's fine with it as long as he limits himself to the pipeweed.

![[session13_map1.webp|567]]