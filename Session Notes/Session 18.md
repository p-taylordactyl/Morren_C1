---
dg-publish: true
type: session_note
created: 2026-08-31
modified: 2026-09-21
session_date: 08/31/2026
session_number: 18
players:
  - Alek
  - Cinna
  - Jordan
  - Kuya
  - Taylor
missed:
paid:
level: "4"
ingame_start: 1/27/2012
ingame_finish:
locations:
  - "[[Deadwater Wharf]]"
  - "[[The Gray Pelican]]"
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


# Winter 27, 2012

We resume in the Director's Office onboard the [[The Gray Pelican]].

Silas is bee-ed as [[Gideon Oublier|Gideon]] is returned from the bee dimension. For once, the weather is clear.

[[Solomon Hexley|Solomon]] asks for the pokeball (containing [[Director Vosslen]]) and [[Dorian Caldwell|Dorian]] gives it to him.

[[Katriel Buchanon|Kat]] tries to hack the computer and gets locked out, taking some lightning damage.

On her second try, she's able to easily override and copy the data onto her data stick. 

As we start to leave, Dorian hangs back a little bit (sneakily) and with a sigh, slits the throats of the unconscious guards. [[Keena O'Malley|Keena]] is checking to make sure we have the whole party on the way out, but doesn't catch him. 

We make it back to the cars without issue.  Solomon pays us and tells us to have Silas reach out when he's back from the bee dimension to learn his spell.

Gideon asks about Solomon getting us an audience with the [[Malefactors|Malefactor]] that hired us. 

Solomon says it was clean work aside from us potentially leaving a loose end with the guards (which the rest of us don't know about). He'll see what he can do about the meet.

After Solomon leaves, we go to fix up [[Memaw Shoe]]'s car, which is right nearby. The car is wrapped around a crane but somehow Memaw seems completely fine.

Kat asks what happened and Memaw said a squirrel ran out in front of her.

Keena asked why she didn't brake or swerve and Memaw says she just didn't want to hit the squirrel, which was normal-sized.

We agree to try and repair the engine.

Each round, we can make 1 repair action with a corresponding check. Oog rolls for failures and catastrophic events.
Any character can make check from. goal to get as many repair points as possible (up to 10) before 5 failure points. results will depend on repair to failure outcome.



![[session18_enginerepair.webp]]

Max determines the vehicle has extensive damage and is overheating.

Until resolved, will add 1 fil at the start of each round

R1
Fail 1
Repair 0

R2
Fail 1
Repair 2

R3
Fail 1
Repair 4

R4
ID issue


R5
Fail 3
Repair 6

R6
ID issue

R7
Fail 4
Repair 8

Finish with 8 repair points, surprisingly getting the engine back into working condition. Kat gives lots of deserved credit to Max and says he should consider becoming a mechanic.

Memaw pays us 50 platinum for the repairs.

Gideon says he thinks it's too little and Kat chides him for being ungrateful.

Memaw says she's been meaning to reach out to Gideon. She talks about needing to minimize [[Hood Station]]'s profile with everything going on.

Dorian says the union contract at least helps but Memaw replies that while he isn't wrong, the [[Old Valence Stevedore Union|Stevedores]] are still a gang.

Kat asks about the [[Victor Halden|Halden]] situation and if we do actually own the land.

Memaw says we don't own Hood Station but to stop by and she might be able to help us buy the place. We tell her it's 1.3mil.

We consider taking up a collection at the station, but odds are it won't be enough.

Memaw dips.

Gideon didn't know who Memaw was as we're explaining, these axe beak birds roll up.

![[axbeak.webp|604]]


![[session18_combat1.webp]]


As we prepare to either run or fight, this superhero guy shows up to help. His name is [[Lighthouse]]. Gideon asks if he could put a good word for us with the [[Cael Foundation]] and Lighthouse says yes if Gideon kills more birds than him.

![[npc_lighthouse.webp|590]]

Gideon tries to make the same fire dragon thing his mom did and casts fireball and takes out a fuckton of birds. 

Lighthouse's chest opens up and he kills two with beams of light.

By next turn there aren't many left and Gideon has killed enough that Lighthouse couldn't possibly catch up.

After we defeat all the birds, Lighthouse says he thought we needed help but he underestimated us.

We chat about the Cael Foundation and he asks if we'd be up for the hero-ing and not killing people.

Kat and Keena have some tension over her killing people. Cael Foundation doesn't stand for killing prisoners even on religious grounds.

Keena asks about them ensuring justice is done but Lighthouse explains that Cael heroes basically just wears bodycams and hand folks over to the [[Enforcers]]. She doesn't like that answer and neither does Gideon. Gideon says he isn't interested in the Foundation anymore.

Keena also asks about getting a [[Lumen Veil]] (who is rebranding to Lumen Knight) trading card for Gideon. Lighthouse agrees but Gideon says he isn't that interested in Lumen anymore. 

For Gideon winning their little contest, they end up agreeing on Lighthouse giving him a perfect grade signed trading card of himself worth 50 platinum.

Keena talks Lighthouse into giving us a second card if we won't sell it. She gasses him up talking about how we found Lumen in a trash heap and Lighthouse must be a cooler hero.

As we argue once again about killing people, we hear a kerfuffle around the corner.

We see a [[West Valence Saints|Saint]] about to crush in the skull of [[Cillian Kravus]].

![[npc_cilliankravus.webp|676]]

We're too far to intervene, but just before he can deliver a killing blow, the [[West Valence Saints|Saint]] is shot dead by this guy.

![[npc_walter.webp|602]]

He grapples down to check on Kravus, who is barely conscious, before looking over at us.

Gideon recognizes the man's garb as decommissioned [[Old Guard]] power armor.

 We talk to the man. His name is [[Walter]]. He isn't with the guard anymore.

He tells Kravus not to walk alone anymore but Kravus needed some kind of mixing device? 

The rest of us don't know Kravus other than Max, who is currently disguised as the Tickler.

Walter tells Kravus not to walk alone and grapples off again, and then Max starts talking to Kravus. Kravus knows the Tickler and is a little scared at first but when Max tells him a secret code/call and response ("secrets are meant to be uncovered") and reveals himself to Kravus.

The group chills in a garage, and Kravus reveals he's in this part of town to pick up an audio mixer / recording device when the Saint rolled up on him. The Saint couldn't be bribed.

Max introduces the rest of us. Kravus has heard of us and said we're causing quite a stir.

Kravus asks Max about his little missing stint. Max tries to lie but Kravus sees through it and asks to speak in private.

We settle down for an hour so they can chat.

Kravus tells Max he heard some things through the grapevine, saw some footage. He asks if Max is okay.

Max isn't sure. Hasn't had much time to think about it. But he says he's alright, we all go through things. His eyes water but he doesn't cry.

Kravus says he lied about having seen footage but since Max acknowledged it, now he has to spill.

Max tells him about [[Augustin Devereaux]] and the blackmail situation and getting kidnapped by [[Sterling Corvain]]. He alludes to not having been treated well and as Kravus reads between the lines, Max starts shaking.

Kravus asks if he's told anyone the group and Max says no, because he tries to be the vibes guy and everyone has a lot going on with their own families.

They talk about Max's disguise and Kravus tells him at some point he'll have to take the mask off and face himself. Max says he's found some comfort in the mask. Kravus says it won't be comfortably removing it, but the wound will fester if not changed, and Max doesn't have to do it alone. Max acknowledges that perhaps he needs to spend some more time reflecting on it. Kravus encourages Max to talk to at least one person in the party.

They wrap up the convo and Kravus prepares to head back to Hood Station. Max tells him he has some research for him to do with Ren. He also tells Kravus about [[Morrgen Oublier|Morrgen]] being a Malefactor and what happened with [[Malcolm Oublier|Malcolm]] and Gideon's dad. Kravus asks why they aren't reporting on it and Max says things at Hood Station are just too fragile right now and this news could be too destabilizing.

We get a short rest. Kravus heads back to Hood Station.

In Silas's absence, Keena is Kat's opp.

We start heading the long way to the [[Dockrunner]].

We see a billboard showing Titan offering a reward for information on the murders of the guards Dorian killed earlier.

The party (except Dorian) is shocked to see the guards were murdered. Keena is suspicious of the party and manages to clock that Dorian did this. He caves and admits it when she confronts him. She's very upset and wants to redirect the party's frustrations, saying we need to have the same energy for him that they did for her.

Kat questions whether Keena actually cares or if she just wants the target off her own back, and says that while she isn't happy about what Dorian did, she expects better from Keena than from Dorian. 

During this, we notice a fight happening a ways away between these mysterious people and the [[Old Valence Stevedore Union|Stevedores]].

![[npc_mysteryperson1.webp|584]]

![[npc-mystery2.webp|582]]

![[npc_mystery3.webp|564]]




