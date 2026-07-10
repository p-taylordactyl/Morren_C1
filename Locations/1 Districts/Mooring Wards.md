---
title: Mooring Wards
publish: true
aliases:
type: district
district:
cover: "[[location_MooringWards.webp]]"
created: 2026-06-01
modified: 2026-07-09
parent: "[[Old Valence]]"
associations:
  - "[[Mariner's Reach]]"
tags:
  - under_construction
---

# Notes

District home to [[Mariner's Reach]].

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
