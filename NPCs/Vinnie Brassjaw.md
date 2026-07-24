---
dg-publish: true
type: npc
aliases:
  - Vinnie
  - Brassjaw
cover: "[[npc_vinniebrassjaw.webp]]"
created: 2026-06-08
modified: 2026-07-23
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

- Received some videos from our [[Stalker]] and is interested in unmasking them
- Willing to help us if we do some work for him
- Holds [[Malcolm Oublier]]'s debt
- If we build enough trust, could set up a meeting between [[Silas Sorelli|Silas]] and [[Kali Torreo|Commander Torreo]]
- Gave us some old wrestling costumes to use as disguises

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

const currentPath = dv.current().file.path;

const rows = dv.pages()
  .where(p => p.type === "quest" && p.file.folder !== "admin/templates" && p.quest_giver?.path === currentPath)
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
    p.reward ? `${p.reward}` : "",
    p.tags ? p.tags.join(", ") : ""
  ])
);
```
