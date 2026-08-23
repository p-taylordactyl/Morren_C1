---
dg-publish: true
aliases:
  - ARG
type: corporate faction
cover: "[[faction_aegisresponsegroup.webp]]"
created: 2026-04-23
modified: 2026-08-23
associations:
locations:
  - "[[Locations/Aegis Response Group|Aegis Response Group]]"
tags:
---

![[faction_aegisresponsegroup.webp||banner p+t]]

# Description

Aegis Response Group is a preeminent disaster relief and emergency management corporation operating throughout the Dors Archipelago. Its mandate covers rapid-response aid, infrastructure stabilization, medical deployment, and crisis logistics. Aegis maintains a fleet of reinforced transport airships, modular relief platforms, and arcane-assisted emergency vehicles capable of delivering personnel, supplies, and equipment to the most inaccessible or disaster-stricken areas. The corporation’s emblem—a silver shield —is displayed on vehicles, relief camps, and emergency broadcast arrays, signaling both authority and reliability in crisis zones.

The company coordinates large-scale relief operations with a high degree of efficiency. Its mobile units can establish temporary shelters, field hospitals, and communication hubs within hours, while drone and arcane sensor networks map damage, monitor environmental hazards, and optimize resource deployment. Aegis also maintains specialized teams for flood mitigation, fire suppression, structural reinforcement, and hazardous material containment, ensuring that relief efforts can continue even in extreme conditions.

During the Corporate Wars, Aegis Response Group remained neutral, focusing on civilian protection and infrastructure repair rather than military engagement. Its logistics networks and modular bases were occasionally used to provide safe passage or temporary refuge for displaced populations, and the corporation coordinated emergency interventions in contested zones to prevent further civilian casualties. While Aegis occasionally contracted with factions to secure transport corridors, it avoided direct involvement in combat operations, prioritizing long-term stability over tactical advantage.

In the Modern Age, Aegis Response Group continues to dominate disaster response across Morren. Smaller humanitarian initiatives, municipal emergency services, and independent relief organizations often operate under Aegis coordination or licensing, relying on its mobile infrastructure, communication systems, and logistical expertise. The corporation’s combination of rapid deployment, technical precision, and neutral public mandate has made it the default authority in managing crises, natural disasters, and industrial accidents across the Archipelago.


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
        - formula.organization_names.contains("Aegis Response Group")
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
