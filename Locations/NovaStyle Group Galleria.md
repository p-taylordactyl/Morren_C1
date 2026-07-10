---
title: NovaStyle Group Galleria
publish: true
aliases:
type: location
district: "[[Crownlight Strip]]"
cover: "[[location_NovaStyleGroupGalleria.webp]]"
created: 2026-06-01
modified: 2026-07-09
parent:
associations:
  - "[[NovaStyle Group]]"
tags:
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
