---
dg-publish: true
type: session_note
created: 2026-08-03
modified: 2026-08-23
session_date: 08/03/2026
session_number: 15
players:
  - Alek
  - Cinna
  - Kuya
  - Taylor
missed:
paid: true
level: "4"
ingame_start: 1/21/2012
ingame_finish: 1/22/2012
locations:
  - "[[Deadwater Wharf]]"
  - ">[[Seahorse Bank]]"
  - ">[[Harbormaster's Office]]"
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



# Winter 21, 2012

We resume at the [[Seahorse Bank]], where [[Gideon Oublier|Gideon]] (currently disguised as [[Victor Halden]]) has seemingly given the correct answer to Victor's security question, and is currently being led deeper into the bank.

The manager leads [[Gideon Oublier|Gideon]] to a door and says she can't follow beyond that point. He asks her to arrange for large-scale transport of funds and tells her to look out for the arrival of his new bodyguards, describing [[Silas Sorelli|Silas]] and [[Keena O'Malley|Keena]].

She leaves and Gideon enters the room. There's nothing in the room but a briefcase on a platform in the center.

He casts detect magic and picks up on all kinds of warding on the room that's already been deactivated (presumably on his account). On the briefcase, there isn't much other than the standard residual magic common with electronics.

He checks the briefcase and table for traps but finds nothing.

After some thought he just takes the entire briefcase and heads back towards the front.

Keena finds herself bee-ed back into the lobby right as Gideon (still as Halden) is coming down the stairs with the briefcase.

Gideon texts Kat and Dorian and says to leave, but to tell Keena to stay and act as his bodyguard.

Kat fills Keena and [[Stonespear]] in on the plan and we stagger our exits.

The manager stops Gideon on the way out to give him a ==mushroom keychain== he apparently dropped.

As we all finally exit the bank, we see Stonespear seemingly making a decision before turning and joining us.

We make our way to a secluded area, having watched confident that no one is following us.

Kat looks for a tracker on the briefcase but can't find anything. We open the briefcase and there's only a data stick inside. Kat checks it out and determines it's some kind of key to unlock something like a computer or terminal or any number of things.

Notably, keys like this typically come in sets of four.

Stonespear says the other keys will be at other Seahorse Banks and that there is a bank by the [[Infinity Plaza Mall|Mall]]. And then he flies off.

![[session15_map1.webp]]


We spend the night here, with Kat and Dorian on watch. They discuss how the party might go about stealing the remaining data sticks without getting caught or attracting too much attention. 


# Winter 22, 2012

The next day, Dorian tells Keena about what happened with the  [[Ozwin Wicker|old blind guy]] turning into a monster, though Kat tries to stop him, worried that this will only upset her and lead her to follow her visions without questioning anything. Naturally Keena isn't happy that Kat was willing to keep this from her and questions Kat about not trusting Morronel. Kat tries to clarify it's not about trusting Morronel it's about whether or not Keena is getting visions from Morronel or something else.

