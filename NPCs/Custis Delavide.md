---
dg-publish: true
type: npc
aliases:
  - Custis
cover: "[[placeholder2.webp]]"
created: 2026-05-25
modified: 2026-08-03
disposition:
  - enemy
organizations:
  - "[[Oligarchs]]"
associates:
brief: The oligarch who had Dorian's parents murdered
tags:
status:
  - unknown
locations:
  - unknown
---

![[npc_CustisDelavide.webp]]

# Description

The [[Oligarchs|Oligarch]] who had [[Dorian Caldwell|Dorian]]'s parents murdered.

### Notes

- Dorian has revealed to [[Silas Sorelli|Silas]]  and [[Maximilius Adkins|Max]] that Custis is actually his uncle, who tried to kill him shortly after he turned 18

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

