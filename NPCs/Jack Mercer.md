---
dg-publish: true
type: npc
aliases:
  - Jack
cover: "[[npc_jackmercer.webp]]"
created: 2026-06-22
modified: 2026-08-03
disposition:
  - neutral
  - friendly
  - unknown
organizations:
associates:
brief: A popular Oogtuber who collects rare media and comic books
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
---

![[npc_JackMercer.webp]]

# Description

A popular Oogtuber who collects rare media and comic books.  [[Gideon Oublier|Gideon]] is a fan. 

### Notes

- We found him beaten and robbed on [[Tier 2]] of the [[BB Megatower]]
- He was tracking cursed video game that might be related to [[The Silent Floor]]
- We recovered his tracking device from the [[West Valence Saints|Saints]] that stole it and used it to find the [[Quiet Place]].
- Jack gave Max [[Maximilius Adkins|Max]] his camera and waited outside to keep us from being blocked in while we entered to search for the video game
- The party accepted Jack's offer to "take care of" our Saint hostages, but regretted it after realizing he murdered them

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
