---
dg-publish: true
aliases:
  - Mall
type: corporate faction
cover: "[[faction_infinityplazamall.webp]]"
created: 2026-04-23
modified: 2026-08-23
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
