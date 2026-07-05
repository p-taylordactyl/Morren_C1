---
title: Titan Corporation Factory Complex
draft: false
aliases:
type: location
district: "[[Cloud District]]"
cover: "[[location_TitanCorporationFactoryComplex.webp]]"
created: 2026-06-01
modified: 2026-06-01
parent:
associations:
  - "[[Titan Corporation]]"
tags:
  - under_construction
---



# Description






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
