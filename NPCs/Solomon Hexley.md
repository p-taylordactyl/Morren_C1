---
dg-publish: true
type: npc
aliases:
  - Solomon
  - Hexley
cover: "[[npc_solomonhexley.webp]]"
created: 2026-06-29
modified: 2026-08-28
disposition:
  - unfriendly
  - neutral
  - friendly
  - unknown
organizations:
associates:
  - "[[Silas Sorelli|Silas]]"
brief: The original owner of Silas's spellbook
tags:
status:
  - alive
locations:
---

![[npc_solomonhexley.webp|589]]

# Description

When [[Silas Sorelli]] was first studying wizardry, he couldn't afford a spellbook and thus stole one from Solomon. 

Solomon has spent the intervening years tracking Silas down to extract restitution in one form or another. 

### Notes

- first found Silas/the party in the [[BB Megatower]] outside of the Quiet Place. After a brief scuffle, we paid him off with a bottle of wine that Dorian passed off as much more expensive than its true value. We'll likely be seeing Solomon again.

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
