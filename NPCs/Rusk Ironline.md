---
dg-publish: true
type: npc
aliases:
  - Rusk
cover: "[[npc_ruskironline.webp]]"
created: 2026-07-06
modified: 2026-08-03
disposition:
  - neutral
organizations:
  - "[[Bellanova Family]]"
associates:
brief: Dwarf who runs Pipe Junction for the Bellanovas
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Pipe Junction]]"
---

![[npc_ruskironline.webp]]

# Description

Dwarf who runs [[Pipe Junction]] for the [[Bellanova Family|Bellanovas]].

### Notes

- allowed the party to use the computer terminal at Pipe Junction in order to disable the forcefield blocking the [[Filter Shrine]] after we namedropped [[Prospera Bellanova]] and he couldn't immediately confirm
- notably the terminal was also full of beastiality porn
- probably won't be happy to see us next time assuming he's found out we lied to him

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
