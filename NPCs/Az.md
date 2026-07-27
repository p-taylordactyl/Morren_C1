---
dg-publish: true
type: npc
aliases:
cover: "[[npc_az.webp]]"
created: 2026-05-25
modified: 2026-07-27
disposition:
  - friendly
organizations:
  - "[[The Troupe]]"
associates:
  - "[[Dorian Caldwell|Dorian]]"
brief: Dorian's friend and de facto leader of The Troupe, he/they
status:
  - alive
locations:
  - "[[Hood Station]]"
tags:
  - quest_giver
---

[[npc_az.webp|453]]

# Description

Androgynous Tiefling late 30's, denies being the leader, but everyone seems to look towards them. One of the original members of [[The Troupe]]. They keep their ear to the ground as best as they can. And genuinely wants to help people go after their artistic goals.

They emphasize that art is supposed to be messy and confusing. They encourage others to pursue art. Whether it be for personal reasons, to spread awareness of injustices or to find beauty in the darkness of this city they all call home. Though they now have a permanent place to stay some nomadic tendencies have prevailed through. Popup art galleries, one day concerts/shows, sidewalk art classes, midnight graffiti murals. Though it is not mandatory some members have taken to branding their art in some way with a dented crown and a broken halo (an old drawing of Az’s). 

### Notes

- Az is also a drug dealer and grows some of their own supply

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
