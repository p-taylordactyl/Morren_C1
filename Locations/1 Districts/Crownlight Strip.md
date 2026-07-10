---
title: Crownlight Strip
publish: true
aliases:
type: district
cover: "[[location_CrownlightStrip.webp]]"
created: 2026-06-01
modified: 2026-07-09
parent: "[[Old Valence]]"
associations:
  - "[[Crownlight Media]]"
  - "[[NovaStyle Group]]"
  - "[[Factions + Groups/Corporate/Paragon Soundworks|Paragon Soundworks]]"
  - "[[Infinity Plaza Mall]]"
  - "[[Valencian Seahorses]]"
tags:
  - under_construction
---



# Notes

District home to the majority of the Corporate Factions.

- [[Crownlight Media]]
- [[NovaStyle Group]]
- [[Locations/Paragon Soundworks|Paragon Soundworks]]
- [[Infinity Plaza Mall]]
- [[Valencian Seahorses]]


### Points of Interest

![[0 Location Index.base#District]]




# NPCs

![[0 NPC Index.base#Location-embedonly]]




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
