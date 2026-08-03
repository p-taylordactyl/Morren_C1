---
dg-publish: true
type: npc
aliases:
  - Malcolm
cover: "[[npc_malcolmoublier.webp]]"
created: 2026-05-28
modified: 2026-08-03
disposition:
  - friendly
  - annoying
organizations:
  - "[[Hood Station]]"
associates:
  - "[[Gideon Oublier|Gideon]]"
brief: Gideon's twin brother and an absolute twerp
tags:
status:
  - alive
  - captured
locations:
  - "[[Hood Station]]"
---

![[npc_malcolmoublier.webp|325]]

# Description

[[Gideon Oublier|Gideon]]'s twin brother and favorite child of their father. Also an absolute twerp.

### Notes

- Malcolm currently owes [[Vinnie Brassjaw|Brassjaw]] 100 platinum, plus interest - due 1/15/26
- [[Sterling Corvain]] texted Gideon a picture of the outside of the casino, and then a picture of Malcolm tied up, asking whether we would give up [[Keena O'Malley|Keena]] or [[Maximilius Adkins|Max]] in trade.
- Max ultimately traded himself for Malcolm
- During his captivity, a hole was drilled in Malcolm's temple. Whatever was placed in his brain has given him magic powers but also seems to allow him to be mind controlled
- Under the effects of mind control, Malcolm murdered his own father and has been taken in by [[Enforcers]]

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
