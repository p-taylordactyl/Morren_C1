---
dg-publish: true
type: npc
aliases:
cover: "[[npc_sprocket.webp]]"
created: 2026-04-27
modified: 2026-08-03
disposition:
  - neutral
  - friendly
organizations:
  - "[[Sewer Goblins]]"
associates:
brief: A goblin merchant in the bazaar located in the south section of the Not Far Sewer
status:
  - alive
locations:
  - "[[Not Far Sewer]]"
tags:
---

![[npc_sprocket.webp|400]]

# Description

A goblin merchant in the [[Floodgate Bazaar|bazaar]] located in the south section of the [[Not Far Sewer]]. Likes to party.



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
