---
dg-publish: true
type: npc
aliases:
  - Thorbin
cover: "[[npc_thorbinsprake.webp]]"
created: 2026-05-08
modified: 2026-07-23
disposition:
  - friendly
organizations:
  - "[[Hood Station]]"
  - "[[Endline Garage]]"
associates:
  - "[[Katriel Buchanon]]"
brief: Kat's boss/mentor and owner of the Endline Garage
tags:
  - pcbond/kat
status:
  - alive
locations:
  - "[[Hood Station]]"
---

![[npc_ThorbinSprake.webp]]

# Description

Thorbin Sprake was a mechanic for the [[Titan Corporation]], until he lost his legs and most of his right arm in a freak accident (surprisingly) unrelated to the workplace. The long tale he spins for curious gawkers includes but is not limited to: a carjacking, a fall down several flights of stairs, a butcher shop, a cat in heat, a dumpster fire, and ultimately, a lucky bounce onto a broken manhole cover, where he fell directly into the arms of one [[Memaw Shoe]]. Through sheer determination, she and the few founding residents of Hood Station patched the dwarf up as best they could, and he miraculously survived, which still left him with only one good arm. With the Titan Corporation uninterested in continuing his employment, Thorbin instead dedicated his mechanic skills to restoring both his missing limbs and the home of the woman that saved him (starting with the manhole covers). Now, Thorbin stands 6ft tall on his homemade prosthetic legs and proudly runs the Endline Garage, a mechanic (and general tinkering) shop where he builds and maintains scrap vehicles as well as working on various mechanical projects for the burgeoning station community.


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
