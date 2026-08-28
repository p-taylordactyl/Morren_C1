---
dg-publish: true
type: npc
aliases:
  - Hera
cover: "[[npc_sisterhera.webp]]"
created: 2026-05-04
modified: 2026-08-28
disposition:
  - friendly
organizations:
  - Cult of the Machine God
associates:
brief: A priestess of the Machine God and only survivor at the Filter Shrine
tags:
status:
  - alive
locations:
  - "[[Filter Shrine]]"
---

![[npc_SisterHera.webp]]

# Description

A Priestess of the [[Cult of the Machine God|Machine God]] living in the [[Not Far Sewer]].We found Sister Hera cowering from crocodiles at the [[Filter Shrine]], her fellow devotees having all been killed already. We killed the crocs and she gratefully told us what was going on with the Filter, which seemed to have stopped working.


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
