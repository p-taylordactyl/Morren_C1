---
dg-publish: true
aliases:
  - Novastyle
type: corporate faction
cover: "[[faction_novastylegroup.webp]]"
created: 2026-04-23
modified: 2026-08-23
associations:
locations:
  - "[[NovaStyle Group Galleria]]"
tags:
---

![[faction_novastylegroup.webp||banner p+t]]

# Description

NovaStyle Group is Morren’s leading fashion conglomerate, a corporation that has turned clothing into a city-wide instrument of influence and identity. Publicly, it presents itself as the pinnacle of style, offering cutting-edge designs, immersive fashion shows, and personalized wardrobe experiences that define social hierarchy and cultural trends across the Archipelago. Its emblem—a sleek, angular glyph evoking a starburst woven into a thread—adorns everything from citywide holo-ads to exclusive apparel lines, signaling both luxury and social cachet. Wearing NovaStyle is more than a choice; it is a statement of belonging, prestige, and modernity.

Behind the public image, NovaStyle functions as a behavioral and emotional engineering firm. Its designers, technomancers, and arcane stylists collaborate to craft garments and accessories that subtly influence perception, posture, and even emotional states. Fabrics are imbued with nanofibers, resonance threads, or minor enchantments that enhance confidence, project authority, or invoke desire, all calibrated through predictive analytics and biometric feedback. Entire districts of Morren are outfitted through curated retail streams, and personal devices subtly recommend NovaStyle-approved ensembles to maintain conformity to aesthetic trends.

During the Corporate Wars, NovaStyle Group played a critical but understated role. Exclusive “war couture” campaigns were launched, distributing garments that projected loyalty to corporate alliances while subtly undermining opposing factions’ cohesion. Recruitment drives and social events orchestrated by NovaStyle were used to track, influence, and incentivize populations in contested zones, while covertly embedding identification sigils and surveillance threads into public clothing distributions. These campaigns often preempted military operations, softening resistance before battles even began.

In the Modern Age, NovaStyle Group remains the definitive arbiter of appearance and social signaling. Rival factions rely on its expertise to craft public images, immersive performances, and propaganda spectacles. Independent designers are marginalized unless they operate within NovaStyle’s distribution network, while the company quietly monitors urban districts for emergent fashion deviations that could indicate rebellion, subculture formation, or political dissent. Though it holds no armies of its own, NovaStyle wields cultural dominance through clothing, style, and the power to shape desire.



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
        - formula.organization_names.contains("NovaStyle Group")
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
