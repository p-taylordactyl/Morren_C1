---
dg-publish: true
type: npc
aliases:
  - Vinnie
  - Brassjaw
cover: "[[npc_vinniebrassjaw.webp]]"
created: 2026-06-08
modified: 2026-08-03
disposition:
  - neutral
  - friendly
  - unknown
organizations:
  - "[[Bellanova Family|Bellanovas]]"
associates:
  - "[[Kali Torreo]]"
  - "[[Róisín Ward]]"
  - "[[Malcolm Oublier]]"
brief: A goblin that seems to be the Bellanova boss in the BB Megatower.
status:
  - alive
locations:
  - "[[BB Megatower]]"
tags:
  - quest_giver
---

![[npc_vinniebrassjaw.webp]]

# Description

A goblin that seems to be some kind of crime boss in the [[BB Megatower]].

### Notes

- Received some videos from our [[Sterling Corvain]] and is interested in unmasking them
- Willing to help us if we do some work for him
- Holds [[Malcolm Oublier]]'s debt
- If we build enough trust, could set up a meeting between [[Silas Sorelli|Silas]] and [[Kali Torreo|Commander Torreo]]
- Gave us some old wrestling costumes to use as disguises

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

```dataviewjs
const statusOrder = ["not started", "in progress", "turn in", "completed", "expired"];

const statusColors = {
  "not started": "#6b7280",
  "in progress": "#3b82f6",
  "turn in": "#f59e0b",
  "completed": "#22c55e",
  "expired": "#ef4444"
};

function statusRank(status) {
  const i = statusOrder.indexOf((status ?? "").toString().toLowerCase());
  return i === -1 ? statusOrder.length : i;
}

function statusPill(status) {
  const key = (status ?? "").toString().toLowerCase();
  const color = statusColors[key] ?? "#9ca3af";
  return `<span style="background-color:${color}22 !important; color:${color} !important; border:1px solid ${color} !important; padding:2px 10px; border-radius:12px; font-size:0.85em; white-space:nowrap; display:inline-block;">${status ?? "No Status"}</span>`;
}

function toArray(val) {
  return Array.isArray(val) ? val : (val ? [val] : []);
}

function formatLocations(locations) {
  const arr = toArray(locations);
  const layers = [[]];
  for (const item of arr) {
    if (item?.toString?.() === ">" || item === ">") {
      layers.push([]);
    } else {
      layers[layers.length - 1].push(item);
    }
  }
  return layers.map(layer => layer.map(l => `${l}`).join(" / ")).join(" > ");
}

const currentPath = dv.current().file.path;

const rows = dv.pages()
  .where(p => p.type === "quest" && p.file.folder !== "admin/templates"
    && toArray(p.quest_giver).some(g => g?.path === currentPath))
  .sort(p => p.file.name, "desc")
  .sort(p => p.due_date, "asc")
  .sort(p => statusRank(p.quest_status), "asc");

dv.table(
  ["Quest", "Status", "Location", "Expires", "Reward", "Tags"],
  rows.map(p => [
    `${p.file.link}`,
    statusPill(p.quest_status),
    formatLocations(p.quest_location),
    p.expires ?? "",
    toArray(p.reward).map(r => `${r}`).join(", "),
    p.tags ? p.tags.join(", ") : ""
  ])
);
```
