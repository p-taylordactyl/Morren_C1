---
dg-publish: true
type: npc
aliases:
  - Cillian
cover: "[[placeholder2.webp]]"
created: 2026-05-21
modified: 2026-08-03
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[The Redacted]]"
associates:
  - "[[Maximilius Adkins|Max]]"
brief: Max's friend and fellow member of The Redacted.
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---


# Description

One of the first people Max connected with through [[The Redacted]], both online and in person. They quickly recognized a shared mindset: a drive to expose the truth while still creating compelling, high-quality pieces. Before long, they began working together regularly, forming a natural partnership, Max as the front-facing voice and operator, and Cillian handling the technical side, keeping recordings clean, systems running, and operations stable behind the scenes.



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
