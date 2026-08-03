---
dg-publish: true
type: npc
aliases:
cover: "[[npc_paintbrushgnome.webp]]"
created: 2026-07-06
modified: 2026-08-03
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

function parseLocationTree(locations) {
  return toArray(locations).map(raw => {
    const str = raw.toString();
    const match = str.match(/^(>+)/);
    const depth = match ? match[1].length : 0;
    const text = match ? str.slice(match[1].length) : str;
    return { depth, text };
  });
}

function buildNestedList(items) {
  return items.map(item => {
    const indent = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(item.depth);
    const bullet = item.depth === 0 ? "•" : "◦";
    return `${indent}${bullet} ${item.text}`;
  }).join("<br>");
}

const currentPath = dv.current().file.path;
const inlinkPaths = toArray(dv.current().file.inlinks).map(l => l.path);

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates"
    && inlinkPaths.includes(p.file.path))
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Locations"],
  rows.map(p => [
    `${p.file.link}`,
    buildNestedList(parseLocationTree(p.locations))
  ])
);
```


