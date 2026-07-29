---
dg-publish: true
type: session_note
created: 2026-06-01
modified: 2026-07-28
session_number: 6
session_date: 06/01/2026
players:
  - Alek
  - Cinna
  - Jordan
  - Matt
  - Taylor
missed:
paid: true
level: 2 > 3
ingame_start: 1/7/2012
ingame_finish: 1/8/2012
locations:
  - "[[Hood Station]]"
  - "[[BB Megatower]]"
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

[[Silas Sorelli|Silas]] pops back into existence in the garage as we're talking to [[Thorbin Sprake|Thorbin]]. As we're chatting, we hear a newscast on the TV that says the [[Box Boys|Box Boys]] have attacked the [[Pumping Station]] and taken control from the [[Titan Corporation]].

![[session6_endlinegarage.webp|1077]]

We talk through our next moves. 

[[Maximilius Adkins|Max]] needs painter's supplies, a flute, or calligrapher's tools. [[Dorian Caldwell|Dorian]] would also like some painter's supplies. And [[Katriel Buchanon|Kat]] could use some tinker's tools. We decide we should turn in the rest of our quests before shopping, so we head to talk to [[Rosetta Thorne|Miss Rosie]] at the [[Protective Association for Wayward and Neglected Strays|orphanage]], and see if the dolls "count" as [[Voices in the Grates|finding the kids]].

![[location_hoodstation_pawns.webp|1088]]

When we get there, [[Rosetta Thorne|Miss Rosie]] appears to be asleep in the middle of the room. We manage to wake her, but she seems weird, almost glitchy. We tell her we're here to turn in her quest and she dismisses the orphans, before collapsing as a secret room behind a wall is revealed.

[[Katriel Buchanon|Kat]] doesn't want to go in the secret room, which is referred to as the "Punishment Room." 

As we approach the room, [[Rosetta Thorne|Rosetta]] reveals herself. It seems like "Miss Rosie" is some kind of simulacrum she uses to keep her real self hidden.

![[npc_rosettathorne.webp|370]]

She accepts the quest, pays us, and starts trying to kick us out.

Before we go, [[Keena O'Malley|Keena]] asks Rosetta about "the wicked" from her [[Keena O'Malley#Candle Vision|vision]] and if there's anyone specific around [[Hood Station]] or the [[BB Megatower]] that we might want to keep an eye out for. Rosetta says she takes care of any problematic elements around the Station, but calls the Tower, which is run by the [[Bellanova Family|Bellanovas]], a "hive of scum and villainy."

Keena does have to clarify that she won't be a hitman but Silas says he and Dorian will *definitely* take those kinds of missions.

Rosetta asks Silas how long he's been working with the party (outside of Dorian) and he says it's only been a few days, give or take. Hard to tell after his time in the bee dimension.

She thought he trusted them more and says she wouldn't have revealed herself if she'd realized. Silas downplays it and  implies that if we blab about her two forms, he won't stop Rosetta from doing whatever she needs to do about it.

Gideon pops back into existence and Silas and Kat hustle him out of the punishment room.

Gideon asks what he missed and we tell him about the car from [[Lumen Veil]]. Silas asks about that painting we picked up below the [[Pumping Station]]. Dorian shows us. Silas thinks it's young Miss Rosie and takes it back in the orphanage to ask her about it. 

After some mysterious discussion in which Rosie wants money for info, Dorian reveals that the painting is actually of his parents.

After some horny discussion about people's parents, we leave and head to the [[Morrgen's Community Center|Community Center]] to turn in [[The Bloom Below]].

![[location_hoodstation_communitycenter.webp|1088]]

Gideon gives [[Morrgen Oublier|Morrgen]] the earrings he bought her in the sewer. Keena specifically mentions that he's been a "good boy." Morrgen is pleased, and then starts asking if he's been doing anything "special" and he talks about exploding things better when he thinks about memories like they discussed. 

She pays us and then does a weird thing where she makes her eyes glow orange and looks us all over. She says we're all doing well except Max's soul is stunted. She's seen it before and says for a fee she can do a ritual to "borrow" the experiences of others as if they were his own. (Meta: for 100 gold per motif, we can transfer some motifs to Max to get him to 3 so we can level up - Jordan decided to just quickly enter some motifs during the break instead).

Kat and Morrgen chat about Gideon - Morrgen really wants him to give up the idea of being a hero. Kat is clearly on board with protecting him to a degree but says that his heroic urges are a consequence of her good parenting. 

Morrgen also asks if we can keep an eye out for Gideon's twin brother, [[Malcolm Oublier|Malcolm]] since she hasn't heard from him in a while.

We leave the Community Center and head to the Station for a long rest (and level up). We also do some shopping. Kat and Max pick up their commissioned backpacks. During the rest, Kat crafts herself a set of tinker's tools.

The next morning, Malcolm texts Gideon a selfie from the [[BB Megatower]] to taunt him and says he sucks. 

On our way out of the Station, we stop by [[The Troupe]] so Dorian can give [[Az]] some books he picked up in the hopes that they might be good material for plays.

![[location_hoodstation_thetroupe.webp|1088]]

Az pretends they can't read but immediately messes up the bit. They then offer us all drugs, which he reveals he makes himself. Max does a line of coke. Silas takes some sativa. Kat requests a regular nicotine cigarette but Az mixes things up and isn't really sure if they gave her a regular cigarette or one with cocaine in it. Keena doesn't try anything, and Kat explicitly forbids Gideon from trying any drugs.

As we're heading out, Az hands Silas some money. He intended it to be payment for Dorian for the books, but they misspoke, and instead Silas decides to distribute it amongst the party members who took drugs. 

