---
dg-publish: true
type: npc
aliases:
cover: "[[placeholder2.webp]]"
created: 2026-05-01
modified: 2026-08-03
disposition:
  - unknown
organizations:
associates:
  - "[[Mira Sporehand]]"
brief: Mysterious leader of an unknown group of people living in the Not Far Sewer
tags:
status:
  - unknown
locations:
  - "[[Not Far Sewer]]"
---



# Description

Mysterious leader of an unknown group of people living in the [[Not Far Sewer]]. Supposedly a kind and helpful figure who takes in lost souls. Some call him a myth, but [[Mira Sporehand]] at the [[Sludge Farm]] has apparently interacted with him/may know where to find him.


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
