---
dg-publish: true
type: npc
aliases:
  - Memaw
cover: "[[npc_memawshoe.webp]]"
created: 2026-05-25
modified: 2026-08-28
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

# Quests

![[0 Quest Index.base#NPC-embedonly]]