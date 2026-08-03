---
dg-publish: true
type: npc
aliases:
  - Barron
cover: "[[npc_barronsutton.webp]]"
created: 2026-05-21
modified: 2026-08-03
disposition:
  - unknown
organizations:
  - "[[Crownlight Media]]"
associates:
  - "[[Maximilius Adkins|Max]]"
brief: Max's former colleague at Crownlight Media
tags:
status:
  - alive
locations:
  - "[[Crownlight Media Studio Lot]]"
  - "[[Not Far Sewer]]"
---

![[npc_BarronSutton.webp|400]]

# Description

A former manager of a team adjacent to [[Maximilius Adkins|Max]]’s during his time at [[Crownlight Media]]. The two got along well professionally, and Barron has recently attempted to reestablish contact. Max is uncertain of his intentions—whether it’s an attempt to locate him on behalf of Crownlight or a genuine, sympathetic outreach. He wants to believe the latter, but for now, he considers it too much of a risk to respond.

### Notes

- Baron interviewed [[Keena O'Malley|Keena]] and [[Dorian Caldwell|Dorian]] outside the exit of the [[Not Far Sewer]]. They tried to gauge if he might actually be sympathetic to Max, but it was hard to tell.

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
