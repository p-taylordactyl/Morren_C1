---
dg-publish: true
aliases:
  - Titan
type: corporate faction
cover: "[[faction_titancorporation.webp]]"
created: 2026-04-23
modified: 2026-08-23
associations:
locations:
  - "[[Titan Corporation Factory Complex]]"
tags:
---

![[faction_titancorporation.webp||banner p+t]]

# Description

Titan Corporation is a powerful industrial conglomerate known for aggressive resource extraction, heavy manufacturing, and merciless corporate expansion. Its operations span ore-rich islands, volcanic zones, and deep urban underlayers across the Dors Archipelago, where massive mechanized mines, smelting plants, and processing facilities dominate the landscape. The corporation’s emblem—a colossal gear entwined with a jagged spire—is emblazoned on machinery, transport vehicles, and fortified industrial complexes, projecting authority and unstoppable force.

Titan Corporation maximizes output with little regard for the environment or local communities. Automated mining fleets, arcane-powered drills, and massive industrial constructs reshape terrain to meet production quotas. Waste is discharged directly into surrounding areas, and hazardous zones are tightly secured rather than remediated. Workers are closely monitored with arcane wards, biometric tracking, and corporate enforcers, enforcing strict compliance under threat of punishment or reassignment to hazardous labor zones. Titan’s private militias and mechanized units protect corporate holdings, suppress dissent, and intimidate competitors, ensuring that production remains uninterrupted.

During the Corporate Wars, Titan Corporation leveraged its industrial empire as a strategic asset. Its mines and refineries supplied raw materials and fuel to allied factions while denying them to enemies. Key facilities were converted into fortified manufacturing hubs, producing weapons, armaments, and siege constructs to support military operations. Titan also deployed rapid-response extraction teams to contested zones, securing vital resources before they could fall into rival hands, and used arcane warding systems to sabotage or collapse enemy extraction efforts.

In the Modern Age, Titan Corporation continues to dominate industrial production, consolidating mining operations, heavy manufacturing, and energy supply under its control. Independent operations are either acquired, leased, or shut down, while its private security and enforcement forces maintain uninterrupted access to strategic resource locations. Titan’s influence extends across the Archipelago, shaping both the economy and the environment to serve the corporation’s relentless drive for production and expansion.

## Notes

- [[Keena O'Malley]] and [[Maximilius Adkins]] investigated an unreported accident that killed or injured a significant number Titan employees, including Keena's brother Lorcan O'Malley, who died, and her cousin [[Róisín Ward|Róisín]], who lost an arm. They found that [[Augustin Devereaux]] both caused and covered up the accident and subsequently beat the man into a coma.
- Max has now impersonated a Titan Corporation employee on multiple occasions
- The party found out at the [[Relay Shrine]] that the person stalking them is somehow affiliated with Titan


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
        - formula.organization_names.contains("Titan Corporation")
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



