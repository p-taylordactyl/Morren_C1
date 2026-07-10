---
title: The Scar
publish: true
aliases:
  - Scar
type: district
cover: "[[location_TheScar.webp]]"
created: 2026-06-01
modified: 2026-07-09
parent: "[[Old Valence]]"
associations:
  - "[[Old Guard]]"
tags:
  - under_construction
---
# Notes

Home of the [[Old Guard]].

### Points of Interest

![[Location Index.base#District]]

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
