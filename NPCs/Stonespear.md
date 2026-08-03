---
dg-publish: true
type: npc
aliases:
cover: "[[npc_stonespear.webp]]"
created: 2026-07-06
modified: 2026-08-03
disposition:
  - friendly
organizations:
associates:
brief: A huge man who Kat helped rob an ATM outside the Quiet Place
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Quiet Place]]"
---

![[npc_Stonespear.webp|htall]]

# Description

A huge man we found bonking the shit out of an ATM outside the [[Quiet Place]] after escaping the cursed Hamlet Keeper game. [[Katriel Buchanon|Kat]] helped him rob the [[Cael Foundation]] ATM by hacking it, mostly so the bonking would stop. 

### Notes

- Per Stonespear he will contact Kat to do crime together again in the future and rather than getting her phone number, he will find her by scent

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
