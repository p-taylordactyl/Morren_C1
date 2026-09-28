---
dg-publish: true
type: session_note
created: 2026-09-21
modified: 2026-09-28
session_date: 09/21/2026
session_number: 19
players:
  - Alek
  - Cinna
  - Jordan
  - Matt
  - Taylor
missed:
paid:
level: "5"
ingame_start: 1/27/2012
ingame_finish: 1/28/2012
locations:
  - "[[Deadwater Wharf]]"
  - "[[The Gray Pelican]]"
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


# Winter 27, 2012

We resume en route to the [[Dockrunner]], having concluded our business on [[The Gray Pelican]].

[[Gideon Oublier|Gideon]] is bee-ed out as [[Silas Sorelli|Silas]] is bee-ed in.

We see the three costumed people getting their shit kicked in by the [[Old Valence Stevedore Union|Stevedores]] but decide we don't have the time or energy to assist.

One of the Stevedores is in a big exosuit. Standard gear for cargo-moving but it's clearly been souped up for combat.

![[token_exosuitstevedore.webp|370]]

We decide not to intervene.

Spurred on by Silas, we have a pretty significant discussion about our differing moral compasses as individuals and what this means for us as a group. Are we big dumb heroes, or orphan-makers? During this, Kat gets a text but doesn't check it yet.

I didn't take great notes during this part and a lot was said, but there was a lot about [[Dorian Caldwell|Dorian]] killing people without telling anyone and [[Keena O'Malley|Keena]] killing a guy only because the voice in her head said so. 

