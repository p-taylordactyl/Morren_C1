---
dg-publish: true
type: npc
aliases:
  - Solomon
  - Hexley
cover: "[[npc_solomonhexley.webp]]"
created: 2026-06-29
modified: 2026-08-03
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
