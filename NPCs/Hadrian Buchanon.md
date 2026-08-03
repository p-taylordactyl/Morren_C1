---
dg-publish: true
type: npc
aliases:
  - Hadrian
cover: "[[placeholder2.webp]]"
created: 2026-04-23
modified: 2026-08-03
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
