---
dg-publish: true
aliases:
  - Saints
  - West Valence Saints
  - Saint
type: underground faction
cover: "[[faction_westvalencesaints.webp]]"
created: 2026-04-23
modified: 2026-08-23
associations:
  - "[[Dominion Crew]]"
  - "[[Lightning Crew]]"
locations:
  - "[[Westreach]]"
  - "[[Saints Cathedral]]"
tags:
---

![[faction_westvalencesaints.webp]]

# Description

The West Valence Saints are a street gang that controls large swaths of the western slums of [[Old Valence]]. They are not landlords in any legal sense. Their power comes from occupation, intimidation, and routine enforcement, with members embedded directly inside the buildings and blocks they control. Entire housing complexes function as Saints territory, marked by graffiti symbols, repurposed shrines, and constant patrols.

The Saints operate at the building level. Each block or tower is overseen by a crew leader responsible for collections, discipline, and coordination with neighboring crews. Rent is demanded weekly, paid in cash, labor, or favors. Failure to pay results in eviction by force, confiscation of living space, or assignment to gang-controlled labor. Keys, door chains, and barricades are controlled by the Saints, allowing them to restrict movement through stairwells, rooftops, and internal corridors.

Living conditions in Saints territory are some of the worst the city has to offer. Repairs are minimal and performed only when structural failure would threaten occupancy. Power, water, and access routes are cut or restored as punishment or leverage. Residents are encouraged to overcrowd units, increasing dependency and reducing the likelihood of organized resistance.

Violence is used openly but selectively. Public beatings, intimidation, and disappearances reinforce the Saints’ reputation, while quieter enforcement handles day-to-day compliance. At the same time, the Saints present themselves as the only real authority in the west. They keep rival gangs out, suppress random looting, and occasionally intervene against external threats, creating a grim form of neighborhood stability.

The West Valence Saints emerged during the final years of the Corporate Wars, when corporate security abandoned the western districts. What began as localized protection crews consolidated into a single gang as violence escalated. By the time of the Oligarchs, the Saints had already claimed their territory, and the cost of removing them outweighed the perceived value of the district.

In the Modern Age, the Saints maintain careful boundaries. They do not expand aggressively and avoid actions that would provoke direct corporate intervention. Their focus remains on controlling housing, extracting steady income, and maintaining dominance over the west. To residents, the Saints are ever-present figures in stairwells and doorways, enforcing rules that make survival possible but never comfortable.


## Additional Information


-placeholder to add Kat info


# NPCs

```base
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
        - formula.organization_names.contains("West Valence Saints")
    order:
      - file.name
      - brief
      - locations
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain
```


# Session Mentions

```dataviewjs
function toArray(val) {
  return Array.isArray(val) ? val : (val ? [val] : []);
}

function parseLocationTree(locations) {
  return toArray(locations).map(raw => {
    const str = raw.toString();
    const match = str.match(/^(>+)/);
    const depth = match ? match[1].length : 0;
    const text = match ? str.slice(match[1].length) : str;
    return { depth, text };
  });
}

function buildNestedList(items) {
  return items.map(item => {
    const indent = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(item.depth);
    const bullet = item.depth === 0 ? "•" : "◦";
    return `${indent}${bullet} ${item.text}`;
  }).join("<br>");
}

const currentPath = dv.current().file.path;
const inlinkPaths = toArray(dv.current().file.inlinks).map(l => l.path);

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates"
    && inlinkPaths.includes(p.file.path))
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Locations"],
  rows.map(p => [
    `${p.file.link}`,
    buildNestedList(parseLocationTree(p.locations))
  ])
);
```
