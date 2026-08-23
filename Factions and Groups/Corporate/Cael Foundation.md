---
dg-publish: true
aliases:
  - CF
type: corporate faction
cover: "[[faction_caelfoundation.webp]]"
created: 2026-03-05
modified: 2026-08-23
associations:
locations:
  - "[[The Asylum]]"
  - "[[Cael Foundation Station]]"
  - "[[Cael Foundation Academy]]"
  - "[[The Prison]]"
tags:
---


![[faction_caelfoundation.webp||banner p+t]]

# Description

In the 8th Century, during the Corporate Wars of the Pre-Valencian Era, countless corporate states abandoned the marketplace and waged open war over territory and assets. This was the norm for most of them, and it came at the expense of the common people, who were treated as expendable pieces in a game meant only to make abstract profit numbers climb.

A rare exception to this pattern was CaelTech. Its focus on technological innovation, workplace standards, and sustainable practices set it apart from its rivals. When the Valencian Nation eventually rose to power, those values were remembered. The fledgling state needed reliable allies, and CaelTech became the backbone of technological development across Morren. It remains one of the few corporations from the Pre-Valencian Era to survive into the present.

CaelTech no longer maintains much of a presence in Old Valence. However, in 1992, the company’s CEO and legacy heir, [[Adam Cael]],
stepped down to pursue a different vision. In response to the growing chaos and lawlessness of the Dors Archipelago, he founded the Cael Foundation. Heavily funded by CaelTech, the Foundation seeks to impose a measure of stability and order across Morren.

The heart of those efforts now lies in Old Valence. The Foundation operates several key facilities there: The Asylum, The Prison, The Academy, and the Handler Station. The Handler Station serves as the operational hub, where Heroes are assigned a Handler and dispatched to address the city’s crises. Each Handler coordinates a specific roster of Hero Teams, routing threats and requests as they arise.

Once Rookie Heroes accumulate enough influence and wealth, they may enroll in the Cael Foundation Academy, granting them access to specialized training and services that remain out of reach for most of Morren’s population.


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
        - formula.organization_names.contains("Cael Foundation")
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
