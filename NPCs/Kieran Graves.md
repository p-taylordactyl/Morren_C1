---
dg-publish: true
type: npc
aliases:
  - Kieran
cover: "[[npc_kierangraves.webp]]"
created: 2026-06-22
modified: 2026-08-03
disposition:
  - friendly
organizations:
  - "[[West Valence Saints]]"
associates:
brief: Former Saint who failed his initiation into the Lightning Crew
tags:
status:
  - alive
locations:
  - "[[Westreach]]"
---

![[npc_kierangraves.webp]]

# Description

Former [[West Valence Saints|Saint]] ([[Lightning Crew]]) who failed his initiation in the [[BB Megatower]] by refusing to kill a badly beaten [[Jax Riven]].

### Notes

- fought with the party against the [[West Valence Saints|Saints]] after [[Katriel Buchanon|Kat]] interrupted his initiation
- was okay with us handing the defeated crew over to the [[Enforcers]] as long as we could help protect his family. Kat offered them a place at [[Hood Station]]
- exchanged numbers with Kat so she can help coordinate getting his family out of [[Westreach]] before the [[West Valence Saints|Saints]] find out what happened

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
