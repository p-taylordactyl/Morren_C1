---
dg-publish: true
type: session_note
created: 2026-07-20
modified: 2026-08-03
session_date: 07/20/2026
session_number: 13
players:
  - Alek
  - Cinna
  - Jordan
  - Kuya
  - Taylor
missed:
paid: true
level: "4"
ingame_start: 1/19/2012
ingame_finish: 1/20/2012
locations:
  - "[[Hood Station]]"
  - "[[Deadwater Wharf]]"
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

# Winter 12, 2012 -- Flashback

[[Maximilius Adkins|Max]] returns to consciousness, finding himself tied to a chair at a table in a windowless metal room.

Sitting across from him is the fucking [[Sterling Corvain]].

He starts to unwrap a roll of torture instruments and take off his rings.

Max tries to joke with him about burgers but 

He picks up a pointy blade. "Do you know how you made me suffer? Do you know how much agony I am in?"

Max says, "Come again?"

He stabs Max where Max had previously stabbed himself as the iconic Tickler.

"This is just a fraction."

He hammers the dagger into Max's thigh and something snaps.

Basically he goes through every damage type as he tortures Max. Piercing, bludgeoning, slashing, acid, freezing, fire, etc.

Max is near death when [[Sterling Corvain]] gets rid of all the external damaging substances and then shoves a poisoned burger in his mouth waiting hours for it to take effect.

At the very end, as Max is on the true edge of death, the man gets up and says "Ah, that will be enough for today, see you tomorrow."

A cleric comes in and fully heals Max. The torture is repeated the next day, and continues every day for a week. On the 7th day, Burger Man is late, and there's a clamor outside, explosions. The door falls down and [[Lumen Veil]] stands in the doorway.

Funny enough, Max and Lumen haven't actually met until now. 

Lumen examines the chair and says it's rigged to explode if Max stands. He disarms the trap and releases Max from his restraints.

A traumatized Max tries to stand but stumbles.

Max asks who he is and Lumen introduces himself and asks what Max thinks about rebranding to Lumen Knight.

Lumen is after the "Burger Man", real name Sterling Corvain, who is a [[Titan Corporation]] executive. Unfortunately he wasn't here when Lumen showed up, only his goons. 

Lumen scoops Max up and after leaving the room, flies out of a hole in the roof, revealing the building was in some kind of compound. From the view, it seems Max was being held somewhere in the southeast area of the [[The Scar|Scar]],  not far from [[The Old Fort]]. They get back to the Lumen Mobile and Lumen asks where to drop Max off. Max says [[Hood Station]], prompting them to realize their connection, and they chat about the party.

Max feels indebted to Lumen, but the hero just says to try and just pass it on. He also offers that there are people at the [[Cael Foundation]] that might be able to help Max process what he's been through.

There's a mini bar in the glove compartment of the Lumen Mobile.

When they get there Lumen gives Max a free phone card and then Cael Foundation number.


# Winter 19, 2012 -- Present

![[oldvalence_map3.webp|1096]]

As Max comes down the stairs into the Station, he sees a group of [[Ghosts of the Flooded Zone|Ghosts]] have emerged from the tunnels leading to the [[Flooded Zone]] and started ransacking everything in sight.

They aren't really killing people, but they are looting and threatening.

The party is shocked but relieved to see Max. [[Keena O'Malley|Keena]] checks him for a head hole like [[Malcolm Oublier|Malcolm's]] but there isn't one, only lots of scars.

When she asks what happened to him, he says they just kept him in the dark for a few days until Lumen Veil rescued him.

Keena insight checks him but from what she can tell, it seems like it was just an uncomfortable experience at the most.

[[Katriel Buchanon|Kat]] interrupts the discussion of Max's ordeal to note that while we're very happy he's is back and seemingly okay, our home is actively being ransacked and perhaps we should do something about that.

We notice the submarine seems to be guarded by a single individual. After some discussion on if it would be beneficial to disable it, we decide to do it, though [[Gideon Oublier|Gideon]] thinks it's probably more trouble than it's worth.

[[Dorian Caldwell|Dorian]] and Kat sneak over to the submarine, successfully getting past the guard.

We notice strange metal filigree on the submarine around the interior edges. They look like little frog men in various poses like little mechanics. Overall though, the vibe onboard is very utilitarian.

At the cockpit, Kat tries to see if she could lock the Ghosts out of the sub while leaving it accessible to us. Ultimately, she's unable to take control of the sub, but she manages removes enough crucial components to disable it, while keeping the removed parts intact enough to hopefully replace them later. Dorian brings up that we could potentially even trap the Ghosts in the sub if we can win enough fights to drive them back to it.

Once Kat finished, she and Dorian sneak back to the party, and we head towards the nearest group of Ghosts to start fending them off.

![[session13_combat1.webp|1097]]

