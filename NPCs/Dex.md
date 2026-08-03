---
dg-publish: true
type: npc
aliases:
cover: "[[npc_dex.webp]]"
created: 2026-06-29
modified: 2026-08-03
disposition:
  - neutral
  - friendly
organizations:
  - "[[Cult of the Machine God]]"
associates:
  - "[[Arden]]"
  - "[[Faile]]"
brief: Adoptive son of a tech priest living at the Relay Shrine
tags:
status:
  - alive
locations:
  - "[[Relay Shrine]]"
---

![[npc_Dex.webp]]

# Description

Adoptive son of a tech priest living at the [[Relay Shrine]]. He's a big fan of some of [[Maximilius Adkins|Max]]'s content but unfortunately only has an attention span of about 7 seconds.

### Notes

- brainrot visuals help him focus on conversations
- threw a wrench at [[Keena O'Malley|Keena]]'s head (theoretically) on accident 
- almost blew up the shrine by pulling the broken lever

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
