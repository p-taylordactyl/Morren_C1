---
title: Floodgate Bazaar
draft: false
aliases:
  - bazaar
type: location
cover: "[[location_Bazaar]]"
created: 2026-05-08
modified: 2026-06-01
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Sewer Goblins]]"
tags:
  - under_construction
---



# Description






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
