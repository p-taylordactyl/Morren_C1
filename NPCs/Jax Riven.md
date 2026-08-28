---
dg-publish: true
type: npc
aliases:
  - Jax
cover: "[[npc_jaxriven.webp]]"
created: 2026-06-22
modified: 2026-08-28
disposition:
  - neutral
  - friendly
organizations:
associates:
brief: Courier in the BB Megatower
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_JaxRiven.webp]]

# Description

Courier working in the [[BB Megatower]]. Specializes in navigating collapsed sections. 

### Notes

- first met super briefly outside of Krystal's when he fell through the ceiling and then immediately grappled away
- got his grappling hook at the [[Infinity Plaza Mall]]
- Later on [[Tier 2]] of the Megatower, the party rescued him from being killed by a group of [[West Valence Saints|Saints]] from the [[Lightning Crew]]

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
