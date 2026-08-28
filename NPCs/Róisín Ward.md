---
dg-publish: true
type: npc
aliases:
  - Róisín
cover: "[[npc_róisínward.webp]]"
created: 2026-05-21
modified: 2026-08-28
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Cillian Ward|Cillian]]"
  - "[[Vinnie Brassjaw|Brassjaw]]"
brief: Keena's cousin, who lost an arm in a Titan Corporation accident.
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
  - "[[BB Megatower]]"
---

![[npc_róisínward.webp|400]]

# Description

[[Keena O'Malley|Keena]]'s cousin, who lost an arm in a [[Titan Corporation]] accident.

### Notes

- Keena and [[Maximilius Adkins|Max]] investigated the accident that cost Róisín her arm and found it was caused and covered up by [[Augustin Devereaux]], who they subsequently interrogated and beat into a coma
- We ran into her at the [[BB Megatower]] seemingly being supplied drugs by [[Vinnie Brassjaw|Brassjaw]] 
- When confronted by Keena, she said it was her best way to make money/support the family now

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
