---
dg-publish: true
type: npc
aliases:
cover: "[[npc_paintbrushgnome.webp]]"
created: 2026-07-06
modified: 2026-08-28
disposition:
  - unknown
organizations:
associates:
  - "[[Bron]]"
brief: Gnome trying to find his magic paintbrush
tags:
  - name-needed
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_PaintbrushGnome.webp]]

# Description

Gnome who jumped in front of the party's car on [[Tier 2]] of the [[BB Megatower]] to ask for help recovering his magic paintbrush

### Notes

- He claimed his paintbrush was stolen from him by [[Bron]] in the [[Neon Corridor]]
- vanished in front of our eyes and said we'll never see him again unless we find the paintbrush
- Per Brug, the paintbrush was freely given as collateral for an unpaid drug debt and he sold it
- Apparently we aren't the first people he's asked for help getting the paintbrush back
- It appears the paintbrush is now owned by the [[Animator]]

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