We got new Gideon Art!

![[npc_gideonoublier_disguise2.webp|453]]


Anyway we fight now.

Notably when Max casts spells he feels weird phantom pains.

During the fight, Keena accidentally kills a Ghost with a spell. Welp, it happens.

As we defeat a small group of Ghosts, a horde starts to form from the remaining. A group of muscular men emerges from the darkness and begins to fight off the horde. 

A woman seems to be leading them and says to us:

"I see you're in a pickle, allow us to help?"

Apparently they're with the [[Old Valence Stevedore Union|Stevedore Union]]. They'll give us protection from this incursion and future incursions if we pay "union" dues. 

We look the contract over and Dorian spots a clause that says if there's ever a failure to pay, we become indebted to the Stevedore Union and they can ask a favor of their choosing. Not great, but they certainly seem to have us over a barrel.

We sign the contract and the muscle men beat the absolute fuck out of the Ghosts until they swim away back through tunnel, leaving a bunch of charges on the currently undrivable sub. Kat considers trying to go disable the explosives, but ultimately decides not to risk it.

The lady is named [[Talia Mercina]] and she is apparently our union rep.

![[npc_taliamercina.webp|445]]

We ask some questions about the contract.

If they fail to protect us from something then the contract enters arbitration (with their arbiters).

Keena is very suspicious and Talia says the union police each other and it isn't sketch (sure). 

Maybe we can try renegotiating later at least. Keena also thinks we might be able to do something about the contract through the court system but Talia assures her this agreement is not at all a legal document.

We get some new quests on Jobber, each with two interested parties and options on how to handle them. 

- [[Quests/The Driftwarden|The Driftwarden]]
- [[Red Thunder]]
- [[Wharf Extraction]]

The Red Thunder quest proves to be particularly controversial, as Max very  much wants to make a deal with [[Morgo]] for Red Thunder while Keena wants to light a candle on the man's doorstep and outright refuses to have any dealings with him. 

Our discussion is interrupted when we spot this man entering Hood Station.

![[npc_victorhalden.webp|395]]

This guy is coming into the station. Kat and Keena recognize him as [[Victor Halden]], manager of the [[Valencian Seahorses]].

Kat fangirls excitedly and somehow talks her way past his bodyguards with her enthusiasm/flattery. Victor tells her he wants to build a practice stadium for the Seahorses where Hood Station is and assuming that we actually own the land, he'll pay us to move (and give Kat an extra 1000 platinum for smoothing the way). Otherwise he'll just buy it cheap from the city and kick us all out.  Kat talks out her ass and says we do own the land. She's very excited about the prospect of the practice stadium and thinks it would be great and that Halden will actually pay us a lot of money and it would be worth it to move and it might create a lot of jobs too. Keena is on the complete opposite end of the spectrum and thinks we have to stop this from happening at all costs. She and Kat go back and forth for quite a bit and Dorian jumps in to mention that at the least, if we don't own the land and it's cheap to purchase from the city, we should go do that before Halden does. 

On watch, Max and Dorian discuss the party's stance on killing and Max clarifies he very much sees it as a time and place thing, reserved for the people at the top, which Dorian agrees with. Dorian confesses his true last name and former [[Oligarchs|Oligarch]] status to Max. 

During the watch, Max notices this person sneak into Hood Station with a large contingent of [[Ghosts of the Flooded Zone|Ghosts]]. 

![[npc_kalitorreo.webp|401]]

They sneak into a building and start reinforcing it immediately. The woman's rebreather-y mask seems like some kind of cybernetic augmentation.

Max points them out to Dorian, who doesn't really see much. As nothing further happens, they drift back into conversation and Dorian explains more of his history to Max.

Meanwhile, Gideon sneaks off to talk to Az in the middle of the night. Max clocks it but doesn't say anything.

Gideon asks Az for something that makes stuff hurt less and Az offers him some "simple halfling pipeweed" -- on the house this time.

As he tries it, Gideon feels the effect of the weed but not too much. Calming and relaxing but not crazy.

# Winter 20, 2012

In the morning, Max gives Gideon a knowing look and tries to surreptitiously discuss the topic. As Gideon replies, Kat catches a whiff of the pipeweed and calls him out - though she implies she's fine with it as long as it stays just pipeweed.

After some more discussion on the new quests available, we agree that [[Red Thunder]] is so controversial we will leave it for last and possibly not do it at all. Instead, we decide to start with [[Wharf Extraction]] since it's relatively less controversial and takes us somewhere new. There might be some hiccups choosing who to turn it in to, but at least with this one we can complete the task first and then decide.

We head off to Deadwater Wharf. 

![[session13_map1.webp|612]]

Almost immediately after entering, we see a wanted poster for one [[Kali Torreo]]. Max immediately recognizes the woman on the poster as the same one he saw breaking into Hood Station last night.