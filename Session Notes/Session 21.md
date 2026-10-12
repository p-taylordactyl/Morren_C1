---
dg-publish: true
type: session_note
created: 2026-10-05
modified: 2026-10-12
session_date: 10/05/2026
session_number: 21
players:
  - Jordan
  - Kuya
  - Matt
  - Taylor
missed:
paid:
level: "5"
ingame_start: 1/28/2012
ingame_finish: 1/29/2012
locations:
  - "[[Deadwater Wharf]]"
  - "[[Dockrunner]]"
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


# Winter 28, 2012

We resume in the car near the [[Dockrunner]]. [[Gideon Oublier|Gideon]] has just been bee-ed out and we only just get into the discussion of whether or not it's a good idea to bring his dad back when he's bee-ed back in.

We roll through where the contact is supposed to be and there's a surprising amount of bald individuals.

First a homeless man asking for alms. [[Katriel Buchanon|Kat]] flips him a silver.

Then a kebab merchant. We all go over for kebabs. They're zebra kebabs. [[Silas Sorelli|Silas]] asks where the zebras are from and the merchant points at a nearby crate. Silas examines it and it looks similar to crates that many of the animals we've been fighting came out of. Like the rest, this is stamped with Stevedore approval. The zebra is almost certainly lab-grown.

The kebab guy asks for a ride out of the wharf. He says it's because he's super drunk. Unclear if he's our man but we're bringing him along for now. 

Silas spots a town wanted poster of a possibly bald guy? Definitely not kebab man so time to cut him loose. We drive like 10ft and drop him off, where he wanders back to his kebab stand.

Next baldie is a dude facedown in a puddle. We think he's dead but Gideon checks him out and he isn't. 

![[npc_wb.webp|557]]

Apparently he's our contact. When Gideon messages him he immediately recognizes us as his ride.

This guy can't move his arms or legs. Apparently he took some pills and drank some stuff and that's why he's like this?

He asks Gideon for some of the puddle water.

Apparently he's on the run from the [[Old Valence Stevedore Union|Stevedores]] because he owes them money for "procuring some things" for him.

Gideon asks how much. $3k platinum.

[[Maximilius Adkins|Max]] searches the guy and finds a little baggie of cocaine. He tries (and spends a hero point lmao) to discreetly take the baggie without Wbebbbble(????? this is how he spelled it but this cannot be his name - calling him WB for now) noticing, but ultimately fails. We all notice.


![[session21_map1.webp]]

We get WB into the trunk of the car and set off.

We see [[Box Town]] off in the distance, loading their salvaged cargo from the [[Dockrunner]].

[[Stonespear]] calls Kat. He scouted other banks and they're on high alert. We need to lay low until the heat dies down. He also mentions he's looking for a powerful mage that could create portals for us to hit the remaining banks in rapid succession.

Max and Silas are on watch. Silas puts up the tiny hut dome.

Max asks Silas about his goals and what he's really after.

Silas's only real goal is saving [[Kali Torreo|Kali]].

Max asks if there's any lines he wouldn't cross, and Silas says no, probably not. He feels like he has always existed somewhat outside of society, and he sees morality more as a tool to manipulate people.

Max doesn't fully know what he believes himself but he does bump into some moral issues himself. He doesn't judge Silas though.

We're kind of bedded down in a fish market and as morning comes, Max spots some sort of creature skittering around nearby as if to ambush us when the dome goes down.

When the dome goes down, we're ready. These giant ticks skitter to us and attack.

![[giantticks.webp|655]]


We roll bad, we go second.

![[session21_combat1.webp]]

We defeat the ticks, fortunately without taking any damage.

# Winter 29, 2012

