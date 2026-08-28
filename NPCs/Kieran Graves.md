---
dg-publish: true
type: npc
aliases:
  - Kieran
cover: "[[npc_kierangraves.webp]]"
created: 2026-06-22
modified: 2026-08-28
disposition:
  - friendly
organizations:
  - "[[West Valence Saints]]"
associates:
brief: Former Saint who failed his initiation into the Lightning Crew
tags:
status:
  - alive
locations:
  - "[[Westreach]]"
---

![[npc_kierangraves.webp]]

# Description

Former [[West Valence Saints|Saint]] ([[Lightning Crew]]) who failed his initiation in the [[BB Megatower]] by refusing to kill a badly beaten [[Jax Riven]].

### Notes

- fought with the party against the [[West Valence Saints|Saints]] after [[Katriel Buchanon|Kat]] interrupted his initiation
- was okay with us handing the defeated crew over to the [[Enforcers]] as long as we could help protect his family. Kat offered them a place at [[Hood Station]]
- exchanged numbers with Kat so she can help coordinate getting his family out of [[Westreach]] before the [[West Valence Saints|Saints]] find out what happened

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
