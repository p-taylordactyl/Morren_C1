---
dg-publish: true
aliases:
  - Bellanovas
  - Bellanova
type: underground faction
cover: "[[faction_bellanovafamily.webp]]"
created: 2026-04-23
modified: 2026-08-23
associations:
locations:
  - "[[Bellanova Towers]]"
  - "[[BB Megatower]]"
  - "[[Pipe Junction]]"
tags:
---

![[faction_bellanovafamily.webp]]

# Description

The Bellanova Family is a crime dynasty heavily steeped in tradition that controls [[Bellanova Towers]], a sprawling mega-tenement in [[Old Valence]]. Originally built as luxury housing for mid-tier corporate managers, the building was later abandoned and fell into disrepair. The Bellanova Family claimed it early, transforming the tower into both a fortress and the operational hub of their organized crime activities. Over decades, they turned the vertical city into a self-contained syndicate stronghold, with entire floors dedicated to living quarters, offices, gambling halls, workshops, and illicit storage.

The family maintains a rigid hierarchical structure. At the top sits the Patriarch or Matriarch, whose authority is absolute within the tower. Beneath them is the Council of Lieutenants, each responsible for specific floors, revenue streams, or operational sectors such as smuggling, protection, debt collection, and information brokerage. Foot soldiers and associates populate the lower floors, enforcing the family’s rules, controlling tenants, and maintaining security. Roles are often hereditary or long-term, and loyalty is reinforced by both tradition and the ever-present threat of enforced discipline.

Control over Bellanova Towers is maintained through a combination of intimidation, legal manipulation, and infrastructural dominance. Restricted elevator access, hidden stairways, and secured maintenance shafts allow family enforcers to monitor movement throughout the building. Apartments are often “owned” by operatives or carefully vetted tenants, with rent payments functioning as protection fees or loyalty markers. The family also controls the building’s utilities, from power and water access to surveillance networks, ensuring that life inside the tower remains under their watchful eye.

The Bellanova Family’s operations are diverse: gambling dens, illicit trading, smuggling, extortion, and the manipulation of legal contracts all provide revenue. The family also maintains informal intelligence networks, leveraging knowledge of tenants’ corporate affiliations, disputes, and movements to expand their influence beyond the tower itself.

During the Corporate Wars, Bellanova Towers served as both refuge and operational hub. Its vertical design made it easy to defend, and its abandoned infrastructure allowed the family to operate independently while remaining mostly invisible to warring factions. After the wars, the Bellanova Family consolidated control, taking advantage of the tower’s strategic height, interconnected floors, and isolation from corporate oversight.

In the Modern Age, the Bellanova Family continues to dominate life within Bellanova Towers. They enforce a careful balance between intimidation and governance: overt oppression could provoke rebellion or corporate intervention, while lax control would invite rival gangs or criminal networks. The family thrives by maintaining their vertical territory, controlling commerce and information within the tower, and projecting influence outward through long-standing relationships, contractual manipulation, and selective enforcement.


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
        - formula.organization_names.contains("Bellanova Family")
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