![[session6_oldvalence.webp|1097]]

Off we go to the [[BB Megatower]]. 

![[session6_map1.webp|974]]

On our way in, Gideon texts Malcolm to ask where he is.

Off in the distance (farther POI) we see some kind of cobbled together dwelling made of old elevators.

As we make our way in, we see this [[Vinnie Brassjaw|goblin]] in a suit with a mechanical jaw speaking with a pink-haired human who notably only has one arm.

![[npc_vinniebrassjaw.webp|690]]

![[npc_róisínward.webp|687]]

The goblin hands her a package that seems like at least a kilo.

Keena recognizes the human as her cousin [[Róisín Ward|Róisín]].

We're parked around the corner and haven't been spotted. The suited goblin is flanked by several goons.

Keena waits for the goblin and his entourage to move off before approaching Róisín.

When Keena asks what she's doing Róisín basically tells her to mind her own business. Keena talks about trying to help the family and Róisín says the drug money is going to make the family way more money. 

Keena starts asking who she's selling to and bringing up the ethical concerns of selling drugs. Róisín won't give her answers but says she's only selling to people who'd be getting it elsewhere otherwise.

She says there's not much else she can do without an arm - Kat jumps in to say we can get her some kind of arm but Róisín says it wouldn't be good enough to get her job out. The kind of arm she needs is too expensive. She asks us to steal one. 

They continue arguing about whether Róisín needs to be doing this and the risks relative to what Keena's doing. They come ultimately agree to leave it for now and talk about it later at home.

Before Róisín leaves, Keena asks if she knows Az - she does and deals with him some. 

As we're creeping forward in line, a weird black van with tinted windows pulls up behind us before parking off to the side.

People with diving gear and gas masks get out, holding rifles. One is wearing big metallic exosuit. Silas identifies them as [[Ghosts of the Flooded Zone|Ghosts]]. They go to meet up with the goblin that sold drugs to Róisín, leaving only the driver behind with the car.

![[npc_ghostdriver.webp|587]]

Dorian seems very interested in trying to either slow them down and/or get more info about why they're here. We make a plan to distract the driver so Dorian can check out the van.

Kat crafts a tiny little air pump from scrap. Silas creates an unseen servant, who takes the air pump and uses it to blow one of the van's tires before hiding.

The driver doesn't find the unseen servant or detect foul play. He sets about replacing the tire, and we can see a dossier sitting on the dash where he left the door open. Silas casts invisibility on Dorian, who sneaks over and grabs the dossier. He looks around for any other loose valuables, finding 5 platinum in the dash before he sneaks back to the car.

Just after he's back in the car, the Ghosts come back out, loading crates into the van. Kat perceives. They look inconspicuous and intentionally ambiguous, but the crates are long and deep enough to store all kinds of things - drugs, weapons, or even people.

These crates could fit so many gnomes - a significant point of discussion. 

The Ghosts leave while we're discussing what to do.

Dorian pulls out the dossier. It's written in some kind of cipher. Not Thieves' Cant. Silas recognizes the code as an old corporate code that's fallen out of use. At first glance it seems to be a tactical overview of the "situation" in the [[Flooded Zone]]. It suggests the Ghosts were looking to purchase weapons, as well as that someone by the name of [[Kali Torreo|Commander Torreo]] is preparing for some kind of major conflict. We can find out more details if Silas takes the several hours needed to properly decode the file.

Silas suggests [[Róisín Ward|Róisín]] could be involved in weapons smuggling, but Keena doesn't think so.

We roll up to the elevator shaft parking lot area, where some truckers are complaining about the elevator on their way out.

We see the operator messing with the control panel and discuss the merits of Dorian threatening the elevator into submission, and what resources he might use now that he's out of dynamite. 

As we ponder whether ball bearings would an effective threat, an orc comes over and asks Dorian for his to see how many he can fit in his mouth. Dorian offers a platinum if this guy can fit all 1000 ball bearings in his mouth. He takes the deal and lays down to start cramming bearings into his mouth.

While he's working on that, Dorian goes over and threatens the elevator. Max and Keena stay to watch the orc while the rest go with Dorian. As soon as he finishes his threat, the floor opens up and we all fall down a weird metal slide. After a long fall, we find ourselves stuck in some kind of vent a little ways above a meeting that seems to be occurring below.

![[location_bbmegatower_krystals.webp|1059]]

We see [[Malcolm Oublier|Malcolm]] begging a group of [[Bellanova Family|Bellanovas]] for another week and to "tell Brassjaw it's cool" - he gets the one more week but then they're going to take his skin. They also threaten his family - [[Gideon Oublier|Gideon]] and [[Morrgen Oublier|Morrgen]] and their dad.

The Bellanovas leave and Malcolm slumps to the floor.

Gideon messages him from the vent and says "you fucking dumbass." He kicks the vent out which becomes a ladder we can use to climb down.

Meanwhile up top, the ball bearings forgotten, Keena and Max tries to decide what to do. Keena asks what to do about the car but Max just jumps down the shaft. She locks the car and asks the operator if we can leave it in the spot. He says she's good, so she joins us at the bottom of the shaft.

![[npc_malcolmoublier.webp|427]]


Turns out Malcolm's a little asshole. He borrowed money to buy a watch for he and [[Gideon Oublier|Gideon]]'s dad and then also borrowed more money to spend on OogCoin.

Malcolm borrowed 100 platinum - he spent 10 on the watch and 90 on the OogCoin, which now is only worth 45 platinum - not enough for him to pay back the Bellanovas.

Malcolm begs us not to tell their parents. He kicks Gideon in the nuts and tries to run, and Kat quickly catches and tackles him.