---
title: Quiet Place
draft: false
aliases:
type: location
district:
cover: "[[location_QuietPlace.webp]]"
created: 2026-06-29
modified: 2026-06-30
parent: "[[BB Megatower]]"
associations:
tags:
  - under_construction
---



# Notes






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
