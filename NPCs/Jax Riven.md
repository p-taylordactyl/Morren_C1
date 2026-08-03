---
dg-publish: true
type: npc
aliases:
  - Jax
cover: "[[npc_jaxriven.webp]]"
created: 2026-06-22
modified: 2026-08-03
disposition:
  - neutral
  - friendly
organizations:
associates:
brief: Courier in the BB Megatower
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_JaxRiven.webp]]

# Description

Courier working in the [[BB Megatower]]. Specializes in navigating collapsed sections. 

### Notes

- first met super briefly outside of Krystal's when he fell through the ceiling and then immediately grappled away
- got his grappling hook at the [[Infinity Plaza Mall]]
- Later on [[Tier 2]] of the Megatower, the party rescued him from being killed by a group of [[West Valence Saints|Saints]] from the [[Lightning Crew]]

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
