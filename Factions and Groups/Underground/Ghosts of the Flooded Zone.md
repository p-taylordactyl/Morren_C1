---
dg-publish: true
aliases:
  - Ghosts
type: underground faction
cover: "[[faction_ghostsofthefloodedzone.webp]]"
created: 2026-04-23
modified: 2026-08-28
associations:
locations:
  - "[[Ghosts HQ]]"
tags:
  - under_construction
---

![[faction_ghostsofthefloodedzone.webp||banner p+t]]

# Description

The Ghosts of the Flooded Zone are a paramilitary collective formed from the survivors of the Great Inundation, a catastrophic failure of an experimental hydroplant in 1927 that submerged an entire residential district of [[Old Valence]] beneath toxic tides and collapsing infrastructure. When the flooding first occurred, emergency response was brief and limited. The [[Oligarchs]] ultimately declared the district a total loss, citing structural instability and economic redundancy, and formally abandoned the zone in favor of relocating displaced residents into vacant megabuildings elsewhere in Morren. Officially, the [[Flooded Zone]] was written off as uninhabitable and removed from long-term recovery plans.

A significant portion of the population refused evacuation. Some were unable to leave, others unwilling to abandon generational homes, buried assets, or localized infrastructure they still depended on. These survivors adapted to the drowned environment, fortifying upper levels, sealing corridors, and converting submerged structures into habitable zones connected by bridges, pressure locks, and improvised transit systems. Over time, these communities unified under a shared identity, forming what would become known as the Ghosts of the Flooded Zone.

The Ghosts operate as a decentralized paramilitary force, organized around territorial cells that control specific sectors of the submerged district. Their equipment is largely salvaged or reverse-engineered, consisting of sealed combat rigs, rebreathers, submersible craft, and jury-rigged weapons adapted for underwater and low-visibility combat. Environmental hazards are treated as tactical advantages, with the Ghosts using flooded corridors, unstable structures, and sensor interference zones to ambush intruders and control movement through their territory.

Politically, the Ghosts maintain independence through deliberate stagnation. They understand that large-scale reconstruction or infrastructure development would make the Flooded Zone economically relevant again, drawing the attention of the Oligarchs and risking corporate reclamation. As a result, the Ghosts actively prevent outside intervention, especially from humanitarian or disaster relief organizations such as [[Locations/Aegis Response Group|Aegis Response Group]]. Foreign aid teams, engineering crews, and ecological restoration projects are viewed as existential threats rather than assistance. Attempts to establish clinics, water purification systems, or structural reinforcement are routinely sabotaged or met with armed resistance.

Internally, the Flooded Zone operates on a survival economy. Power is scavenged, water is filtered locally, and food is sourced through controlled hydroponics, deep-sea harvesting, or trade with black-market networks. Leadership is informal and functional, usually held by veteran survivors who control access to critical infrastructure like air filtration hubs, pressurized shelters, or transit routes. There is no centralized government, but there is a shared doctrine: remain invisible, remain undesirable, and remain outside corporate valuation metrics.

To the rest of Morren, the Ghosts are treated as an urban myth, a cautionary rumor about people who chose to live in a drowned city rather than submit to relocation. To the Oligarchs, they are a tolerated anomaly, a low-value territory populated by hostile remnants that are cheaper to ignore than to reclaim. The Ghosts persist by ensuring that calculation never changes.


### Notes

[[Silas Sorelli]] 

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
        - formula.organization_names.contains("Ghosts of the Flooded Zone")
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
