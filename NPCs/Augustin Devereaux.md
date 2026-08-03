---
dg-publish: true
type: npc
aliases:
  - Augustin
  - Devereaux
cover: "[[placeholder2.webp]]"
created: 2026-05-04
modified: 2026-08-03
disposition:
  - enemy
organizations:
  - "[[Titan Corporation]]"
associates:
  - "[[Sterling Corvain]]"
  - "[[Sterling Corvain]]"
brief: The man Keena and Max beat into a coma for causing and covering up the Titan Line Incident.
tags:
status:
  - comatose
locations:
  - unknown
---



# Description

Individual responsible for accident at the [[Titan Corporation]] that killed over 50 people, including [[Keena O'Malley|Keena]]'s brother, Lorcan O'Malley, and wounding many others. He covered up the accident but [[Keena O'Malley|Keena]] and [[Maximilius Adkins|Max]] were able to track it back to him. They originally just planned to question him and get the answers they were looking for, but ended up beating him into a coma. 

### Notes

- Our mysterious [[Sterling Corvain]] texted [[Gideon Oublier|Gideon]] a picture of Devereaux in a coma along with his last name
- based on the Stalker's fixation with Max and Keena, may be a close friend or relative

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
