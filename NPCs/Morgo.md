---
dg-publish: true
type: npc
aliases:
  - the chef
cover: "[[placeholder2.webp]]"
created: 2026-07-06
modified: 2026-08-03
disposition:
  - enemy
  - unfriendly
  - neutral
  - friendly
  - ally
  - unknown
organizations:
associates:
  - "[[Orgo]]"
brief: The "chef" who makes the drug known as Red Thunder
tags:
status:
locations:
  - "[[BB Megatower]]"
  - "[[Tier 3]]"
  - "[[The Kitchen]]"
---

![[npc_Morgo.webp]]

# Description

The "chef" who makes the drug known as Red Thunder. Supposedly can be found on [[Tier 3]] of the [[BB Megatower]] in a place called the [[The Kitchen]].

### Notes

- learned about him from a Red Thunder addict named [[Orgo]]
- [[Keena O'Malley|Keena]] very badly wants to [[Keena O'Malley#Candle Vision|"candle"]] him

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
