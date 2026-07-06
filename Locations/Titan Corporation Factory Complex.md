---
title: Titan Corporation Factory Complex
publish: false
aliases:
type: location
district: "[[Cloud District]]"
cover: "[[location_TitanCorporationFactoryComplex.webp]]"
created: 2026-06-01
modified: 2026-07-06
parent:
associations:
  - "[[Titan Corporation]]"
tags:
---

# Notes

Primary location of [[Titan Corporation]] factories. Site of the accident that led to many deaths and injuries, including  [[Lorcan O'Malley]], the loss of [[Róisín Ward]]'s arm, and the subsequent beating of [[Augustin Devereaux]] (the responsible party)  into a coma.




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
