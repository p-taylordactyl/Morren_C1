---
dg-publish: true
type: session_note
created: 2026-07-13
modified: 2026-08-03
session_date: 07/13/2026
session_number: 12
players:
  - Alek
  - Cinna
  - Kuya
  - Matt
  - Taylor
missed:
paid: true
level: "4"
ingame_start: 1/12/2012
ingame_finish: 1/19/2012
locations:
  - "[[BB Megatower]]"
  - ">[[Tier 2]]"
  - ">>[[Ransom Location]]"
  - "[[Hood Station]]"
tags:
  - downtime
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

# Winter 12, 2012

We resume outside of the [[Ransom Location]], about 30min after [[Maximilius Adkins|Max]] entered the building.

[[Katriel Buchanon|Kat]] texts [[Malcolm Oublier|Malcolm]] and asks "hey did they let you go? where r u?" and he doesn't respond but she hears his phone go off. She calls it and the party finds him unconscious in the streets.

[[Keena O'Malley|Keena]] kicks his butt and he farts but doesn't wake.

[[Silas Sorelli|Silas]] flags a random passerby to kick Malcolm in the nuts and he does. Malcolm remains unconscious. Silas also rummages through Malcolm's pockets but only finds a half-eaten plum.

[[Dorian Caldwell|Dorian]] paints "loser" on Malcom's forehead.

Keena changes his ringtone to "taking the hobbits to Isengard!" and Kat hacks his wrist phone so he can't change it.

We talk about what to do next and the [[West Valence Saints|Saints]] problem. [[Keena O'Malley|Keena]] and [[Katriel Buchanon|Kat]] talk about [[Morgo]] and the possibility of candling him and what exactly candling might do. Current assumption is that it will turn the "candled" person into a doll and one of the child dolls will go back to normal.

The gang members outside the Ransom Location start to disperse as people leave the building, including two [[Titan Corporation|Titan]] animated armors. But no sign of Max.

A gust of wind rolls past us with a poster. It says "Coming Soon: Delavide Mineral Extraction" with a location about 1.5hrs from [[Hood Station]].  Dorian explains to the party that [[Custis Delavide]] is the [[Oligarchs|oligarch]] that killed his parents.

It's cold enough we're going to need to find shelter for the night, especially for our less alive party members to survive.

Once it's cleared out, Kat goes up to the doors of the warehouse and peeks inside. There's no one inside, but there is a weird burn mark in the shape of a magic circle on the ground, and some marks that look like there was a shipping container in the circle at some point.

She gets the rest of the party and brings them in. Silas casts Detect Magic and recognizes the circle as a conjuration spell, most likely some kind of teleportation spell. 

He thinks it was likely either the doing of one incredibly powerful mage or a group of mages, but there's really not much information to go off of. We decide to leave and try and find a better spot to post up for the night, most likely the [[Quiet Place]].

![[session12_map1.webp|1097]]

Kat sees some kind of auction platform and a crowd gathered as an auctioneer is auctioning off amounts of electricity for people's homes.

She can't tell if the auctioneer has any sort of affiliation from this distance.

Malcolm wakes up and starts complaining about a hole in his head.

We examine the hole and it looks like something chewed through it. We can see exposed brain matter but nothing extra appears to be in the hole that we could see.

We start shitting on him for being the reason we lost Max.

Malcolm says "can you do *this?*" and casts a spell and starts flying. Silas tries to recognize the magic he's using since we don't know Malcolm to be a sorcerer like Gideon is. It seems like Malcolm is using some kind of mental/wizard-y casting ability. 

We assume it has something to do with the hole in his head. Something must be in his brain. Yikes.

Kat tries and fails to grab him and Malcolm keeps rising. 

Keena tries to intimidate Malcolm into coming down by saying she'll shove Morronel so far up his ass that he'll puke him out.

Malcolm only rises further and pisses himself.

He calls Gideon, who tells him to think about falling.  He says he's doing that and then just shoots westward across the sky. Gideon tells him to think about relaxing in bed but the call drops. Welp. Hope that doesn't go horribly wrong. 

Dorian brings up that the Penthouse might have magical beds where we could long rest for a night, but it's too far for us to get there tonight.

After examining the map, we realize we might actually be able to get back to [[Hood Station]] without having to spend another night here in the [[BB Megatower|Megatower]]

Gideon gets a text from Malcolm from in front of the [[Morrgen's Community Center]]. Apparently he made it back pretty fast.

Kat checks to see if we're being followed and spots another drone, hanging back out of the range of most spells.

We start the drive back to [[Hood Station]].

There's a bunch of exploded cars blocking the door ahead of us and hear machine gun fire. 

We see a bunch of what looks like [[Ghosts of the Flooded Zone|Ghosts]] unloading into an armored weapon transport, where a driver seems to be the only survivor on that side.

The Ghosts are led by this person.

![[npc_ghostsquadleader.webp|556]]

We (and a bunch of bystanders) are just staying on the edges, waiting it out. We simply can't fight in this condition.

We see the leader go up to the back door of the transport and blows it with a shaped charge. They pull a van up to the armored vehicle and load it up with weapon crates and drive away.

The road is cleared and traffic starts to flow again. We continue on our way.

About an hour into the drive, Gideon gets a video call from Malcolm.

He's shaking, with blood smeared across his face, holding a knife.

The camera pans and Gideon sees the bloody corpse of his father. Malcolm says he doesn't know what's happening and begs for help. An [[Enforcers|Enforcer]] team bursts into their home and tackles Malcolm. The enforcers knock him unconscious and the call cuts out.

We pull into Hood Station about 30 minutes later. We see a large enforcer aerostatic vehicle pulling away, heading east towards the courthouses.

We rush to the [[Morrgen's Community Center|Community Center]]. [[Morrgen Oublier|Morrgen]] is sitting on the stairs, face in her hands, sobbing.

She can't talk and Gideon just hugs her.

She says "they took Malcolm" and Gideon says "good."

Gideon asks  what happened and she says he killed his father. Gideon asks why but she doesn't know. She wasn't there and found out from the enforcers.

No one knows who called the enforcers. It seems like whoever put the hole in his head is covering their tracks.

Morggen and Gideon head to the Station House for a drink.

Morrgen asks what we've been doing and Gideon says all the party did was do quests from people at Hood Station but Malcolm's been borrowing money from bad people/the [[Bellanova Family|Bellanovas]].

Morggen orders Gideon a strawberry daiquiri and then 5 shots of whiskey for herself.

Gideon says he doesn't know much about the Bellanovas but this doesn't seem like their M.O. He thinks there's something else going on, and Morrgen agrees. 

Morggen asks if he'll be safe with his friends and he says yeah but it sounds like she's leaving.

Apparently she has to leave Hood Station for a while to talk to some people. She tells Gideon she'll probably be back, but if not, he'll need to take care of himself from now on. She'll call at least.

She leaves Gideon in the Station House and calls us over. She lets the rest of the know about her plans.

Silas asks if she has a will and she says there's not much to inherit.

She does tell us she'll keep a log on her personal recorder of her activities and has it set to be sent to Gideon and Kat if anything happens to her.

After an emotional goodbye with Kat where she makes her promise to take care of Gideon, Morrgen leaves.

Gideon's dad's body is being taken out of the Community Center as we approach.

He decides he's going to keep staying at the community center and Kat says she'll stay with him.

He looks around and sees the security system, with apparent video of the murder already up and paused.

Gideon steels himself and hits play.

It shows a still flying Malcolm crashing through front door, stumbling. Their father comes down and is helping Malcolm up. They're catching up and hug, and then their dad goes to the liquor cabinet, starting to prepare drinks. Malcolm starts gripping his head at the temple. We see some kind of movement coming from the hole - his brain matter almost seems to be coming out. Then he goes still and stares at his father. Then grabs a knife and almost in a trancelike state walks to him and stabs over and over and over, long after his father is dead. A few minutes pass and he falls unconscious. After 30 minutes or so, he wakes up and calls Gideon - we know the rest.

Gideon goes to their old shared room and stares into it before falling into his old bed and starting to cry.

Kat awkwardly tries to comfort him.

Gideon looks up from where he's laying on the bottom bunk and sees "Gideon sucks" carved into the bed from above him.

He asks Kat to leave and she obliges, posting up just outside the door. Gideon just starts throwing spells around the room at Malcolm's stuff. Kat lets it go on.

Silas goes to the door, gesturing to Kat to let him in. She does, but stays ready to yank him out if need be.

Silas goes and sits on the bed next to him.

Gideon says the vibe isn't the same now.

"Are you sure after today that more destruction is going to be what you want?"

"Only everything to do with Malcolm."

He asks if Gideon ever made a mistake and he said no at first but after some gentle prodding he admits he made some, but his parents would help him. Then Silas asks if Malcolm ever made mistakes, and if his parents ever cared about it. Gideon says no, his mom never cared, but Malcolm was always hanging out with his dad and he doesn't know what happened with his dad.

Silas tries to reframe that Malcolm is something of a victim here, and maybe it's not his fault that he's been such an asshole, and maybe he agreed to something that he shouldn't have out of jealousy. 

Gideon's elemental rage begins to subside.

Silas explains he doesn't want Gideon to feel regret and that maybe he should try being nice to Malcolm for one.

Gideon says he's going to need Silas to be there since next time he sees Malcolm he'll probably fly into a rage.

Kat's impressed with how Silas calmed Gideon down and he says it sound like she needs to learn it herself. She asks if he can just lay off for once and he says yep, but then adds "no pressure."

Keena goes in to talk to Gideon and tells him after her brother died, her uncle taught her how to fight and it helped her deal with her anger. She offers to teach him the same.

As she leaves, she offers Kat that she'll come back in the morning, and that Kat and Gideon are welcome to stay at the dojo stay anytime. Kat awkwardly thanks her.

We go to turn in the quests we completed at the Megatower.

[[Ren Calder]] comes out of [[The Redacted]] and talks to us, giving us our reward for the [[The Silent Floor|job]] (which he saw us complete on [[Jack Mercer]]'s channel) and asks where Max is. Everyone kind of mumbles that Max is off on a job and can tell him about it when he gets back.

As we walk towards the [[The Troupe|Stage]], Dorian signs to Silas that he has something to show him later tonight, and Silas signs back that they'll meet up in the usual spot.

When we get to the stage we see the [[The Troupe|Troupe]] is preparing scenery props for some kind of historical production.

We turn in their [[Penthouse Signal Rehearsal|quest]] and [[Az]] throws in an extra 10 platinum for getting the data stick with the files.

Keena asks Az if he knows about Red Thunder and he goes "yeah you want some?"

She asks about the guy who makes it and he says the chef is a big green ogre, cool guy.

Dorian buys some laudanum from Az.

We head off to the [[Iron Form Dojo|Dojo]]. Inside, we see [[Cillian Ward]] as well as [[Kairo Voss]] and [[Nyra Lightwell|Nyra]]. Cillian comes over and notes how bad the party looks.

![[location_hoodstation_ironformdojo.webp|1089]]

![[npc_kairovoss.webp|514]]

![[npc_nyralightwell.webp|516]]


We let him know we [[Elevator Eulogy|fixed the elevator]] and he gives us our reward.

Keena pitches a lot of money into the family fund and he tells her she doesn't have to kick everything in herself.

He casts a free lesser restoration on her, removing one level of exhaustion for her generosity.

Keena confirms with Cillian that Kat and Gideon can stay at the Dojo if they want.

She asks him if he thinks glasses could keeps someone from being recognized and he says mayyyybe if they were hypnoglasses.

We settle in for some downtime.

Dorian reveals to Silas that his last name is actually Delavide, not Caldwell, and that Custis Delavide (the man who killed his parents) is actually his uncle.

Custis had Dorian's parents killed and tried to kill Dorian once he turned 18 to disenfranchise him from his inheritance. 

# Winter 12 - 19, 2012  --  Downtime

As they talk, we all see a TV broadcast. It's a news report warning of escalation of attacks in the [[Cloud District]] from the [[Ghosts of the Flooded Zone|Ghosts]]. The escalations are getting increasingly closer to Hood Station.

Silas asks Dorian if the enforcers could know about him. Dorian says he can only hope Custis thinks he's dead. Silas says he thinks it'd probably be fine if he told the party his last name.

Kat trains Land Vehicles and is now proficient.

Silas trains Tinkers Tools and is now proficient.

Dorian does crime.

Keena does research on her vision of the [[Ozwin Wicker|beggar]], looking for his name and what happened to his tongue. She finds an article on a man named [[Ozwin Wicker]] and a story (unattached to a name) that refers to a "defiler" that broke in and mutilated the tongue of priest of Morronel. It was suggested that the attack was religiously motivated.

Gideon does research on what might have happened to his brother and finds an article about Titan Corp doing something with mind controlling parasites?

At the end of the week, the quest board doesn't currently have anything.

Also during her downtime, Kat gets [[Kieran Graves]] and his family moved into Hood Station and settled in temp dwellings.

As we meet back up after the week is out to decide our next move,  a submersible craft comes up into Hood Station from one of the underwater tunnels, and armed [[Ghosts of the Flooded Zone|Ghosts]] led by the individual from before begin to ransack everything in sight..
