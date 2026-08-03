---
dg-publish: true
type: npc
aliases:
  - Kairo
cover: "[[npc_kairovoss.webp]]"
created: 2026-05-08
modified: 2026-08-03
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Iron Form Dojo]]"
associates:
  - "[[Keena O'Malley|Keena]]"
  - "[[Katriel Buchanon|Kat]]"
  - "[[Nyra Lightwell|Nyra]]"
brief: Keena's friend, who both works out and attends church sessions at the Iron Form Dojo. Also friendly with Kat. They/them
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_KairoVoss.webp|400]]

# Description

Keena's friend, who both works out and attends church sessions at the Iron Form Dojo. Also friendly with Kat.


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
