---
dg-publish: true
aliases:
  - Machine God worshippers
  - Machine God
type: religious group
cover:
created: 2026-07-06
modified: 2026-08-23
parent:
associations:
locations:
  - "[[Filter Shrine]]"
  - "[[Relay Shrine]]"
tags:
---

# Description

People who worship the Machine God and tend to the Machine Spirits they believe live inside mechanical things. 

# Notes

- The Machine God prefers used mechanical components/offerings (such as used motor oil) to new

# NPCs

```base
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  organization_names: organizations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Organization-embed
    filters:
      and:
        - formula.organization_names.contains("Cult of the Machine God")
    order:
      - file.name
      - brief
      - locations
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain
```


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
