---
dg-publish: true
aliases:
type: npc
cover: "[[npc_GarrickHolloway.webp]]"
created: 2026-08-03
modified: 2026-08-23
status:
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
locations:
  - "[[Deadwater Wharf]]"
  - "[[Hood Station]]"
associates:
  - "[[Dorian Caldwell|Dorian]]"
brief: A jeweler and old friend of Dorian's from his days in Ambition
tags:
  - under_construction
---
![[npc_GarrickHolloway.webp|400]]

# Description

A jeweler and old friend of [[Dorian Caldwell|Dorian's]] from his days in [[Ambition]]. Covered Dorian's ring in pewter for him. 

- generously made personal rings for each of the party members that originally met him in [[Session 15]]
- agreed to work as an enchanter for [[Hood Station]]

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
