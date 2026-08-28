---
dg-publish: true
aliases:
  - Mall
type: corporate faction
cover: "[[faction_infinityplazamall.webp]]"
created: 2026-04-23
modified: 2026-08-28
associations:
locations:
  - "[[Mega Mall]]"
tags:
---

![[faction_infinityplazamall.webp||banner p+t]]

# Description

Infinity Plaza Mall is Morren’s preeminent retail and leisure conglomerate, a sprawling network of megamalls that dominate the city’s commercial and social landscape. Each Infinity Plaza location occupies entire city blocks or floating districts, integrating shopping, dining, entertainment, and arcane amenities into a single unified complex. The flagship malls feature vast glass atriums, shimmering orbital signage, and multi-level transit hubs, all centered around the corporation’s emblem: an infinite loop of interlocking rings, representing perpetual circulation and consumer reach.

The corporation operates as both a retailer and a distribution hub. Its supply chains span every major commercial sector, from luxury goods to arcane curios, controlling inventory flows and access to desirable commodities. Holo-displays and augmented reality overlays inside the malls guide visitors toward promoted products, subtly influencing spending patterns, foot traffic, and social interactions. Retail floors are designed with modular layouts and moving platforms, allowing the mall to be reconfigured for seasonal trends, high-profile launches, or corporate-sponsored events.

During the Corporate Wars, Infinity Plaza Mall leveraged its commercial infrastructure as a logistical network. Stockpiles of essential goods, transportation nodes, and secure storage facilities were repurposed to support allied factions while limiting access for opponents. Certain mall districts were temporarily closed to the public and converted into fortified depots or strategic observation points, while the corporation’s marketing and communication systems broadcast curated information to manipulate local populations. Employees were often mobilized for both production and civic coordination, creating a flexible workforce capable of rapid redeployment across the city.

In the Modern Age, Infinity Plaza Mall continues to consolidate retail influence. Smaller shopping districts and independent vendors are increasingly absorbed into its network, either through acquisition or franchising. Corporate sponsorships, mall events, and loyalty programs create tightly managed social ecosystems that track movement, purchasing habits, and engagement with advertised content. While the corporation maintains no armed force of its own, it retains control over the circulation of goods, public spaces, and social hubs, giving it practical authority over daily urban life across Morren.



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
        - formula.organization_names.contains("Infinity Plaza Mall")
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
