---
title: Pipe Junction
publish: true
type: location
cover:
created: 2026-04-29
modified: 2026-07-06
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Bellanova Family]]"
tags:
---



# Notes

A Point of Interest in the [[Not Far Sewer]] controlled by smugglers associated with the [[Bellanova Family|Bellanovas]] and run by [[Rusk Ironline]].

- Contains a computer terminal that controls the forcefield surrounding the [[Filter Shrine]].

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
