---
dg-publish: true
type: npc
aliases:
  - Cillian
cover: "[[placeholder2.webp]]"
created: 2026-05-21
modified: 2026-08-28
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

function getDepth(link, listPaths) {
  if (!link || !link.path) return 0;
  let depth = 0;
  let current = dv.page(link.path);
  while (current && current.parent) {
    const parentLink = toArray(current.parent)[0];
    if (!parentLink || !parentLink.path || !listPaths.has(parentLink.path)) break;
    depth++;
    current = dv.page(parentLink.path);
  }
  return depth;
}

function buildLocationTree(locations) {
  const links = toArray(locations);
  const listPaths = new Set(links.filter(l => l && l.path).map(l => l.path));
  return links.map(l => ({ depth: getDepth(l, listPaths), text: l }));
}

function buildNestedList(items) {
  return items.map(item => {
    const indentPx = item.depth * 20;
    const bullet = item.depth === 0 ? "•" : "◦";
    return `<span style="display:inline-block; width:${indentPx}px;"></span>${bullet} ${item.text}`;
  }).join("<br>");
}

const inlinkPaths = toArray(dv.current().file.inlinks).map(l => l.path);

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates"
    && inlinkPaths.includes(p.file.path))
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Locations"],
  rows.map(p => [
    `${p.file.link}`,
    buildNestedList(buildLocationTree(p.locations))
  ])
);
```
