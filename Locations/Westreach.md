---
title: Westreach
publish: true
aliases:
type: district
cover: "[[location_Westreach.webp]]"
created: 2026-05-25
modified: 2026-07-06
parent: "[[Old Valence]]"
associations:
  - "[[West Valence Saints]]"
tags:
---



# Notes

District notably under the control of the [[West Valence Saints]] - though the harbor area belongs to the [[Old Valence Stevedore Union]].


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
