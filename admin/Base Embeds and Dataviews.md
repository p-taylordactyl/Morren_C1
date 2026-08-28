---
dg-publish: false
---



# NPC Index

- [x] location embed final version
- [x] update location template
- [x] update districts
- [x] update locations
- [x]  organization embed final version
- [x] update faction and group templates
- [x] update factions and groups

### Location Note Embeds

NPCs in location

```
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  location_names: locations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Location-embedonly
    filters:
      and:
        - formula.location_names.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.15

```


Hood Station Specific Embed (combo location/org, maybe not even necessary)
```
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  location_names: locations.join(", ")
  organization_names: organizations.join(", ")
  cover_url: '"https://hoodswatch.vercel.app/img/user/admin/assets/" + cover.toString().replace("[[", "").replace("]]", "")'
views:
  - type: cards
    name: Location-embedonly
    filters:
      or:
        - formula.location_names.contains("Hood Station")
        - formula.organization_names.contains("Hood Station")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.15
```


> [!recite] Debug Version (remove org if not hood station)
> filters:
>   and:
>     - type == "npc"
>     - file.folder != "admin/templates"
> formulas:
>   location_names: locations.join(", ")
>   organization_names: organizations.join(", ")
>   cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
>   test_toString: cover.toString()
>   test_replace_only: cover.replace("[[", "").replace("]]", "")
>   test_split: cover.split("(")[1].replace(")", "").trim()
> 
> views:
>   - type: cards
>     name: Location-embedonly
>     filters:
>       or:
>         - formula.location_names.contains("<%tp.file.title%>")
>         - formula.organization_names.contains("<%tp.file.title%>")
>     order:
>       - file.name
>       - brief
>     image: formula.cover_url
>     cardSize: 240
>     imageAspectRatio: 1.15
>   - type: table
>     name: Debug
>     order:
>       - file.name
>       - cover
>       - formula.test_split
>       - formula.cover_url
>       - formula.test_toString
>       - formula.test_replace_only



### Faction and Group Note Embed

```
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  organization_names: organizations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Organization-embed
    filters:
      and:
        - formula.organization_names.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
      - locations
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain

```



# Location Index

### Points of Interest

```
filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: Sublocations-embed
    filters:
      and:
        - parent.contains("<%tp.file.title%>")
    order:
      - file.name
    indentProperties: true
```


### District Points of Interest

```
filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: District-embed
    filters:
      and:
        - district.contains("Crownlight Strip")
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true

```

### Maps




# Session Index

- [x] finalize encounters base embed
- [x] decide what to do about prev and next session
- [x] update NPCs
- [x] update Factions and Groups

### Encounters tables



```
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


### Prev and Next Session

```
const container = dv.el("div", "", { cls: "session-nav" });
container.style.display = "flex";
container.style.gap = "1rem";

const prev = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates" && p.session_number === dv.current().session_number - 1)[0];
const next = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates" && p.session_number === dv.current().session_number + 1)[0];

function makeCard(label, page) {
  const card = container.createEl("div", { cls: "session-nav-card" });
  card.style.flex = "1";
  card.style.border = "2px solid var(--text-normal)";
  card.style.borderRadius = "8px";
  card.style.padding = "1rem";
  card.style.textAlign = "center";
  card.createEl("div", { text: label });
  if (page) {
    card.appendChild(dv.el("strong", dv.fileLink(page.file.path)).firstChild ?? dv.span(`[[${page.file.path}]]`));
  } else {
    card.createEl("em", { text: "None" });
  }
}

makeCard("⬅️ Previous Session", prev);
makeCard("Next Session ➡️", next);
```


# HomePageSession Embed

With Players -DNU
```
const playerColors = {
  "Taylor": "#4d7a5f",   // muted dark green
  "Matt": "#b8a05a",     // muted yellow/gold
  "Alek": "#b8615c",     // muted red
  "Jordan": "#8b6fa8",   // muted purple
  "Kuya": "#c08a54",     // muted orange
  "Cinna": "#5f84a8"     // muted blue
};

function playerPill(p) {
  const name = p.toString();
  const match = Object.keys(playerColors).find(n => name.includes(n));
  const color = match ? playerColors[match] : "#9ca3af";
  return `<span style="background-color:${color}22 !important; color:${color} !important; border:1px solid ${color} !important; padding:2px 8px; border-radius:12px; font-size:0.85em;">${name}</span>`;
}

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates")
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Date", "In-Game Start", "In-Game Finish", "Players"],
  rows.map(p => [
    `${p.file.link}`,
    p.session_date ?? "",
    p.ingame_start ?? "",
    p.ingame_finish ?? "",
    (Array.isArray(p.players) ? p.players : (p.players ? [p.players] : [])).map(playerPill).join(" ")
  ])
);

```

Alt? DNU

```
const playerColors = {
  "Taylor": "#4d7a5f",   // muted dark green
  "Matt": "#b8a05a",     // muted yellow/gold
  "Alek": "#b8615c",     // muted red
  "Jordan": "#8b6fa8",   // muted purple
  "Kuya": "#c08a54",     // muted orange
  "Cinna": "#5f84a8"     // muted blue
};

function playerPill(p) {
  const name = p.toString();
  const match = Object.keys(playerColors).find(n => name.includes(n));
  const color = match ? playerColors[match] : "#9ca3af";
  return `<span style="background-color:${color}22 !important; color:${color} !important; border:1px solid ${color} !important; padding:2px 8px; border-radius:12px; font-size:0.85em;">${name}</span>`;
}

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates")
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Date", "In-Game Start", "In-Game Finish", "Players"],
  rows.map(p => [
    `${p.file.link}`,
    p.session_date ?? "",
    p.ingame_start ?? "",
    p.ingame_finish ?? "",
    (Array.isArray(p.players) ? p.players : (p.players ? [p.players] : [])).map(playerPill).join(" ")
  ])
);

```

### CURRENT

```
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

# Quest

### NPC Page DataviewJS

```
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

### Home Page

```
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