---
title: Neon Corridor
publish: true
aliases:
type: location
district: "[[Cloud District]]"
cover: "[[location_NeonCorridor.webp]]"
created: 2026-06-22
modified: 2026-07-09
parent: "[[Tier 2]]"
associations:
tags:
---



# Notes

Area of [[Tier 2]] of the [[BB Megatower]] controlled by an orc named [[Bron]].


# NPCs

![[NPC Index.base#Location - embedonly]]


# Maps

```dataviewjs
/** Query to embed all webp images starting with location_filename (converted to lowercase, spaces removed). */

const placeTitle = dv.current().file.name.toLowerCase().replace(/\s/g, "");

const imgFiles = app.vault.getFiles()
  .filter(file => 
    file.extension === 'webp' && 
    file.name.startsWith("location_") &&
    file.name.includes(placeTitle))

imgFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));

```
