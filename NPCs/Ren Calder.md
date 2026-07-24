---
dg-publish: true
type: npc
aliases:
  - Ren
cover: "[[npc_rencalder.webp]]"
created: 2026-05-04
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[The Redacted]]"
associates:
  - "[[Maximilius Adkins|Max]]"
brief: Max's friend and fellow member of The Redacted.
status:
  - alive
locations:
  - "[[Hood Station]]"
tags:
  - pcbond/max
  - quest_giver
---

![[npc_rencalder.webp|400]]

# Description

An active member of [[The Redacted]] who is constantly searching for leads and opportunities to push back against the oligarchs. He’s young and a bit naive, but genuinely committed to the cause. Ren sends a high volume of tips to [[Maximilius Adkins|Max]], many of which go unused, but he was the one who connected Max to [[Keena O'Malley|Keena]]’s story and, by extension, [[Hood Station]]. Since then, Max has taken Ren’s contributions more seriously, though he still tries to temper some of his more reckless ideas.


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
  return `<span style="background-color:${color}22 !important; color:${color} !important; border:1px solid ${color} !important; padding:2px 8px; border-radius:12px; font-size:0.85em;">${status ?? "No Status"}</span>`;
}

function toArray(val) {
  return Array.isArray(val) ? val : (val ? [val] : []);
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
    p.quest_location ? `${p.quest_location}` : "",
    p.expires ?? "",
    toArray(p.reward).map(r => `${r}`).join(", ") || "",
    p.tags ? p.tags.join(", ") : ""
  ])
);
```
