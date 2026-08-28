---
dg-publish: true
type: npc
aliases:
  - Jack
cover: "[[npc_jackmercer.webp]]"
created: 2026-06-22
modified: 2026-08-28
disposition:
  - neutral
  - friendly
  - unknown
organizations:
associates:
brief: A popular Oogtuber who collects rare media and comic books
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_JackMercer.webp]]

# Description

A popular Oogtuber who collects rare media and comic books.  [[Gideon Oublier|Gideon]] is a fan. 

### Notes

- We found him beaten and robbed on [[Tier 2]] of the [[BB Megatower]]
- He was tracking cursed video game that might be related to [[The Silent Floor]]
- We recovered his tracking device from the [[West Valence Saints|Saints]] that stole it and used it to find the [[Quiet Place]].
- Jack gave Max [[Maximilius Adkins|Max]] his camera and waited outside to keep us from being blocked in while we entered to search for the video game
- The party accepted Jack's offer to "take care of" our Saint hostages, but regretted it after realizing he murdered them

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
