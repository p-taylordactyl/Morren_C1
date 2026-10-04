---
dg-publish: false
type: session_note
created: 2026-09-28
modified: 2026-09-28
session_date: 09/28/2026
session_number: 20
players:
  - Jordan
  - Kuya
  - Matt
  - Taylor
missed:
paid:
level: "5"
ingame_start: 1/28/2012
ingame_finish:
locations:
  - "[[Deadwater Wharf]]"
  - "[[Dockrunner]]"
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


# Winter 28, 2012

We resume in combat with some corpos from the [[Delavide Corporation]].

[[Dorian Caldwell|Dorian]] and [[Keena O'Malley|Keena]] are bee-ed out and [[Gideon Oublier|Gideon]] is bee-ed in.

[[Katriel Buchanon|Kat]] takes more exhaustion and nearly dies saving [[Jonas]]. The other two hostages are killed in the crossfire.

Gideon fireballs the shit out of these guys, nearly killing all of them. 

With Jonas rescued, we flee, leaving the corpo remnants behind.

![[session20_combatescape.webp]]

As we escape, drop pods come in fast and furious. We were lucky to get out.

In the backseat of the car, Sharon and Jonas have a touching reunion. 

We discuss our next moves. 

Delavide is going to wipe out Jonas's town.

A Saint is about to kill Kat when a flag falls out of the sky, pinning his hand to the ground.  The Saint screams in agony and passes out.

The flag bears the symbol of Morronel.

No clue where it came from. Any hand that dropped it would have had to be invisible.

Kat and Gideon on watch.

Gideon chastises Kat for being thoughtless with her risk-taking. She explains to him why she does what she does.

Gideon gets a call from an unknown number and steps away to take it. Kat doesn't know it's an unknown number calling and doesn't follow. It's [[Morrgen Oublier|Morrgen]]. 

Gideon tells her what she did was a lot and he had told her he was trying to figure something out. She says they couldn't risk being followed, and not everything has been her choice anyway.

Gideon tells her we did a side mission for them delivering the Titan Corp guy.

Morrgen says she heard about him trying to meet with them and asks what he's trying to do. She wants to distance him from the Malefactors and that he shouldn't get any closer.

He says that as the son of a Malefactor he's as close as it gets. 

She says that's why it's even more important to distance himself but Gideon wants to join the same way Malcolm has.

She doesn't want this to be Gideon's life the way it now has to be hers and Malcolm's. 

Gideon says he doesn't understand. Everyone wants him to understand and he feels like he's just stuck in this scattered trash when all he wants is to be close to his family.

Morrgen asks if he wants to join the Malefactors to be close to his family again. Gideon says yes.

She asks for his location/coordinates. Gideon sends them.

She notes we're at [[Deadwater Wharf]] and says she has a contact there that needs to be smuggled out. Land won't work, but maybe sea or air - something that avoids checkpoints.

This one is personal. She didn't talk to him about it before but apparently Gideon's dad has died a number of times and his soul is weak. He needs something special this time and this contact knows how to get it. Super important to get him back to Hood Station.

Gideon asks how to recognize the contact and she has him send a pic of our car. She sends him the coordinates of the contact.

Our contact is bald.

Morrgen asks Gideon to bring her to the rest of the group.

He says he walked away and it'll be awkward so she says to just tell us instead. She needs to know where we stand on all this. She wants Gideon to have support in this and the Malefactors won't. At least Kat if not the full group. She tells Gideon again to tell the group everything.

Gideon takes a minute before going back to the party. It starts hitting him that he's been trying to get involved with this terrorist group just because his mom's in it.

Gideon passes this guy, who has some big anti-air missile on his shoulder.

![[npc_antiairguy.webp|459]]

Gideon tries to recognize him. The power armor is weird. There's a scratched-out crown symbol on his shoulder.

Gideon returns the group.

He tells us about the call from Morrgen. He does actually share pretty much everything and that his number one goal is just to see his family more.

As we discuss, a Crownlight Media aerostatic drone flies over the area. 

Suddenly, we see the anti-air guy pointing his gun at the Crownlight vehicle.

Max recognizes the power armor as that used by the Crownlight Media Enforcer Squad (AKA a paramilitary death squad), however the armor has been highly customized.

The party searches for cover and doesn't intervene.

This guy shoots the drone with a giant warhead that separates into a bunch of mini-rockets. 

The vehicle crashes into the streets, nearly hitting us but instead landing in front of us.

The guy equips a jetpack, flies down, and places a thermo charge on the hull that incinerates a hole into the hull. Weak survivors are crawling out, unable to fight. The "Hunter" pulls out some kind of scanner and starts scanning people. Anyone that scans red, he executes on the spot.

Suddenly the Hunter is thrown out of the vehicle, and another guy steps out in the same power armor, but this one is more in regulation.

The corpo one is about to land the killing blow when the Hunter's power armor basically locks, breaking the corpo guy's axe. He jiu jitsu's the guy down to the ground and snaps his neck. He goes back in the ship and resumes his murder spree.

The scanner turns green on the last man and the Hunter bound him. Balloon carried the guy up into the air and then an aerostatic vehicle zips by with a hook and takes him.

![[session20_map1.webp]]

As we drive towards the Dockrunner, we see a ton of graffiti. It seems to have been taken over by the Box Boys. The Harbormaster himself is tied up by the boots and dangling unconscious from a nearby crane. A bunch of Box Boys around are generally pillaging.

![[npc_deadwaterharbormaster.webp|533]]

Gideon pitches pretending to be King Pimp and telling them about the Crownlight deal to maybe clear some out, but there's hundreds of [[Box Boys]] on the boat.

Kat says it'd be perfect if we had Dorian to sneak off while we distracted them.

Silas says he could do it, so we agree that's the plan and head in.

We rolls up and Gideon explains.


![[npc_mayor.webp]]

The Mayor doesn't want to go but will pay Gideon 200 platinum if he helps he go plant a bomb under the stage at the meeting. 

He keeps putting her off and trying to flirt. He asks if she's been to a penthouse before and tries to flirt.

She asks how old he is and he says 140. She talks with her boys trying to math out the elf years and  Silas uses the moment to sneak to the bridge. He picks the lock with his thieves tools. He sees a data stick, terminal, and a weird barrel full of blue goo?

He focuses on the job first, trying to get the file off the computer. He's able to get in but does have to delete all the porn on the data stick. Net neutral though since some of the files he copies also have porn.

Suddenly a couple orcs come in. One eats some "cream" out of a fire extinguisher. Fortunately Silas is invisible. He drops it to cast disguise self as the Mayor and starts tapping his foot.

They turn to see her and say they were salvaging like she said and she tells them to leave and take the "cream" with them.

As the mayor, Silas walks over to scope out the vat. It has several labels, including "caustic", "radioactive," "wild magic" and pretty much every possible explosive.

Silas dumps one of his oil bottles and cleans it with prestidigitation.

He has to pop the top on the barrel to get at the contents. It's hermetically sealed. Silas uses knock.

The purple-bluish light hits him. His face starts to droop and melt a little. He feels himself start to wrinkle up like he's aging.

Silas now has what we're calling "barrel-itis"

He proceeds with scooping out a vial of liquid, failing a sleight of hand check in the process. A splash gets on his hand and burns a hole through his hand, giving him a level of exhaustion. 

He takes the data stick and sneaks out off the other end of the ship. He makes it back to the car and beeps the horn.

The mayor ultimately rejects Gideon. She says the problem is that by the time he's mature enough to handle her, he'll be dead. 

Gideon tries to convince her but takes the loss.

We get her name before we leave - it's Volmara.

We get back to the car to see Silas in rough shape.