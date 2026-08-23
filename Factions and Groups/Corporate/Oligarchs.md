---
dg-publish: true
aliases:
  - oligarch
type: corporate faction
cover: "[[faction_oligarchs.webp]]"
created: 2026-03-06
modified: 2026-08-23
associations:
locations:
  - "[[Energy Siphon Tower]]"
tags:
---

![[faction_oligarchs.webp||banner p+t]]

# Description

In the Modern Age the Oligarchs retain only a limited presence in Old Valence, their influence felt more through strategic deployments than through any visible claim of authority. Most of their operatives are stationed in discreet enclaves or embedded within corporate security divisions, emerging primarily to safeguard high-value assets and enforce contractual interests on behalf of the major consortiums. Their most critical mandate, however, is the protection of the Energy Siphon Tower, thought of as both the keystone of Valence’s power infrastructure and the primary reason the Oligarchs maintain any foothold in the region at all.

Patrols around the Tower are constant but understated, relying on advanced surveillance systems, remote drones, and small, highly trained response units rather than overt militarization. When threats arise, whether from industrial sabotage, political unrest, or external forces seeking to disrupt the Tower’s yield, the Oligarchs intervene with surgical efficiency. They rarely concern themselves with the day-to-day governance of Old Valence, leaving local authorities and private entities to manage civic affairs, but any action that endangers energy production is met with immediate and overwhelming reprisal.

To the average citizen, the Oligarchs are more rumor than reality: a distant power that manifests only in moments of crisis, their insignia appearing on armored transports or sealed-off districts before vanishing again just as quickly. This limited but focused presence reinforces their role not as rulers of Old Valence, but as custodians of its most valuable resource, ensuring that the flow of energy, and by extension profit, remains uninterrupted.


# Notes

- The Oligarchs have a group of "police" known as [[Enforcers]] who will basically come pick folks up who were "citizens arrested"

# Associated NPCs

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
        - formula.organization_names.contains("Oligarchs")
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
