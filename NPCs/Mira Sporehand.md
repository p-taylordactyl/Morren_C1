---
dg-publish: true
type: npc
aliases:
  - Mira
cover: "[[npc_mirasporehand.webp]]"
created: 2026-04-27
modified: 2026-08-28
disposition:
  - friendly
organizations:
  - "[[Sludge Farmers]]"
associates:
brief: Our primary contact with the Sludge Farmers
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Sludge Farm]]"
---
![[npc_mirasporehand.webp|400]]

# Description

Elfin farmer at the [[Sludge Farm]]. Friendly and generous, even before she found out [[Katriel Buchanon|Kat]] used to be in the [[West Valence Saints|Saints]]. Knows how to milk a giant toad.

# Notes

- Agreed to move the Sludge Farm to [[Hood Station]] after the next harvest 
- first person to mention the [[NPCs/The Driftwarden]]

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
