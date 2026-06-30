---
title: Central Park
draft: false
aliases:
type: location
district:
cover: "[[location_CentralPark.webp]]"
created:
modified:
parent:
associations:
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
