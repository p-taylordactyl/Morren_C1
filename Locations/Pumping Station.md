---
title: Pumping Station
draft: false
aliases:
  - Hot Pipe
type: location
cover: "[[location_PumpingStation.webp]]"
created: 2026-05-25
modified: 2026-06-08
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Titan Corporation]]"
tags:
  - under_construction
---



# Description






# NPCs

![[NPC Index.base#Location]]




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
