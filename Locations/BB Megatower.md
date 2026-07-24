---
dg-publish: true
type: location
aliases:
cover: "[[location_BBMegatower.webp]]"
created: 2026-06-03
modified: 2026-07-23
district: "[[Cloud District]]"
parent: "[[Bellanova Towers]]"
associations:
  - "[[Bellanova Family|Bellanova Family]]"
tags:
---

# Notes

- Megatower owned by the [[Bellanova Family]] and run by [[Vinnie Brassjaw|Brassjaw]].

### Points of Interest

```base
filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: Sublocations-embed
    filters:
      and:
        - parent.contains("BB Megatower")
    order:
      - file.name
    indentProperties: true

```

### Quests

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
    && toArray(p.quest_location).some(l => l?.path === currentPath))
  .sort(p => p.file.name, "desc")
  .sort(p => p.due_date, "asc")
  .sort(p => statusRank(p.quest_status), "asc");

dv.table(
  ["Quest", "Status", "Giver", "Expires", "Reward", "Tags"],
  rows.map(p => [
    `${p.file.link}`,
    statusPill(p.quest_status),
    toArray(p.quest_giver).map(g => `${g}`).join(", "),
    p.expires ?? "",
    toArray(p.reward).map(r => `${r}`).join(", "),
    p.tags ? p.tags.join(", ") : ""
  ])
);
```

# NPCs

```base
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  location_names: locations.join(", ")
  cover_url: if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)
views:
  - type: cards
    name: Location-embedonly
    filters:
      and:
        - formula.location_names.contains("BB Megatower")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```

# Maps


![[admin/assets/location_bbmegatower_penthouse.webp]]
![[admin/assets/location_bbmegatower_wizardfight.webp]]
![[admin/assets/location_bbmegatower_tier2_ransomlocation.webp]]
![[admin/assets/location_bbmegatower_relayshrine.webp]]
![[admin/assets/location_bbmegatower_neoncorridor.webp]]
![[admin/assets/location_bbmegatower_krystals.webp]]
