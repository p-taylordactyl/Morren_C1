---
dg-publish: true
aliases:
  - Old Guard
  - Guard
type: underground faction
cover: "[[faction_oldguard.webp]]"
created: 2026-04-23
modified: 2026-08-28
associations:
locations:
  - "[[The Old Fort]]"
tags:
---

![[faction_oldguard.webp||banner p+t]]


# Description

The Old Guard is a militant gang that occupies a ruined fortification dating back to the final phase of the Corporate Wars. The structure was once a regional command bastion used to coordinate corporate security forces, logistics routes, and emergency response operations across [[Old Valence]]. When the wars ended and Valence consolidated control, the fort was deemed strategically redundant and quietly abandoned, along with its remaining personnel and infrastructure.

Rather than dispersing, a number of soldiers, contractors, and support staff remained behind. Some were unwilling to return to civilian life, others were cut off from relocation programs, and many simply refused to accept the authority of the new order. Over time, these holdouts formed the nucleus of what would become the Old Guard.

The Old Guard adheres to an outdated military doctrine known as the Guard Code, a Pre-Valencian operational framework built around territorial defense, hierarchical command, and ideological loyalty to the institution of military authority itself. The Guard Code is no longer recognized by any existing power structure in Morren, but within the fort it is treated as binding law. Members operate under formal ranks, conduct daily drills, and follow ceremonial protocols copied from archived training manuals and decaying command terminals.

Their appearance reflects this ideological fossilization. The Old Guard wears repaired and modified uniforms from the Corporate Wars era, including obsolete armor patterns, faded insignia, and equipment bearing the marks of defunct corporations. Corporate logos are often scratched out or replaced with hand-painted Guard symbols, while medals and rank markers are worn with near-religious reverence regardless of whether they still carry any real meaning.

Despite their rigid structure, the Old Guard functions more like a territorial gang than a true military force. They control the surrounding ruins, charge tolls for passage, and engage in skirmishes with rival groups, scavengers, and corporate patrols. Their discipline gives them an edge over most street factions, but their refusal to modernize limits their strategic reach.

To outsiders, the Old Guard appears to be a relic pretending the war never ended. To its members, the war never did. The world simply lost the will to continue it properly.


# NPCs

```base
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  organization_names: organizations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Organization-embed
    filters:
      and:
        - formula.organization_names.contains("Old Guard")
    order:
      - file.name
      - brief
      - locations
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain
```



# Sessions Encountered

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
