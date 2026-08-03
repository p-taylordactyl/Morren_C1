---
dg-publish: true
type: npc
aliases:
  - Leroy
cover: "[[placeholder2.webp]]"
created: 2026-06-29
modified: 2026-08-03
disposition:
  - enemy
  - unfriendly
organizations:
  - "[[West Valence Saints]]"
  - "[[Lightning Crew]]"
associates:
  - Jerry
brief: Leader of the Lightning Crew of the West Valence Saints.
tags:
status:
  - alive
locations:
---

![[npc_LightningLeroy.webp]]

# Description

Leader of the [[Lightning Crew|Lightning Crew]] of [[West Valence Saints]].

### Notes

- party learned of Leroy's existence from Jerry, a Lightning Crew acolyte we captured and interrogated

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
