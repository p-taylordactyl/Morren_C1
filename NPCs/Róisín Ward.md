---
dg-publish: true
type: npc
aliases:
  - Róisín
cover: "[[npc_róisínward.webp]]"
created: 2026-05-21
modified: 2026-08-03
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Cillian Ward|Cillian]]"
  - "[[Vinnie Brassjaw|Brassjaw]]"
brief: Keena's cousin, who lost an arm in a Titan Corporation accident.
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
  - "[[BB Megatower]]"
---

![[npc_róisínward.webp|400]]

# Description

[[Keena O'Malley|Keena]]'s cousin, who lost an arm in a [[Titan Corporation]] accident.

### Notes

- Keena and [[Maximilius Adkins|Max]] investigated the accident that cost Róisín her arm and found it was caused and covered up by [[Augustin Devereaux]], who they subsequently interrogated and beat into a coma
- We ran into her at the [[BB Megatower]] seemingly being supplied drugs by [[Vinnie Brassjaw|Brassjaw]] 
- When confronted by Keena, she said it was her best way to make money/support the family now

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
