---
title: Energy Siphon Tower
publish: true
aliases:
type: location
district: "[[Crownlight Strip]]"
cover: "[[location_EnergySiphonTower.webp]]"
created: 2026-06-01
modified: 2026-07-06
parent: "[[Old Valence]]"
associations:
  - "[[Oligarchs]]"
tags:
---

# Notes

A massive tower siphoning energy from [[Old Valence]] up to the floating cities above, where the [[Oligarchs]] live.


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
