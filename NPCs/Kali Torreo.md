---
dg-publish: true
type: npc
aliases:
  - Kali
  - Commander Torreo
cover: "[[npc_kalitorreo.webp]]"
created: 2026-05-25
modified: 2026-08-03
disposition:
  - unknown
organizations:
  - "[[Ghosts of the Flooded Zone]]"
associates:
  - "[[Silas Sorelli|Silas]]"
  - "[[Vinnie Brassjaw|Brassjaw]]"
brief: Silas's childhood friend who joined the Ghosts of the Flooded Zone
tags:
status:
  - alive
locations:
  - "[[Flooded Zone]]"
---

![[npc_KaliTorreo.webp]]

# Description

Silas's childhood friend who joined the [[Ghosts of the Flooded Zone]].

### Notes

- At the [[BB Megatower]] we steal documents from a [[Ghosts of the Flooded Zone|Ghosts]] van that reference the battle plans of a "Commander Torreo"
- After he asked "Commander Torreo" is likely Kali, Silas asked [[Vinnie Brassjaw|Brassjaw]] to arrange a meeting. It's a no until we build more trust.
- Max saw a figure he later realized was Kali breaking into an abandoned building in [[Hood Station]] with a group of Ghosts.
- At the [[Wharf]] we saw a "Wanted" poster for Kali and 

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
