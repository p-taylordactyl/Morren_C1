---
title: Welcome to Hood Station!
modified: 2026-09-21
created: 2026-06-30
dg-publish: true
dg-home: true
---

![[location_hoodstation_0.webp]]


# Hood's Watch

> [!cards] 
>  **[[Katriel Buchanon|Kat Buchanon]]**
> ![[pc_katrielbuchanon_firstdisguise.webp| center portrait]]
>
> **[[Gideon Oublier]]**
> ![[npc_gideonoublier_disguise2.webp| center portrait]]
> 
> **[[Dorian Caldwell]]**
> ![[pc_doriancaldwell_firstdisguisealt.webp| center portrait]]
> 
> **[[Silas Sorelli]]**
> ![[pc_silassorelli_firstdisguise.webp| center portrait]]
> 
> **[[Keena O'Malley]]**
> ![[pc_keenaomalley_firstdisguise.webp| center portrait]]
> 
> **[[Maximilius Adkins|Max Adkins]]**
> ![[pc_maxadkins_thetickler.webp| center portrait]]


# Current Quests
```dataviewjs
const statusOrder = ["not started", "in progress"];

const statusColors = {
  "not started": "#6b7280",
  "in progress": "#3b82f6"
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

const rows = dv.pages()
  .where(p => p.type === "quest" && p.file.folder !== "admin/templates" && statusOrder.includes((p.quest_status ?? "").toString().toLowerCase()))
  .sort(p => p.file.name, "desc")
  .sort(p => p.due_date, "asc")
  .sort(p => statusRank(p.quest_status), "asc");

dv.table(
  ["Quest", "Status", "Location", "Giver", "Expires", "Reward"],
  rows.map(p => [
    `${p.file.link}`,
    statusPill(p.quest_status),
    buildNestedList(buildLocationTree(p.quest_location)),
    toArray(p.quest_giver).map(g => `${g}`).join(", "),
    p.expires ?? "",
    toArray(p.reward).map(r => `${r}`).join(", ")
  ])
);
```


# Sessions

```dataviewjs
const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates")
  .sort(p => p.file.name, "asc");

const table = dv.table(
  ["Session", "Session Date", "In-Game Start"],
  rows.map(p => [
    `${p.file.link}`,
    p.session_date ?? "",
    p.ingame_start ?? ""
  ])
);

// Tag the table just rendered with a class we can style
const lastTable = dv.container.querySelector("table.dataview.table-view-table:last-of-type");
if (lastTable) lastTable.classList.add("session-summary-table");
```



