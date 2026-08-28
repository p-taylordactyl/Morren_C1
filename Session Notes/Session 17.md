---
dg-publish: true
type: session_note
created: 2026-08-24
modified: 2026-08-28
session_date: 08/24/2026
session_number: 17
players:
  - Alek
  - Cinna
  - Jordan
  - Matt
  - Taylor
missed:
paid:
level: "4"
ingame_start: 1/27/2012
ingame_finish: 1/27/2012
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

We pick up preparing to travel the [[The Gray Pelican]]. 

As we finish our Oogling, [[Keena O'Malley|Keena]] is bee-ed in right as [[Gideon Oublier|Gideon]] is bee-ed out.

We learn [[Solomon Hexley|Solomon]] drives a purple and gold car.  It seems that he and [[Silas Sorelli|Silas]] share a lot in terms of personal taste.

[[Katriel Buchanon|Kat]] makes a sick jump in the car to save us an hour of travel on the way to the ship.

 Solomon has cool enchantments on his car that let him shrink it to fit in his pocket.

As we near the docks, we chat about what spell [[Silas Sorelli|Silas]] should ask [[Solomon Hexley|Solomon]] for. Fireball, Fly, Tiny Hut? Many options.

We're almost to the boat when a car pulls out in front of us and Kat has to brake hard to avoid hitting it. The hard stop causes Keena (in the passenger seat) to bang her forehead on the dash.

![[Keena O'Malley#A Sinner Walks Alone]]

Somehow we get from the vision to it being crazy that the car doesn't have a roof and after much discussion, [[Dorian Caldwell|Dorian]] sends (at Keena's request) a highly passive aggressive email to Lumen Veil, helpfully informing him that "In the winter, it is cold" so that maybe he'll stop giving people roofless cars.

![[session17_map1.webp|840]]

[[Maximilius Adkins|Max]] perceives the second boat and sees that it's called the [[Dockrunner]].

We head for the Gray Pelican first.

Solomon asks if we're going in loud or quiet. Kat asks about security. Probably a lot of goons.

Solomon and Dorian bother would prefer quiet. 

Silas would prefer we go in quiet for as long as possible, but expects it to eventually get loud.

It sounds like we all want to go in quiet except for Max ,but he's still down and very interested in being a distraction if needed.

This [[Director Vosslen]] guy we're trying to kidnap is apparently trying to climb the corpo ladder. Max brings up that we could maybe talk him into a room with us alone if we pitch it right.

Dorian, wanting to potentially use his real history to help us here, finally fills the entire party (except Gideon, I guess) in on him actually being a Delavide. Kat and Keena are sus about his intentions in slumming it with us bottom dwellers but also feel like they've seen this story in several movies. Apparently Dorian likes the food better in [[Ambition]] but the people better down here.

The conversation is interrupted when we hear a guy yelling for help before dying in an alley and look to see a lone [[West Valence Saints|Saint]] walking away with a bloody blade, singing to himself about going home. After a brief discussion about how far his home might be and if we should follow him there and candle him or deal with this now, we pounce. Keena states she's going to kill this guy and Kat responds by saying we're not gonna kill him, just knock him out and call the [[Enforcers]].

We easily subdue him, and as Kat is on the phone with the Enforcers, Keena sneaks over and snaps the guy's neck, killing him.

This sparks a whole large argument in which everyone yells about how it was highly unnecessary to kill a subdued man and Keena argues that Morronel told her to do it and after what happened with the [[Ozwin Wicker|beggar]] she's not taking chances.

During the argument, Keena sees a blurry vision in the sky of a candle being split by a bolt of lightning. 

After enough back and forth, we decide to table the issue for the sake of the current mission and try to focus on planning.

We agree that Dorian is in fact going to pretend to be himself, Dorian Delavide. He spills the beans about this being his real identity, to Solomon who thinks it's just really good acting.

Max disguises self in his Tickler makeup to be 6in taller and be in fun Tickler clothes. He is now like 6'3. 

Keena wants to try and candle the dead Saint before we leave. She asks Solomon to help light it, but it won't catch.  Solomon ritually casts identify on the candle and determines it does in fact need to be lit on the doorstep of someone's dwelling to work.

Keena kind of wants to take the dead bodies and try to use them as leverage with the Stevedores since we helped one of their but we decide against it for logistical reasons and lack of hard evidence to back up the story.

As we head back towards the ship, we see the [[Animator]] hawking enchanted items for a knife throw, 200G per try. First one to win wins the prize.

Dorian has a go.

Each throw gives a # of points. 

Natural 1: 0 points  
1–9: 1 point  
10–14: 2 points  
15–19: 3 points  
20+: 5 points  
Natural 20: 10 points

Goal is to get 25 points on 5 throws.

Dorian manages to succeed after a couple attempts and wins an enchanted red crystal that adds a +1 bonus to armor. He generously gifts it to Keena by crushing it against her armor, leaving a red handprint.

Solomon says he should learn that enchantment since it seems cool. He wants the Animator's name or number but we don't actually have it.

As we approach the ship, Dorian melts the pewter on his ring, revealing the true ring underneath: a signet of a raven holding a gold coin.

We debate whether Dorian should use his true name but then a guard approaches us on the dock and asks our business.

Dorian says we're there to meet Director Vosslen.

They ask who he is and Dorian gives his real name.

Nat 20 on the persuasion check! The Director will meet with us.

They lead us up into the ship.

Onboard we see a ton of exotic creatures being loaded into cages, including the freaky lil bug guys (Kruthiks) like we fought at the [[Harbormaster's Office]]. Max feeds a kruthik some journeybread.

![[session17_freakylilguy.webp|414]]

We come to a small corner office on the end of the bridge. It seems super fancy. 

This man, Director Vosslen, greets us.

![[npc_directorvosslen.webp|500]]

He cautions us that it's going to be a long meeting and we all should sit, but Max, Keena and Kat remain standing. 

As Dorian and Vosslen begin to talk, a servant comes in and sets out drinks. Dorian takes a wine and Vosslen takes the same one.

Dorian proposes Titan and Delavide work together.

Dorian's pitches that [[Titan Corporation|Titan Corp]] could supply Delavide with machinery for the mineral plant they're building near [[Hood Station]]. Vosslen is a bit confused since Titan is often in competition with Delavide. However, he's interested in buying out the project entirely. 

The servants bring out cigars, which Silas gets in trouble for trying to take since the deal isn't done yet. They bring out drinks for the "guards" as well. 

Silas takes a drink but says the guards don't. He identifies himself to Vosslen as something like an advisor.

Dorian tells Vosslen he's interested in a particular plot of land being preyed upon by [[Victor Halden]]. 

As Vosslen expresses his surprise at this, Dorian signs to Silas and asks when we're going to do this? he can only stall for so long.

Silas tells Vosslen we should have as few ears as possible in the room for this deal. Dorian agrees. They offer to send all the muscle out of the room, ours and theirs.

Vosslen is comfortable if everyone is dismissed, including Silas. On his way out, Max takes a platinum figure out a raven right off the wall. Vosslen is confused by this but says nothing. Silas tries to follow suit and is chastised. Before he leaves, Solomon sneaks Silas the pokeball.

Once everyone's out, Vosslen says he'll find a way to make this deal big for both himself and Dorian. Dorian responds by immediately lunging across the table and knocking him out cold.

![[location_deadwaterwharf_thegraypelican.webp]]

After sucking him into the pokeball, Dorian pokes around the room for anything interesting.

He sees a terminal and several empty data sticks. He takes the empty sticks. 

The terminal is password protected.

Dorian looks around for a password written down somewhere, but no dice.

![[session17_combat1.webp]]

With not much else to do, he goes to the door and yells that Vosslen passed out. The Titan guards all rush in and once they're all in the room, Silas casts sleep, starting combat.

During the fight, Kat gets a call from [[Thorbin Sprake|Thorbin]], which she puts on speaker since she's in the middle of punching people. Thorbin tells us that [[Memaw Shoe]] wrecked nearby and asked if we can go help. It might be a difficult repair, but we'll be rewarded for helping.

We managed to handle the situation without killing anyone. We end here, though we still need to get our file off the computer.