We move towards the location we suspect is the [[Clerk's Home]].

![[session21_map2.webp]]

It does seem like a house but everything is boarded up, apparently against these creatures, 10 of which seem to be surrounding it.

![[weirdchicken.webp|265]]

We have no clue what they are but they seem larger than chickens. Probably don't want them to bite us.

Silas conjures an illusory fox that the birds, instead of fleeing, immediately attack.

We manage to use this as a distraction and sneak past and can see through a window into the house.

It seems the Clerk is home. He sees us and gestures at  the door to the house.

![[npc_milo.webp|555]]

He rushes us into the house. It's very simple and utilitarian.

He seems to assume we're from the Stevedores. He thinks the chickens have some kind of nest outside.

The clerk, whose name is [[Milo]], references all the animals that keep escaping around the Wharf.

He says he's been trying to reach the [[Deadwater Harbormaster]] and we explain that he's a little...tied up... at the moment.

Gideon convinces him to move out entirely and Kat texts [[Thorbin Sprake|Thorbin]] to confirm we can hook him up with a job at the garage.

He asks us to help pack up his computer while we works on his gnome collection.

Kat struggles through hacking the computer and Silas finds a stick. After some tinkering we're able to get the data on to it, but it's a tad unstable. Better to transfer to a more stable stick when we can. 

We finish and pack up his PC. As we're looking to sneak back to the car, a chicken scratches at the window.

Silas's illusions don't work as well this time, but we try to sneak anyway and manage to make it back to the car.

The clerk has credential to use a crane and can help us get on the final docked vessel, [[The Rust Mammoth]].

We're driving over there when the [[Ghosts of the Flooded Zone|Ghosts]] pop up out of a manhole and pops up Kali's hologram.

Kali says if we're interested in getting the best deal, she has documents that would give us ownership of [[Hood Station]].

Silas asks if they're legit and Kali says they are.

The four of us present are on board to work with the Ghosts at this point. 

Kali says we should set up a meeting with [[Victor Halden]] and a copy of the documents will be delivered when we need them.

Kat asks if she would be opposed to us still doing the bank heists later.

Kali says if we do well here and it goes smooth, they might even work with us on the bank heists.

We keep moving towards the ship until it's rest time.

Silas and Gideon are on watch.

Gideon asks Silas about his history with Kali/the Ghosts. He explains they used to be best friends and that his primary motivation is guilt about having left Kali behind with the Ghosts while he got out.

Gideon asks if Silas isn't just doing the same things to the kids of Hood Station that the Ghosts did to Kali. He says yeah absolutely, but he doesn't care since he feels it will help him in his goal to free Kali. He isn't even sure that the best thing for Kali would be with him now. He wonders if maybe now he could join Kali in the Ghosts and "break the chains" that way rather than getting her out first.

Gideon thinks maybe it's better for Silas to build his own crew to disrupt other crews rather than trying to do everything alone.

Silas floats the idea that we join the Ghosts. Gideon is hesitant.

Silas sees this guy walking towards the tiny hut barrier. He's the size of an elephant.

![[npc_bulwark.webp|509]]

Gideon pokes his head out of the bubble to talk to the guy. 

The giant guy dispels the tiny hut dome.

He says we aren't impressive.

He says [[Morrgen Oublier|Brass Scale]] says we want to work with them. Gideon asks about the bald guy and big dude says that's Brass Scale's business, not his. We suss out that this is likely [[Bulwark]] of the [[Malefactors]].

He says Brass Scale made bold promises to Gideon.

We have to impress each Malefactor in order to work with them. Bulwark does have a job for us if we're up for it. 

He wants us to defeat [[Lighthouse]], take his mask, and post his real identity online.

Kat is hesitant but agrees since we aren't being asked to directly kill anyone. She asks what exactly the Malefactors are trying to achieve as an organization.

Bulwark says the Malefactors are group of individuals each with own aims, not an organization. That pretty much concludes the conversation and he leaves.

We make it to the Rust Mammoth.

Milo cranes us up onto the ship.


![[session21_map3.webp]]

We see an animated armor patrolling the ship as well as drones between us and the bridge.

We cobble together some boxes to basically give us a shield to try and sneak to the bridge, since the security mostly seems to be scanning for organic material.

This works and we make it to the bridge.

There are a bunch of animated armors on the stairs up to the bridge. We do see a figure in the command center as well. They have the symbol of [[Locations/Aegis Response Group|Aegis Response Group]]. 

Max spots this thing on the bridge. It seems AI is completely in charge, which is unusual.

![[npc_robot.webp|412]]

Silas remembers that [[Locations/Aegis Response Group|Aegis Response Group]] , despite being a rescue org, has (like all corpos) still had incidents of corpo-terrorism.

Notably though, their automatons are usually not programmed to kill.

We're able to successfully sneak past the animated armors to the bulkhead door of the bridge.

Kat hacks the door and notices she could also overload nearby circuits in the room, including the robot guy manning the helm.

She does and fries the helmbot.

We can't find a data stick and fumble trying to use the bot in its place.

Everything on the boat is going haywire. 

Our last resort is to go find the server room and take the hard drives. 

We make it past an electrified puddle and Gideon puts out a fire by reaching into the flames for a fire extinguisher, and we break through a wall of ice to reach the server room.

Silas is able to locate the hard drives for the files and takes them. 

It seems the vessel is about to explode.

We barely make it out, with everyone untouched except for Kat, who survives but is still pretty beat up.

We go back to the car and head for the checkpoint. Kat pulls off briefly before we get there to plan. Gideon says he can cast fly, so Silas casts a Phantom Steed for Gideon to cast fly on. Silas and Gideon will ride that to get past the checkpoint while the rest of us drive through.

They successfully fly past the checkpoint above. The rest of us drive through in the car. It seems that in addition to our new friend WB, they're looking for someone named Delavide in connection with the murdered guards.

We'll start next session on the big map, headed back to Hood Station.