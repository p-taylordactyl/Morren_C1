---
title: The Kitchen
publish: true
aliases:
type: location
cover: "[[location_TheKitchen.webp]]"
created: 2026-07-09
modified: 2026-07-09
district: "[[Cloud District]]"
parent: "[[Tier 3]]"
associations:
tags:
---



# Notes

- supposed location on [[Tier 3]] of the [[BB Megatower]] where a man named [[Morgo]] makes the drug known as Red Thunder

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
