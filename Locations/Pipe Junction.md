---
title: Pipe Junction
draft: false
type: location
cover:
created: 2026-04-29
modified: 2026-05-25
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Bellanova Family]]"
tags:
---



# Description

A Point of Interest in the [[Not Far Sewer]] controlled by smugglers associated with the [[Bellanova Family|Bellanovas]]. 

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
