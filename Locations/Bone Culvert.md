---
title: Bone Culvert
draft: false
type: location
cover: "[[location_BoneCulvert.webp]]"
created: 2026-05-21
modified: 2026-06-01
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
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
