---
dg-publish: true
type: npc
aliases:
  - the chef
cover: "[[placeholder2.webp]]"
created: 2026-07-06
modified: 2026-08-28
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
associates:
  - "[[Orgo]]"
brief: The "chef" who makes the drug known as Red Thunder
tags:
status:
locations:
  - "[[BB Megatower]]"
  - "[[Tier 3]]"
  - "[[The Kitchen]]"
---

![[npc_Morgo.webp]]

# Description

The "chef" who makes the drug known as Red Thunder. Supposedly can be found on [[Tier 3]] of the [[BB Megatower]] in a place called the [[The Kitchen]].

### Notes

- learned about him from a Red Thunder addict named [[Orgo]]
- [[Keena O'Malley|Keena]] very badly wants to [[Keena O'Malley#Candle Vision|"candle"]] him

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
