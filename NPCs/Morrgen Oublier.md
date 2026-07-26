---
dg-publish: true
type: npc
aliases:
  - Morrgen
cover: "[[npc_morrgenoublier.webp]]"
created: 2026-05-08
modified: 2026-07-26
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Morrgen's Community Center]]"
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

![[npc_morrgenoublier.webp|404]]

# Description

Morrgen Oublier, a high elf in her early hundreds with deep wine red hair. She is kind and graceful, not a pillar of the community but the very foundation that it was built on. She believes in the [[Covenant of Equal Measure]] but sees value in all of Morrenel's teachings. Her perfect world is one where everyone is seen as an equal and has all the same opportunities.

### Notes

- After her husband was murdered, [[Morrgen Oublier]] left [[Hood Station]] to speak with some "old friends" about what happened

# Session Mentions

```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  join(map(locations, (l) => "• " + string(l)), "<br>") AS "Session Locations"
FROM ""
WHERE type = "session_note"
  AND file.folder != "admin/templates"
  AND contains(this.file.inlinks, file.link)
SORT file.name ASC, locations ASC
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
