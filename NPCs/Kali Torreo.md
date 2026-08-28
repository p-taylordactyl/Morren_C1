---
dg-publish: true
type: npc
aliases:
  - Kali
  - Commander Torreo
cover: "[[npc_kalitorreo.webp]]"
created: 2026-05-25
modified: 2026-08-28
disposition:
  - unknown
organizations:
  - "[[Ghosts of the Flooded Zone]]"
associates:
  - "[[Silas Sorelli|Silas]]"
  - "[[Vinnie Brassjaw|Brassjaw]]"
brief: Silas's childhood friend who joined the Ghosts of the Flooded Zone
tags:
status:
  - alive
locations:
  - "[[Flooded Zone]]"
---

![[npc_KaliTorreo.webp]]

# Description

Silas's childhood friend who joined the [[Ghosts of the Flooded Zone]].

### Notes

- At the [[BB Megatower]] we steal documents from a [[Ghosts of the Flooded Zone|Ghosts]] van that reference the battle plans of a "Commander Torreo"
- After he asked "Commander Torreo" is likely Kali, Silas asked [[Vinnie Brassjaw|Brassjaw]] to arrange a meeting. It's a no until we build more trust.
- Max saw a figure he later realized was Kali breaking into an abandoned building in [[Hood Station]] with a group of Ghosts.
- At the [[Wharf]] we saw a "Wanted" poster for Kali and 

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
