---
dg-publish: true
type: session_note
created: 2026-08-17
modified: 2026-08-23
session_date: 08/17/2026
session_number: 16
players:
  - Alek
  - Jordan
  - Kuya
  - Matt
  - Taylor
missed:
paid:
level: "4"
ingame_start: 1/22/2012
ingame_finish: 1/23/2012
locations:
  - "[[Deadwater Wharf]]"
  - ">[[Harbormaster's Office]]"
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


>[[!NOTE]]
> I joined partway through the session so will add the beginning from the recap.

# Winter 22, 2012

[[Katriel Buchanon|Kat]] is bee-ed back in mid-combat?

![[session16_combat1.webp]]

We defeat the bug guys. The flap in the floor to the upper right reveals a safe. It has goodies!

This is the [[Harbormaster's Office]]. We've already acquired the data stick needed for [[Wharf Extraction]]. The bugs were some kind of security measure.

We clean up our mess and [[Silas Sorelli|Silas]] is able to hack the cameras to clear us off the security footage.

We leave out the fire escape. A blizzard is starting and will last 5 days.

We look at the area to the south and [[Maximilius Adkins|Max]] spots some fireworks going off, forming different shapes. Not sure what that is yet but we need to find cover.

![[session16_map1.webp]]

Max takes Kat aside briefly to fill her in that [[Morrgen Oublier|Morrgen]] was in fact on the news and is part of a group called the [[Malefactors]]? Killed a fuckton of people while breaking [[Malcolm Oublier|Malcolm]] out of prison.

[[Gideon Oublier|Gideon]] gets pissed hearing about it again and lights a trash can on fire.

We post up at [[Garrick Holloway|Garrick's]] shop to weather the storm and gather up a bunch of salvage to get a proper fire going.

Kat and Silas are on watch. They chat about what happened with Morrgen and the morals of killing (notably this time Silas is of the opinion that Morggen went overboard, while Kat, having avoided watching the news footage, is still trying to make it make sense) when we hear a kerfuffle and see a bunch of [[West Valence Saints|Saints]] chasing [[Dex]]. Not sure what he's doing here instead of the [[Relay Shrine]].

He barricades himself inside a crane, which the Saints quickly surround.

Silas isn't sure Dex is even worth saving but Kat says she's helping, wakes the others and says they can help or not and leave. 

Silas does end up coming along and illusions an bunch of henchmen as we approach. After a bit of a standoff, we're able to intimidate the Saints away.

Turns out Dex was filming himself dropping paint balloons on random passerby as a prank and indiscriminately hit some Saints in the process, starting the chase we finished.

We chew him out for being a dumbass. Kat tries to tell him to go back to the Relay Shrine but Dex doesn't listen.

Gideon blasts Dex's camera (nearly blowing his head off) so he can't film more pranks.

This does prompt Dex to go back to the Relay Shrine so he can try and get his camera fixed.

# Winter 27(?), 2012

After the blizzard has passed and we plan our next move, we spot what we think is [[Box Town]] over by the [[Seahorse Bank]]. However, with only a week left to collect the remaining 4 data sticks for [[Wharf Extraction]], we head south instead to areas we haven't explored yet.

We pass a bustling gyro stand and see [[Solomon Hexley]] in line. Gideon rizzes his way to the front where Silas decides to talk to him (and possibly steal his new spellbook?)

Solomon says he was hoping to hear from his friends about the wine (which has been partly drank) but hasn't yet.

Silas offers Solomon his number. Solomon accepts and says he does a bunch of wizarding for hire and has a lot of wizard friends that all help each other and share spells and do jobs for each other. He says if we help him with a job on the nearby boat, he'll give us 100 platinum and teach Silas a big spell like fireball or fly.

Silas tries to be an ass about letting bygones be bygones and how Solomon should just trust him implicitly now, until Solomon starts Oogling the wine bottle. Silas capitulates so he'll stop. 

We agree to work with Solomon, or at least hear him out. He buys us all gyros and we go over to some nearby cargo containers, where he sets up a tiny hut for privacy.

He checks to confirm we're all good with fucking with the [[Titan Corporation]] and says we're probably going to pick up some heat for this.

The job is to help Solomon kidnap a director (who will be in his office, which is also where we need to get our data stick) on the nearby ship  [[The Gray Pelican]].

We probe on who this job is for. It's the Malefactors. Solomon won't give the name of his Malefactor contact, but we do confirm it isn't [[Morrgen Oublier|Morrgen]]. At Gideon's prompting we do say if possible we want a meetup with Morrgen to be part of our price.

After trying to get Solomon to tell us the villain names of the Malefactors (and failing when he keeps telling us to just Oogle it) we look them up and find the following.

**Malefactor villain names are:**
[[Morrgen Oublier|Brass Scale]]  (Morrgen)
[[Bulwark]]
[[Umbral]]
[[Glitch]]
[[Grimjaw]]
[[Overmind]]
