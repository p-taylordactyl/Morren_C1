---
dg-publish: true
type: session_note
created: 2026-05-25
modified: 2026-07-28
session_number: 5
session_date: 05/25/2026
players:
  - Alek
  - Cinna
  - Jordan
  - Taylor
missed:
paid: true
level: "2"
ingame_start: 1/7/2012
ingame_finish: 1/7/2012
locations:
  - "[[Not Far Sewer]]"
  - "[[Pumping Station]]"
  - "[[Hood Station]]"
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

# Winter 7, 2012

We resume having gone down a large pipe at the [[Pumping Station]] in the [[Not Far Sewer]]. 

![[location_notfarsewer_pumpingstation_blockage.webp|1092]]

We see a bunch of loot sticking out of some rubble off to the right. We're able to use [[Dorian Caldwell|Dorian]]'s rope and the motorcycles to clear the rubble.

We find a damaged masterwork painting of a random couple (implied relevant to Dorian but he reveals nothing). [[Katriel Buchanon|Kat]] tries to identify the couple, no luck. Dorian takes the painting without saying much more.

![[npc_dorianparents.webp|302]]

We pick up a bunch of other assorted loot, including another stick of dynamite for Dorian and a [[potion-of-greater-healing-xdmg|Potion of Greater Healing]], which Kat snags.

