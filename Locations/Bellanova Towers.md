---
title: Bellanova Towers
publish: true
aliases:
type: location
district: "[[Cloud District]]"
cover: "[[location_BellanovaTowers.webp]]"
created: 2026-06-01
modified: 2026-07-09
parent:
associations:
  - "[[Bellanova Family]]"
tags:
  - under_construction
---



# Notes

Massive towers of tenement housing owned and controlled by the [[Bellanova Family]].



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
