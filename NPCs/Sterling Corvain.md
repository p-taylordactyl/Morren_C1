---
dg-publish: true
type: npc
aliases:
  - stalker
  - Stalker
  - Mystery Burger Man
cover: "[[npc_mysteryburgerman.webp]]"
created: 2026-06-22
modified: 2026-08-28
disposition:
  - enemy
organizations:
  - "[[Titan Corporation]]"
associates:
  - "[[Augustin Devereaux]]"
brief: A mysterious individual or group that keeps sending Gideon blackmail material against the party
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - unknown
tags:
  - merge_needed
---

![[npc_mysteryburgerman.webp]]


> [!info] 
> There were separate notes for the Stalker and Mystery Burger Man, who have been revealed to be the singular man known as Sterling Corvain. I half-decided to combine the notes but might split them back out again. Right now the contents of each note are pretty much stacked on top of each other with light edits. One day I'll fix it but if you're reading this, that day is not today.


# Description

Originally known as the Burger Man, a mysterious connoisseur of the various burgers available in the [[BB Megatower]], he is later revealed to be a [[Titan Corporation]] executive that's been stalking and blackmailing the party and specifically has it out for [[Maximilius Adkins|Max]] and [[Keena O'Malley|Keena]].

### Notes 

- 1st encountered (as himself in person and as our stalker over text) outside of [[Krystal's]] in the BB Megatower
- bestowed upon [[Silas Sorelli|Silas]] the title of "Burger Destroyer" but said he'd remember Silas's actual name
- 2nd encounter on [[Tier 2]] where he gifted a suspicious Max with a bag of chili cheese burgers
- Revealed to be the party's stalker after Max traded himself for [[Malcolm Oublier|Malcolm]]
- Tortured [[Maximilius Adkins|Max]] for 7 days using every damage type and healing him each day
- apparently lives in constant pain due to something he blames Max and Keena for
- not sure if he is related to [[Augustin Devereaux]] or if he somehow *is* Devereaux
- possibly put some kind of mind control tech/parasite into Malcolm's brain, forcing him to kill his/Gideon's father.

### Known Blackmail Material

- Kat/Max/Dorian/Keena talking [[Brug]] into attacking the [[Pumping Station]]
- Augustin Devereaux
- The party namedropping [[Prospera Bellanova]] at [[Pipe Junction]] 
- [[Katriel Buchanon|Kat]] whaling on the corpse of the final [[West Valence Saints|Saint]] in the first fight in the BB Megatower
- Max eating burgers (per Max, AI-generated)
- probably everything that's happened tbh

# Description

A mysterious individual or group that has been tracking/recording the party via a drone and keeps texting [[Gideon Oublier|Gideon]]'s phone with blackmail material

### Notes

- seems to have been recording the party since the initial venture into the [[Not Far Sewer]]
- kidnapped [[Malcolm Oublier]] from a casino and demands [[Keena O'Malley|Keena]] or [[Maximilius Adkins|Max]] in trade
- the party captured their drone outside the [[Quiet Place]] 



### Information Discovered

- affiliated with the [[Titan Corporation]]
- likely related in some way to [[Augustin Devereaux]]
- Holy shit, it's actually the [[Sterling Corvain]]

# Session Mentions

```dataviewjs
function toArray(val) {
  return Array.isArray(val) ? val : (val ? [val] : []);
}

function getDepth(link, listPaths) {
  if (!link || !link.path) return 0;
  let depth = 0;
  let current = dv.page(link.path);
  while (current && current.parent) {
    const parentLink = toArray(current.parent)[0];
    if (!parentLink || !parentLink.path || !listPaths.has(parentLink.path)) break;
    depth++;
    current = dv.page(parentLink.path);
  }
  return depth;
}

function buildLocationTree(locations) {
  const links = toArray(locations);
  const listPaths = new Set(links.filter(l => l && l.path).map(l => l.path));
  return links.map(l => ({ depth: getDepth(l, listPaths), text: l }));
}

function buildNestedList(items) {
  return items.map(item => {
    const indentPx = item.depth * 20;
    const bullet = item.depth === 0 ? "•" : "◦";
    return `<span style="display:inline-block; width:${indentPx}px;"></span>${bullet} ${item.text}`;
  }).join("<br>");
}

const inlinkPaths = toArray(dv.current().file.inlinks).map(l => l.path);

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates"
    && inlinkPaths.includes(p.file.path))
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Locations"],
  rows.map(p => [
    `${p.file.link}`,
    buildNestedList(buildLocationTree(p.locations))
  ])
);
```
