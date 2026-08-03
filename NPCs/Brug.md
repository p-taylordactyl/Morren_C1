---
dg-publish: true
type: npc
aliases:
cover: "[[npc_brug.webp]]"
created: 2026-06-01
modified: 2026-08-03
disposition:
  - neutral
organizations:
  - "[[Box Boys]]"
associates:
brief: A member of the Box Boys we met in the Not Far Sewer
tags:
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
  - "[[Box City]]"
  - Incarcerated
---

![[npc_Brug.webp]]

# Description

A member of the [[Box Boys|Box Boys]] we saved from getting his ass kicked by a group of [[West Valence Saints|Saints]]. 

### Notes

- might get the Box Boys to help us with our [[Titan Corporation]] problem at the [[Pumping Station]]…assuming he actually makes it back to [[Box City]] alive and with his memory intact.
- Did in fact go through with taking over the [[Pumping Station]]

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
