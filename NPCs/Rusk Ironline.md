---
dg-publish: true
type: npc
aliases:
  - Rusk
cover: "[[npc_ruskironline.webp]]"
created: 2026-07-06
modified: 2026-08-28
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
