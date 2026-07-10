---
title: Quiet Place
publish: true
aliases:
type: location
cover: "[[location_QuietPlace.webp]]"
created: 2026-06-29
modified: 2026-07-09
district: "[[Cloud District]]"
parent: "[[Tier 2]]"
associations:
tags:
---



# Notes

- the location of the cursed video game Hamlet Keeper, which was behind the mysterious disappearances in the quest [[The Silent Floor]]
- has good enough beds for comfortable rest
- [[Katriel Buchanon|Kat]] helped [[Stonespear]] steal from a [[Cael Foundation]] ATM outside
- 

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
