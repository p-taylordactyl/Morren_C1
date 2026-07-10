---
title: Flooded Zone
publish: true
aliases:
type: district
cover: "[[location_FloodedZone.webp]]"
created: 2026-05-25
modified: 2026-07-09
parent: "[[Old Valence]]"
associations:
  - "[[Ghosts of the Flooded Zone]]"
tags:
---



# Notes

Home of the [[Ghosts of the Flooded Zone]].

### Points of Interest

![[0 Location Index.base#District]]

# NPCs

![[0 NPC Index.base#Location - embedonly]]




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
