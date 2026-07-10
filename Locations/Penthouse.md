---
title: Penthouse
publish: true
aliases:
type: location
district: "[[Cloud District]]"
cover: "[[location_ThePenthouse.webp]]"
created: 2026-06-08
modified: 2026-07-09
parent: "[[BB Megatower]]"
associations:
tags:
---



# Notes

- Top of the BB Megatower, visited for quest [[Penthouse Signal Rehearsal]]
- space was supposed to be abandoned but actually appears to be some kind of bougie OogBnB/rental situation 


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