Silas tells Keena we all think she's crazy and the voice isn't Morronel. We do all express some concern about what if the voice tells her to kill one of us, and Keena tells us it sort of [[Keena O'Malley#Temple Instruction|already has]] and she hasn't listened to it. 

For Dorian's part, he says he only killed the guards on [[The Gray Pelican]] because they knew his real name and heard him express interest in [[Hood Station]], so if they lived to tell about it then [[Custis Delavide]] would likely start focusing his attention there. The party understands this to a degree, but we point out that all of that was likely caught on security camera anyway, which we never looked for or wiped. Some of us express that had we realized Dorian using his real name was going to lead to the deaths of (relative) innocents, we would have insisted on a different plan. 

We don't exactly all get on the same page in terms of whether murder is okay, but it seems like we maybe agree that we need to be discussing these things more beforehand. Had we known that knowing Dorian's real name was going to be a death sentence for people, we could have worked around that (or if you're Silas, helped with the murders?). 

[[Katriel Buchanon|Kat]] emphasizes that we can't keep doing this secret bullshit and hiding things from the party. We can't trust each other if we're working behind each other's backs.

In the spirit of not keeping secrets, Max reveals what *really* happened to him during the week that [[Sterling Corvain]] held him captive.

Silas asks [[Maximilius Adkins|Max]] about his mental state. Max says he's kind of pushed off thinking about it. 

Silas also asks why he was tortured and Max says he doesn't really know. He ties the senselessness of it to what he's afraid the group will descend to. 

Silas asks us all to clarify our goals.

Silas and [[Dorian Caldwell|Dorian]] both work to further the goals of [[Hood Station]] in large part because they feel that they owe [[Rosetta Thorne|Miss Rosie]] (who would likely kill them if they left).

Kat feels that she's indebted to [[Morrgen Oublier|Morrgen]]/[[Gideon Oublier|Gideon]] and Hood Station as a whole for taking her in when she escaped the [[West Valence Saints|Saints]] and giving her a chance at a new life. Her goal is to protect the Station and also honor the gift she was given in escaping a life of murder by not murdering people.

Silas asks Max about his goals and what motivated him so much that he traded himself for Malcolm and endured torture.

Max says he traded himself for [[Malcolm Oublier|Malcolm]]  because he knew the entire situation was a consequence of his own actions, and he wasn't going to let a kid take the fall for that.

He came to Hood Station because he was looking for stories and in the process, he really grew to appreciate the place and developed a strong desire to help the lowest in society. It's less about Hood Station and more about the people themselves. He does clarify that if Hood Station grows into a place that espouses values he can't get behind, he'll leave the same way he left [[Crownlight Media|Crownlight]]. But right now he is still very aligned with what Hood Station is and is trying to be.

Kat checks the text she got earlier.

(transcription isn't exactly word for word, I defs missed some of it)
"I was wrong. I tried making you into what this world needed. I tried making the Saints into what [[Morronel]] needed this world to be. But now I see. You made the right choice. I can never truly atone for my sins. I will exhaust what's left of my life in service to those I brought suffering upon. I promise after this night neither I nor [[Gorax]] will darken your door ever again."

Kat immediately recognizes that this must be from her father, [[Hadrian Buchanon|Hadrian]] and it sounds like not only has he had some kind of change of heart, but he's going to go after Gorax (the leader of the [[Dominion Crew]]) and perhaps doesn't expect to survive the encounter. After some back and forth with the group, she goes off by herself to think. After a few minutes, she calls Hadrian and they discuss his change of heart and his plans. She encourages him to avoid killing Gorax if possible and to let him go through the justice system, and sends him [[Lumen Veil]]/Knight and [[Lighthouse]]'s numbers as people who could help him. 

When she gets back to the party, she tells them about the call. Silas asks if she offered to help Hadrian with Gorax and she says no. He prods her further about it and says he just doesn't want her to have regrets. She says she doesn't feel regret. She isn't going to stick her neck out for a man who abused and up until recently was still trying to kill her. Tired of talking about it, she ends the conversation by saying she's going to bed.

[[Keena O'Malley|Keena]] and Max are on watch. She apologizes for not noticing what was going on with him and they talk about her visions from "Morronel." She tells him about how it's been vindicating to feel like she can punish the wicked but she also does still question the voice. She explains why she killed the Saint in particular and Max says he understands but asks that we talk about it beforehand next time.

As they chat, Max sees this figure and a number of [[Ghosts of the Flooded Zone|Ghosts]] preparing to approach our dome. They aren't exactly hiding, but he's clearly noticed them before they expected.

![[session19_ghost1.webp|534]]

Max communicates their approach to Keena before getting bee-ed out.

Keena wakes everyone up.

Kat watches and it seems like they're not approaching aggressively.

We discuss briefly about Silas's history with the Ghosts. and Kat gives him some shit about still keeping secrets after our whole conversation earlier.

Silas can't leave the Tiny Hut bubble without bursting it and we want to hide our numbers so Kat stays with him.

The lead Ghost puts down a puck and a hologram of [[Kali Torreo]] pops up.

She immediately calls Silas out for hiding in the bubble. After some taunting and Silas refusing to engage, Kat pushes him out of the tiny hut bubble, breaking the spell. 

They trade insults and Kali says she's more here for Hood Station than him. Apparently our plan to buy Hood Station is getting in the way of her own plans. Keena asks what her plan is so we can "get out of the way" as requested. Silas asks if it's even Kali's plan or is she just following orders? Kali implies she's one who gives all the orders now as a general.

Kali says we should take the buyout and get as much money as we can from the [[Valencian Seahorses|Seahorses]] and let the construction take place.

She apparently knows about our bank heisting.

She and Silas bicker. Kali tells Silas she's actually making a difference and building something that could actually rival the [[Oligarchs]]. She's asking him not to interfere as a personal favor. She wants the people of Hood Station to take the payouts and settle somewhere new, and that it will result in the least lives lost going forward.

Silas pushes back but Kali says we need to be realistic. She says we can't rob all of the banks in time, and implies that she also knows about Dorian's potential inheritance.

Kali restates that we can either work with them and get a corpo payout or work against them and crack under the pressure of both the Ghosts and the corpos. She even offers that the Ghosts will help us get the best deal from [[Victor Halden]].

We don't accept the offer outright nor do we explicitly reject it, and the Ghosts leave.

We discuss what to do. Silas expresses that he should be left out of any plan we make that would involve violence against the Ghosts/Kali. Hood Station be damned, his first loyalty is to her and his sole long-term goal is to dismantle the Ghosts (except for her) so that she has nowhere else to turn but him?

Kat challenges Silas on if he's certain his goal of dismantling the Ghosts to "free" Kali from them is truly the only path. He is, though he's open to other solutions if she has one. Kat points out that the obvious end result of this manipulation would only be that Kali hates them but Silas would rather she be "free" of the Ghosts and hate him. Kat questions him on if she's really a captive when she's a General and seems to fully believe in what she's doing and he's of the opinion that she's basically been brainwashed.

All that aside, we still have to figure out what to do.

I lowkey don't have the energy to put down all the details but I think we might all feel like there's not a good solution here. Silas's priority is protecting Kali over Hood Station. Kat thinks working with the Ghosts/taking the payout is the solution that minimizes harm to Hood Station, but the others are staunchly against it. We do all also recognize that we can't exactly hold off both the Ghosts and the Corpos, even with the Stevedores "protecting" us. Silas will actively intervene against any plan he's aware of that involves turning the Corpos against the Ghosts. 

The costumed people from earlier are just waking up. Keena stumbles over to them pretending to be drunk. They're some kind of amateur hero team that were investigating corruption in the Stevedores.

Their names are 

- "[[The Paper Tiger]]"
- "[[Crownless]]" (can't talk bc no head)
- "[[Patchwork]]"

Keena asks if Patchwork was inspired by the Tickler but he says the Tickler is a ripoff and he's been doing it for years. But obvs there's a lot of clowns out there.

She tries to get their autographs for "when they get famous."

Paper Tiger refuses saying that they aren't in it for fame but to stop the ever flowing tide of evil in the city.

Keena returns to the party. We really wanna know what Crownless's neck situation. Kat runs over, jumps up in the air by them to look, and runs back. It does seem like there was just a clean cut at the top and she can see down his esophagus.

We make the sick nasty car jump between the boats to save time.

As soon as we land this teenage girl runs over and says the corpos are going to kill her uncle [[Jonas]] over missing mining equipment. 

It seems these corpos are with the Delavide Coporation. Keena is suspicious of a trap but massively fails the insight check.

[[Sharon]] (the teen) leads us towards the pending execution. 

An aerostatic vehicle rolls up to pick up an operative from a high ground.

We see a number of corpo goons surrounding 3 hostages. A [[Box Boys|Box Boy]] scavenger, a Stevedore laborer, and Jonas. 

![[npc_jonas.webp|503]]

The vehicle drops a beacon that goes up into the sky before leaving.

Last chance to do something or not. Kat decides to intervene and the group follows.

Dorian sees his cousin, [[Dexter Delavide]], who recognizes his rings but initially assumes Dorian is a street rat that stole it.

![[npc_dexterdelavide.webp|647]]

Dorian is able to successfully convince him this is the case.

![[session19_combat1.webp]]

The 3 captives each need a thieves tools check to free them.

Nanite zone will do....something (we find out mid-combat that going through it gives you advantage on all your attacks for the turn, but enemies will also have advantage on attacks against you).

