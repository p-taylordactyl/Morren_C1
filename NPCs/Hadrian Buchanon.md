---
dg-publish: true
type: npc
aliases:
  - Hadrian
cover: "[[placeholder2.webp]]"
created: 2026-04-23
modified: 2026-08-28
disposition:
  - unknown
organizations:
  - "[[West Valence Saints]]"
  - "[[Dominion Crew]]"
associates:
  - "[[Gorax]]"
brief: Kat's father and member of the Dominion Crew
tags:
status: unknown
locations:
  - unknown
---



# Description

Katriel was raised by her widowed father, [[Hadrian Buchanon]] in a militant religious sect of the [[West Valence Saints]] known as the [[Dominion Crew]], who practiced their own form of the Doctrine of Ordained Authority. They controlled only a handful of buildings, which were ruled with an iron fist, and more violence than was common with other crews. 

In addition to the normal Saints rules, the Dominion had their own additional rules to enforce control over their own members as well as their block.  Chief among these rules was to respect the hierarchy, starting with her father up the chain to the Dominion Crew leader, [[Gorax]]. Even the oligarchs, since they could overpower anyone they chose.


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