We find a bunch of rocks and weird orange goo causing our pipe blockage. Dorian tries to intimidate the blockage, which kind of works in that the orange goo (aka Caustic Jelly aka Angry Condom) oozes out of the pipe and attacks. [[Keena O'Malley|Keena]] goes down but uses [[false-life-xphb|False Life]] to give herself temp HP and Kat uses the healing potion she just picked up from the rubble to heal her almost completely.

Dorian uses both dynamites on the goo, finishing it off.

![[location_notfarsewer_pumpingstation_blockagefight.webp|1094]]

The blockage is cleared and the water flow is usable for now, but lower than it should be. After some investigating, we figure this is due to the [[Titan Corporation]] interference above, but we have time to handle it and decide to wait until we have the full party. 

We go upstairs and [[Maximilius Adkins|Max]] introduces himself to [[Kelm]], who vaguely recognizes him from [[Crownlight Media|Crownlight]]. He sort of implies Max is a conspiracy theorist but they connect.

We head back out to the main sewer and discuss our next move. Kat feels the doll issue is unresolved and the "wicked" from Keena's [[Keena O'Malley#Candle Vision|revelation]] is likely somewhere in the sewer, but Keena thinks we have time since we got the dolls, and wants to get back to [[Hood Station]] and onward to the tower so we can finish the other quests.

![[session5_map1.webp|1096]]

Kat asks Max why he has beef with Crownlight Media.

He explains he used to work for them and covered the [[Flooded Zone]]. He started to notice that what was being released didn't match the reality of the situation. Eventually he left, stole some stuff on the way out, and started producing his own media.

As we're discussing, we see a [[Crownlight Media]] helicopter flying past through the sewer, stopping just outside our planned point of egress on the western side of the sewer.

We're sneakily approaching the exit point to see what Crownlight is up to, but on the way we see a group of [[West Valence Saints|Saints]] beating the shit out of an [[Brug|orc]]. The orc is insisting he's there for an "art project" and not trying to claim their turf.

![[npc_brug.webp|343]]

This guy, who is covered in ritual scarification and has had his mouth sewn shut, kicks the Orc unconscious.

![[npc_scarredsaint.webp|451]]

Keena tells Max to disguise himself as a [[Titan Corporation|Titan]] Corp exec. He does and then he and Keena walk right up. Max basically thanks the Saints for doing his dirty work for him.

The Scarred Saint wants Max to explain his presence before the guy cuts his throat.

Max says the orc owes a severe debt to the Titan Corporation and that he needs to bring him back to the corporation. The Saints are welcome to his valuables but Titan needs the man.

The underling says, "You want him, corpo? What are you willing to pay?"

Max says he doesn't care for bribery but can throw him some coin. It would not be much.

The scarred orc says he'd be satisfied with a hand from his victim.

Max offers 25(20?) gold. Keena pulls out a pouch and dangles it to help with persuading them.

The scarred orc nods. Keena gives Max the pouch and he gives it to the Saints and they leave.

The orc seems to have been working on spray paint graffiti of a cargo shipping container. Clearly trying to mark this as territory for [[Box Boys]].

Kat wishes we hadn't stepped into a simple territorial dispute but Keena reminds her that any blowback should be towards Titan, not us.

We decide to keep the Titan ruse going to see what info we can get from the orc. Kat wakes him up with the help of the group but stays out of his sight.

Max in Titan disguise questions the orc, with Keena playing intimidating backup.

The orc seems marginally cooperative at best. He's trying to establish Box Boy interest in/"support" for the Not Far Sewer.

Max asks about [[NPCs/The Driftwarden]] and the orc says it's just a rumor, no one actually survives off kindness.

Keena and Max give their names as Belinda (Lastname?) and Franklin Marvelous. When the Orc won't give up any more info, Max knocks him back unconscious.

Kat wakes him up and this dude is in bad shape - likely concussed after being knocked out twice in a row. She and Dorian pretend to be sewer people, act receptive to his efforts and convince him that the sewer folk would be grateful if they could take out the [[Titan Corporation]] people at the [[Pumping Station]]. Kat gives their names as "Windows" (Dorian) and "Walls" (Kat).

While we make our way to the exit proper, Keena and Kat chat about how fucked it is that there are 5 million streaming services and it's damn near impossible to just watch your favorite Aquaball team on TV.

We see Crownlight has set up some weird kind of checkpoint at the sewer exit.

Max recognizes [[Barron Sutton]] talking on a communicator.

![[npc_barronsutton.webp|386]]

It seems like it will be very difficult to get out without being caught on camera.

Max briefly explains to us that he knows Barron and really doesn't want to interact with him or be seen by anyone from Crownlight. Kat also does not want to be caught on camera lest the Saints find out she's been back in Westreach.

In light of the above, Keena takes the lead and walk up to talk to Barron at the checkpoint, Dorian coming behind her.

Barron tells them Crownlight is looking to interview people about life in subterranean settlements. Keena (posing as a sewer person) says those documentaries always make people look like dumb hicks.

Keena asks what Barron knows about 5chan and he says the internet scares him, because the internet is too manipulable whereas hard copies are harder to change after the fact.

Dorian rolls up and mentions how he opened a bag and a corpse fell out.

Barron jumps at this and asks to interview Keena and Dorian. It seems like this documentary is really about starting a campaign bring "order" to the sewers. Yikes.

They want Dorian to talk about terrible things he's witnessed in the sewers. 

Keena wants to look like a penguin because "penguins don't exist." She gets illusionary penguin face paint.

Dorian gives the name Franklin Marvelous and gets his face blurred live by the same illusionist. Keena wants her hair to be black and a tuxedo outfit to be more penguin-y and gets it. 

They also ask for their voices to be changed in post.

Barron offers them a bunch of paperwork to sign. Dorian reads through carefully and there doesn't seem to be any hidden tricks.

Dorian mentions all the factions that are down in the sewer, including the Saints, which gives the Crownlight people pause. 

Keena mentions a sentient filter and sentient rocks.

Dorian says the Machine God isn't real.

Keena talks about pizza rats. Honk.

We wait out the media storm.

On the way out, the helicopter clips a pipe and we gotta dodge fast. Max and Dorian each get hit and take a level of exhaustion.

We head back to [[Hood Station]].

![[session5_map5.webp|1097]]

We make it back to the station and Thorbin shows us a car [[Lumen Veil]] has gifted us for saving him. Thank god honestly.

![[session5_newcar.webp|1048]]

