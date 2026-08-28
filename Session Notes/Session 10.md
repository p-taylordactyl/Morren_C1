---
dg-publish: true
type: session_note
created: 2026-06-29
modified: 2026-08-28
session_date: 06/29/2026
session_number: 10
players:
  - Alek
  - Cinna
  - Jordan
  - Kuya
  - Matt
  - Taylor
missed:
paid: true
level: "3"
ingame_start: 1/11/2012
ingame_finish: 1/11/2012
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Quiet Place]]"
tags:
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

# Winter 11, 2012``

We resume just outside the [[Quiet Place]].

[[Gideon Oublier|Gideon]] is bee-ed back into existence.

We tell him about the [[Titan Corporation]] and he starts saying he wants to take out the entire corporation and kill them all. We have to explain that pre-emptive strikes are in fact just murder. The rest of the party expresses varying concerns about this sentiment and we all encourage him to think much, much smaller for the time being.

We get a text from our [[Sterling Corvain]] that says it's time to meet, with  GPS coordinates for the meeting location. It's southwest, not far past the [[Quiet Place]].

![[session10_map1.webp|1093]]

[[Keena O'Malley|Keena]] and [[Maximilius Adkins|Max]] confirm that our stalker is likely someone related to [[Augustin Devereaux]]. Silas is annoyed that he's gotten dragged into something from their past, as he thinks it should be their problem alone to deal with.

Keena and Max play Rock Paper Scissors, winner gets to be traded for Malcolm.

We can't travel farther today, so we might as well check out the [[Quiet Place]] and see if we can finish [[The Silent Floor]] while we're here.

![[session10_map2.webp|1096]]

Outside the building, Kat tries to look for our stalker's drone and catches a glint of a red lens way far away - it's so far away it's hard to tell.

Dorian pretends to be sick in a nearby port-a-potty (helped by Silas's illusions) and escapes out the back to flank the possible drone. He finds it, confirms it is in fact a drone, and captures it in his backpack.

Kat takes the drone into the port-a-potty, where she grapples and disables it with her tinker's tools. Take that, stalker. We talk about potentially seeing if the nice folks at the [[Relay Shrine]] can help us recover data from it.

The Quiet Place door is barricaded from the outside. Windows are also barricaded.

We use the car to help clear the rubble.

[[Jack Mercer|Jack]] gives Max his camera to film and says he'll watch the door for us.

The inside of this building is rotting. bedrooms to the right, common area to the left. Ahead seems to be the "game zone" with a fallen banner for the Cursed Hamlet Keeper Playthrough.

No sign of humans or bodies. Drinks and meal wrappers are left as if someone was just there. Including Cheetos.

We realize we can't hear each other. Keena asks if anyone knows sign language in CSL and only Gideon and Kat don't have it.

We can still see each other but no one can hear anything. Gideon finds a little dry erase board.

We go into the game room and it's an auditorium type setup. Hamlet Keeper is up on the Super Oogtendo 64 

Kat looks for a case for the game but can't find one. Keena also looks around for signs of a struggle but can't find anything.

Kat gets Gideon to go through the controls on the whiteboard.

We all press start to join the game.

We are in the middle of the map in the game.

We realize there is a humming building around us and then an explosion of sound. Our eyes are forced shut and we hear the theme of the game. It seems like we are in the main menu.

We get an "Enter Team Name" prompt. 

It's decided that we're "Hood's Watch"

We find ourselves in the game.

![[location_quietplace_hamletkeeper.webp|1086]]

Monsters spawn in deployment zone. Monsters are trying to go for villagers in search zones.

Monsters can't use action if speed is zero.

Villagers have to stay in search zones.

Survive enough rounds in order to win. Amount of rounds is randomized.


First wave is abyssal hyenas.

![[hamletkeeper_2_itsrealbad.webp|1082]]

At great cost, like half the party almost forreal dead type of cost, we win and get spit back out into the Quiet Place along with a large group of people, including this tiefling, and also the rescue team we were supposed to find. Notably one of the team members is dead.

![[npc_nyx.webp|365]]

The game flickers off the screen and it flips back to live TV, where we see this guy.

![[npc_broadcastsaint.webp|581]]

"Whoever has been killing those of the Dominion Crew, we will find you." 

They're basically telling Kat they're coming after her or there will be consequences or something? unless she surrenders herself, though it sounded like they might not really know who she is.

Kat has until the end of the week to surrender, which is really end of day tomorrow.

Gideon peeks out the window and sees this guy bonking the shit out of an ATM with his giant spear.

![[npc_stonespear.webp|570]]

