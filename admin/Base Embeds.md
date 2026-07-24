---
dg-publish: false
---

NPC Index


Quest Index
- [ ] 






# NPC Index

- [x] location embed final version
- [x] update location template
- [x] update districts
- [x] update locations
- [x]  organization embed final version
- [x] update faction and group templates
- [x] update factions and groups

### Location Note Embed
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



> [!success] Hood Station note embed (or other faction/location combo notes)
> 
> filters:
>   and:
>     - type == "npc"
>     - file.folder != "admin/templates"
> formulas:
>   location_names: locations.join(", ")
>   organization_names: organizations.join(", ")
>   cover_url: '"https://hoodswatch.vercel.app/img/user/admin/assets/" + cover.toString().replace("[[", "").replace("]]", "")'
> views:
>   - type: cards
>     name: Location-embedonly
>     filters:
>       or:
>         - formula.location_names.contains("Hood Station")
>         - formula.organization_names.contains("Hood Station")
>     order:
>       - file.name
>       - brief
>     image: formula.cover_url
>     cardSize: 240
>     imageAspectRatio: 1.15


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



# Location Index

### Points of Interest

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



### District Points of Interest

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


# Session Index

- [x] finalize encounters base embed
- [x] decide what to do about prev and next session
- [x] update NPCs
- [x] update Factions and Groups

### Encounters

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



dataviewjs
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




# Home Session Embed

With Players

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



