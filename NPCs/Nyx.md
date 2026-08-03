---
dg-publish: true
type: npc
aliases:
cover: "[[npc_nyx.webp]]"
created: 2026-07-08
modified: 2026-08-03
disposition:
  - friendly
organizations:
associates:
  - "[[Styx]]"
brief: A tiefling woman searching for her missing brother, Styx
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
  - "[[Quiet Place]]"
---

![[npc_Nyx.webp]]

# Description

A tiefling woman who held a Cursed Hamlet Keeper tournament event to try and attract gamers who could beat the cursed copy and help find her brother. This got all parties involved trapped in the cursed game, where real-world combat skills matter much more than gaming skills. She and the other trapped people were rescued by the party when they defeated the game as part of their quest [[The Silent Floor]].

### Notes

- The party has agreed to help Nyx continue rescuing people from the other games so that she doesn't get more innocent people trapped during her search
- [[Dorian Caldwell|Dorian]] has made an agreement with her to purchase the (formerly?) cursed copy of OG Hamlet Keeper

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
