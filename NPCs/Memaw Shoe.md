---
dg-publish: true
type: npc
aliases:
  - Memaw
cover: "[[npc_memawshoe.webp]]"
created: 2026-05-25
modified: 2026-08-03
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
associates:
brief: Founder and Leader of Hood Station
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_memawshoe.webp|546]]

# Description

Once a custodian of [[Hood Station]] - upon its retiring from service she was unable to secure other work leading to the loss of her apartment in Bellanova Towers. With no where else to turn she fashioned a makeshift home in Hood Station where she spent years on her own. Others would come seeking to build a community center and Shoe would turn her wisdom both of the tunnels systems and its dangers toward their cause. In more recent times her wisdom, unorthodox but reliable skills, and matronly approach to conflict resolution has proven invaluable to those who have followed in her shoeprints and thus earned her much respect; with many in the burgeoning community considering her the closest thing [[Hood Station]] has to a leader.


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

# Quests

![[0 Quest Index.base#NPC-embedonly]]