![[Keena O'Malley#Chastisement Vision]]

We spot the  [[Harbormaster's Office]]  off in the distance and start driving towards it as a blizzard kicks up. We plan to try and push through since it's only a couple hours.

En route, we're attacked by saber-toothed cats.

![[session15_deadwaterwharf_combat1.webp]]

After defeating them, we decide to wait out the blizzard there. We're able to find/put together a small shelter, but one person has to be outside the shelter at all times since it's too small. Kat, Gideon, Keena each take a turn outside through the several hours it takes for the blizzard to pass. They each take 1 level of exhaustion from the cold.

Keena asks Kat if we could add little (real, not painted) flames on the frame of the car for warmth. Not necessarily tiny flames, but it seems like we might be able to modify the car to provide more warmth at some point.

As we travel on, we see a dingy section of brick and mortar storefronts attached to the harbormaster's office. Somehow one is still open.

Dorian recognizes the man inside as someone name [[Garrick Holloway]] who covered his ring in pewter for him back in [[Ambition]].

![[npc_garrickholloway.webp|624]]

Dorian asks us to stop in at Garrick's apparent jewelry repair business to talk to him. 

Hard to tell how bad this area really is but the shops don't seem to be doing well.

As we enter, Garrick is hard at work engraving some jewelry.

He immediately says Dorian seems familiar, then recognizes his ring. He's suspicious until Dorian tells Garrick he covered it in pewter for him.

Garrick, now fully recognizing Dorian, says he worried Dorian was dead. After Dorian left, Garrick got some big stupid idea about suing [[Custis Delavide|Custis]] to take him down, had a big legal battle that he lost and ended up down here in [[Old Valence]]. 

Dorian offers Garrick that he could move his shop to [[Hood Station]].

Garrick mentions he could enchant things for us if he had the right tools.

He asks if Dorian would mind undergoing a spell considering how "convenient" his showing up is.

Dorian consents and Garrick casts detect magic on him.

After realizing it's actually Dorian he's quite excited. They swap wristphone numbers.

He says he hope Dorian hasn't been up to anything too illicit as Gideon walks in and asks if Garrick has heard of Red Thunder.

This prompts Dorian to introduce the party and we all enter. Garrick lights a fire for us but mentions the chimney doesn't work, so we should breathe slowly.

The conversation returns to Red Thunder. Garrick asks if we sell it and Dorian says no, since Keena would probably kill us if we did (which she confirms). Garrick asks if she's lost a family member or something and she says no, she's just against it on principle and refuses to bring it to Hood Station or be involved in selling it.  Garrick has actually taken it before but doesn't anymore since it made him angry. He says he understands Keena's opposition but personally is unbothered by people selling the stuff.

Gideon questions if Dorian really trusts this guy. He does.

Garrick offers to make us personalized (nonmagical) rings. Very cool.

(I missed a little since I was late coming back from break).

Some kind of scheming going on. 

Changing records for the Seahorses and the Delavide family? I hope Cinna got this.

We each describe for Garrick what Hood Station means to us to help him decide if he wants to move. As Keena is describing what Hood Station means to her, we hear the growing sound of infernal buzzing. Garrick rushes to close up the shop  and says the infernal wasps are out. We peek through the blinds and see 6 ft long giant wasps landing in the street attacking people. They corner two helpless people in a phone booth.

We go out and distract them, giving the people in the phone booth enough time to escape. Unfortunately this does make the wasps attack us instead.

![[session15_deadwaterwharf_combat2.webp|913]]

Kat and Dorian almost go down in the process, but we fend off the wasps.

Dorian tries to harvest poison from the wasps but fails.

We go back in the shop and get sick ass rings from Garrick. Our act of heroism impressed him and he's down to move to Hood Station.

As Garrick heads off for Hood Station, Gideon gets a video call from an unknown number. He finds a private spot to take it. It's [[Morrgen Oublier|Morrgen]], who looks incredibly beat up. He asks what happened and she says she had to prove she still had what it takes to run with these people, who are going to help with [[Malcolm Oublier|Malcolm]].

She tells Kat to come in and says we're going to see some things on the news the next few days and it had to be done. And if she and Malcolm don't come back for a while, we should know they're safe but they won't be able to reach out. This will all be over very soon.

Gideon says he can try to find another way, but she says it's a big gamble and asks what lead he has (but we don't have anything). He does tell her he talked to Malcolm and knows his court date is the 28th, and that we robbed a bank and are going to rob others and maybe we can use some of the money to help Malcolm.

Morrgen says she can't afford to wait for the court date because Malcolm will be harder to get to after that. Kat asks about Hood Station's ownership and she says she thinks we probably don't own the land, but [[Memaw Shoe]] would have to confirm.

We see Morggen put on a strange mask (on top of a costume) we've never seen before as the vehicle she's in pulls up to a courthouse.

After she hangs up, Kat tells Gideon he shouldn't have told her about the bank robbery. Morrgen has enough to worry about.

![[session15_map3.webp]]

At the Harbormaster's Office, we see that everyone around is all wearing uniforms. Anyone without one might stick out. Dorian looks to see if there are any particularly important looking offices with terminals and does identify one likely to have the file we need.

He also sees a fire escape outside the tower that we might use to climb up.

Looking for somewhere we might find uniforms, Kat spots a laundry service van nearby. 

Dorian sneaks over. He tries to unlock the van, but his thieves' tools break. 

He sneaks back to the party and Gideon casts mending on his tools.  

He goes back to the van. The tools break again. 

Back to the party.  Mending again. 

Back to the van. Tools break again. 

Back to the party.  Mending again. 

Back to the van. 

This time, he successfully unlocks the van and finds some very dirty uniforms inside. He picks out the 4 best and sneaks back to the party.

We put the uniforms on and decide to take a quick rest before we attempt to acrobatics our way up to the fire escape.

Keena and Gideon are on watch.

Keena asks how Gideon's been holding up. Gideon says he's glad his mom is rescuing Malcolm and that even though he's sad he won't be able to see them, he's happy that Malcolm might actually get some one-on-one time with Morrgen.

He also tells Keena he feels weird about us inviting so many people to Hood Station when things are going wrong and he doesn't know how to fix it.

Keena says things should be okay with the [[Old Valence Stevedore Union|Stevedores]] protection (even if she does want to get out of that contract) but there are definitely some dark spots. She says it's less about the place anyway, and more about the people. Like the little old ladies Gideon used to help.

Gideon confesses that now that he isn't getting praised constantly by his parents for it, he doesn't really care as much about helping people.

Keena asks if he wants her opinion or just to be listened to. He's okay with advice.

She says she thinks his parents would still be proud of him if he reoriented. Or he could find a hobby, maybe? She asks about his hobbies but he doesn't really have one. Keena recommends vengeance-seeking, which she finds very fulfilling. Gideon asks if he can help Keena and Max hunt down Titan Corp people, and she enthusiastically says yes. 

In the morning, we talk about what we can actually do to deal with bad people. Jail seems unlikely to be effective for anyone rich/powerful, murder is effective but Kat is strongly against it from a moral perspective, but comas might work? Keena also mentions candling, though that could have its own issues given we have a very limited number of dolls.





