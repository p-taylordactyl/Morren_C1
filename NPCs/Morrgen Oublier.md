---
dg-publish: true
type: npc
aliases:
  - Morrgen
  - Brass Scale
cover: "[[npc_morrgenoublier.webp]]"
created: 2026-05-08
modified: 2026-08-28
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Morrgen's Community Center]]"
  - "[[Malefactors]]"
associations:
  - "[[Gideon Oublier]]"
  - "[[Katriel Buchanon|Kat Buchanon]]"
  - "[[Malcolm Oublier]]"
brief: Gideon's mother, Kat's adoptive mother and leader of the Community Center
tags:
  - pcbond/gideon
  - pcbond/kat
status:
  - alive
locations:
  - unknown
---

![[npc_morrgenoublier.webp|418]]

# Description

Morrgen Oublier, a high elf in her early hundreds with deep wine red hair. She is kind and graceful, not a pillar of the community but the very foundation that it was built on. She believes in the [[Covenant of Equal Measure]] but sees value in all of Morrenel's teachings. Her perfect world is one where everyone is seen as an equal and has all the same opportunities. 

### Notes

- After her husband was murdered, [[Morrgen Oublier]] left [[Hood Station]] to speak with some "old friends" about what happened
- "old friends" are a supervillain group called the [[Malefactors]] who then help her break [[Malcolm Oublier|Malcolm]] out of prison

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
