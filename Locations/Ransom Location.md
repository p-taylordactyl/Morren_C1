---
title: Ransom Location
publish: false
aliases:
type: location
cover: "[[location_ransomlocation.webp]]"
created: 2026-07-09
modified: 2026-07-09
district: "[[Cloud District]]"
parent: "[[BB Megatower]]"
associations:
  - "[[Stalker]]"
tags:
---



# Notes

- the location given by the party's [[Stalker]] to trade either [[Maximilius Adkins|Max]] or [[Keena O'Malley|Keena]] for [[Malcolm Oublier]].
- appears to be some kind of cargo warehouse



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
