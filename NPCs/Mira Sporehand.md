---
dg-publish: true
type: npc
aliases:
  - Mira
cover: "[[npc_mirasporehand.webp]]"
created: 2026-04-27
modified: 2026-08-03
disposition:
  - friendly
organizations:
  - "[[Sludge Farmers]]"
associates:
brief: Our primary contact with the Sludge Farmers
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Sludge Farm]]"
---
![[npc_mirasporehand.webp|400]]

# Description

Elfin farmer at the [[Sludge Farm]]. Friendly and generous, even before she found out [[Katriel Buchanon|Kat]] used to be in the [[West Valence Saints|Saints]]. Knows how to milk a giant toad.

# Notes

- Agreed to move the Sludge Farm to [[Hood Station]] after the next harvest 
- first person to mention the [[NPCs/The Driftwarden]]

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
