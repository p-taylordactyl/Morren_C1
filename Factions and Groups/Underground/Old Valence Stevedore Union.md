---
title: The Old Valence Stevedore Union
dg-publish: true
aliases:
  - Stevedores
  - Old Valence Stevedore Union
type: underground faction
cover: "[[faction_oldvalencestevedoreunion.webp]]"
created: 2026-04-23
modified: 2026-07-16
associations:
locations:
  - "[[Stevedore Union Main Harbor]]"
tags:
---

![[faction_oldvalencestevedoreunion.webp]]

# Description

The Old Valence Stevedore Union is the officially sanctioned labor organization responsible for cargo handling, port operations, and harbor oversight throughout Old Valence. Its members staff the docks, operate cranes, manage customs intake, and, most importantly, hold the majority of Harbor Master appointments. Publicly, the Union presents itself as a stabilizing civic institution that keeps maritime trade moving through one of Morren’s most complex port systems.

Behind that public role, the Union operates as a deeply entrenched criminal syndicate.

Control of the harbor grants control over logistics, and the Union leverages that authority to facilitate black market trade on a massive scale. Cargo manifests are altered, inspections are delayed or selectively enforced, and entire containers are rerouted to secondary docks, flood-access tunnels, or bonded warehouses under Union control. Smuggled goods, unregistered materials, and restricted technologies move through Old Valence with Union approval, disguised by legitimate shipping traffic.

The Harbor Masters are the Union’s central asset. These officials determine docking priority, unloading zones, inspection schedules, and storage assignments. Through these mechanisms, the Union extracts fees, favors, and long-term obligations from shipping companies, smugglers, and corporate intermediaries. Ships that refuse cooperation often find themselves trapped in bureaucratic limbo, suffering costly delays, damaged cargo, or unexplained equipment failures.

Internally, the Union maintains the outward structure of a labor organization, complete with committees, contracts, and arbitration boards. In reality, senior stewards function as syndicate leadership, foremen act as enforcers and fixers, and select dock crews are trusted with sensitive operations. Many rank-and-file members are only partially aware of the Union’s deeper activities, but loyalty is reinforced through job security, protection, and access to unofficial income streams.

To the public, the Old Valence Stevedore Union is a necessary institution that keeps the docks working. To those who understand the harbor’s true rhythms, it is clear that nothing enters or leaves Old Valence without the Union’s consent.




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
        - formula.organization_names.contains("Old Valence Stevedore Union")
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

![[0 Session Index.base#Encounters]]