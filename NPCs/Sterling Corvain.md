---
dg-publish: true
type: npc
aliases:
  - stalker
  - Stalker
cover: "[[npc_mysteryburgerman.webp]]"
created: 2026-06-22
modified: 2026-08-03
disposition:
  - neutral
  - friendly
  - unknown
  - enemy
organizations:
  - "[[Titan Corporation]]"
associates:
  - "[[Sterling Corvain]]"
  - "[[Augustin Devereaux]]"
  - "[[Sterling Corvain]]"
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

function parseLocationTree(locations) {
  return toArray(locations).map(raw => {
    const str = raw.toString();
    const match = str.match(/^(>+)/);
    const depth = match ? match[1].length : 0;
    const text = match ? str.slice(match[1].length) : str;
    return { depth, text };
  });
}

function buildNestedList(items) {
  return items.map(item => {
    const indent = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(item.depth);
    const bullet = item.depth === 0 ? "•" : "◦";
    return `${indent}${bullet} ${item.text}`;
  }).join("<br>");
}

const currentPath = dv.current().file.path;
const inlinkPaths = toArray(dv.current().file.inlinks).map(l => l.path);

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates"
    && inlinkPaths.includes(p.file.path))
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Locations"],
  rows.map(p => [
    `${p.file.link}`,
    buildNestedList(parseLocationTree(p.locations))
  ])
);
```
