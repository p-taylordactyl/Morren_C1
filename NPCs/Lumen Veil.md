---
dg-publish: true
type: npc
aliases:
  - Lumen
cover: "[[npc_lumenveil.webp]]"
created: 2026-05-04
modified: 2026-08-03
disposition:
  - friendly
organizations:
  - "[[Cael Foundation]]"
associates:
brief: A superhero with the Cael Foundation, powered by his Lumenite suit
tags:
status:
  - alive
locations:
---

![[npc_LumenVeil.webp]]

# Description

A superhero with the [[Cael Foundation]], powered by a custom suit made of Lumenite. 

### Notes

- [[Gideon Oublier|Gideon]] and [[Dorian Caldwell|Dorian]] saved his life in the [[Not Far Sewer]] and gave him directions to the [[Sludge Farm]]
- his suit will explode if removed by anyone other than himself - even after death
- he gifted us a car to thank us for helping him in the sewer

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
