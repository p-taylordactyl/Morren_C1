---
title: Cloud District
dg-publish: true
aliases:
type: district
cover: "[[location_CloudDistrict.webp]]"
created: 2026-05-25
modified: 2026-07-10
parent: "[[Old Valence]]"
associations:
  - "[[Hood Station/Hood Station|Hood Station]]"
  - "[[Titan Corporation]]"
  - "[[Bellanova Family]]"
tags:
---



# Notes

District home to [[Hood Station]], the [[Titan Corporation]], and the [[Bellanova Family]].

### Points of Interest

![[0 Location Index.base#District-embedonly]]

# NPCs

![[0 NPC Index.base#Location-embedonly]]




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
![[0 Location Index.base#District-embedonly]]