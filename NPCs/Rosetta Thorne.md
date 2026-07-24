---
dg-publish: true
type: npc
aliases:
  - Rosetta
  - Miss Rosie
cover: "[[npc_rosettathorne.webp]]"
created: 2026-05-25
modified: 2026-07-23
disposition:
  - neutral
  - friendly
  - unknown
organizations:
  - "[[Hood Station]]"
  - "[[Protective Association for Wayward and Neglected Strays]]"
associates:
  - "[[Silas Sorelli|Silas]]"
  - "[[Dorian Caldwell|Dorian]]"
brief: Leader of P.A.W.N.S. and dubious associate of Silas and Dorian
tags:
status:
  - alive
locations:
  - "[[Hood Station]]"
---

> [!cards|c-p-lg] 
> **Miss Rosie"**
> ![[npc_missrosie.webp|cover]]
>
> **Rosetta "The Thorn**
> ![[npc_rosettathorne.webp|cover]]

# Description

Rosetta "the Thorn" Thorne, Queen of the [[Protective Association for Wayward and Neglected Strays|Association]] - Rosetta Thorne, or "Miss Rosie" as she's known by the community, appears as a sweet old lady-- a human in her later years of life. She has poor posture, constantly hunched over from her age, with a frail looking frame constantly draped in dresses, knitted cardigans, and gloves. Behind the closed doors of the Association however, "Miss Rosie" discards her public facade in favor of her real self: the scorned ex-rising star of the [[Bellanova Family]] who was abandoned as a scapegoat by [[Prospera Bellanova]]-- the eldest child of a high ranking Family member-- when they botched a job nearly a lifetime ago. Rosetta has a lithe and muscular build, a stern gaze, and is nearly covered in intimidating tattoos from the neck down. She has been seething and plotting her revenge against the Bellanova Family for decades-- specifically the still frustratingly young and beautiful elf who framed her. Rosetta "the Thorn" is nothing short of a full blown psychopath. Cold, calculating, entirely devoid of empathy or remorse, and intends to bring Prospera and her entire wretched family to a slow, shameful, and agonizing end that only someone as wizened and poetic as Rosetta could achieve.

### Notes

- While turning in the quest [[Voices in the Grates]], the party (other than [[Silas Sorelli|Silas]] and [[Dorian Caldwell|Dorian]]) found out that "Miss Rosie" is actually something resembling simulacrum being puppeted by the real Rosetta, who seems to handle more sensitive business in a secret room of the orphanage called "The Punishment Room."

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
