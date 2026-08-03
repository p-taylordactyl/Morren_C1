---
dg-publish: true
type: npc
aliases:
cover: "[[npc_stu.webp]]"
created: 2026-07-09
modified: 2026-08-03
disposition:
  - unfriendly
  - neutral
organizations:
associates:
  - "[[Sterling Corvain]]"
  - "[[Sterling Corvain]]"
brief: A hired thug working for the Stalker
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Ransom Location]]"
---

![[npc_Stu.webp]]

# Description

A hired thug working for the Stalker.

# Notes

- Stu isn't his real name, but rather a fake name he gives at [[Maximilius Adkins|Max]]'s request
- Never turns down a hug

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
