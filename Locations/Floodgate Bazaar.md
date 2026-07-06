---
title: Floodgate Bazaar
publish: true
aliases:
  - bazaar
type: location
cover: "[[location_Bazaar]]"
created: 2026-05-08
modified: 2026-07-06
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Sewer Goblins]]"
tags:
---



# Notes

Market run by the [[Sewer Goblins|goblins]] living in the [[Not Far Sewer]].

# NPCs

![[NPC Index.base#Location - embedonly]]




# Maps

```dataviewjs
const placeTitle = dv.current().file.name.toLowerCase().replace(/\s/g, "");

const imgFiles = app.vault.getFiles()
  .filter(file => 
    file.extension === 'webp' && 
    file.name.startsWith("location_" + placeTitle)
  );

imgFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));
```

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