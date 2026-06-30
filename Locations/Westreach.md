---
title: Westreach
draft: false
aliases:
type: district
district:
cover: "[[location_Westreach.webp]]"
created: 2026-05-25
modified: 2026-06-01
parent:
associations:
  - "[[The West Valence Saints]]"
tags:
---



# Description






# NPCs

![[NPC Index.base#Location]]




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
