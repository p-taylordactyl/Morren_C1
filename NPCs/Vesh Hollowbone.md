---
dg-publish: true
type: npc
aliases:
  - Vesh
cover: "[[npc_veshhollowbone.webp]]"
created: 2026-05-21
modified: 2026-08-03
disposition:
  - friendly
organizations:
associates:
brief: A tiefling encountered in the Bone Culvert who died helping the party disrupt an undead ritual.
tags:
status: deceased
locations:
  - "[[Not Far Sewer]]"
  - "[[Bone Culvert]]"
---

![[npc_veshhollowbone.webp]]

# Description

A tiefling encountered in the [[Bone Culvert]] who died helping the party disrupt an undead ritual.


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
