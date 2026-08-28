---
dg-publish: true
type: npc
aliases:
cover: "[[npc_nyx.webp]]"
created: 2026-07-08
modified: 2026-08-28
disposition:
  - friendly
organizations:
associates:
  - "[[Styx]]"
brief: A tiefling woman searching for her missing brother, Styx
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Quiet Place]]"
---

![[npc_Nyx.webp]]

# Description

A tiefling woman who held a Cursed Hamlet Keeper tournament event to try and attract gamers who could beat the cursed copy and help find her brother. This got all parties involved trapped in the cursed game, where real-world combat skills matter much more than gaming skills. She and the other trapped people were rescued by the party when they defeated the game as part of their quest [[The Silent Floor]].

### Notes

- The party has agreed to help Nyx continue rescuing people from the other games so that she doesn't get more innocent people trapped during her search
- [[Dorian Caldwell|Dorian]] has made an agreement with her to purchase the (formerly?) cursed copy of OG Hamlet Keeper

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
