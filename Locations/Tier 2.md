---
title: Tier 2
publish: true
aliases:
type: location
cover: "[[location_Tier2.webp]]"
created: 2026-07-09
modified: 2026-07-09
district:
parent:
associations:
tags:
  - under_construction
---


# Notes

### Points of Interest

![[0 Location Index.base#Sublocations]]


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
