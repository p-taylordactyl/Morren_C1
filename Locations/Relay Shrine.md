---
title: Relay Shrine
publish: true
aliases:
type: location
cover: "[[location_RelayShrine.webp]]"
created: 2026-06-29
modified: 2026-07-09
district: "[[Cloud District]]"
parent: "[[Tier 2]]"
associations:
  - "[[Cult of the Machine God]]"
tags:
---



# Notes

A shrine to the [[Cult of the Machine God|Machine God]] located on [[Tier 2]] of the [[BB Megatower]].

- the priests here helped the party trace the cell number of the [[Stalker]]
- [[Katriel Buchanon|Kat]] discovered that one of the door levers at the shrine was broken such that the whole place would explode if it was pulled. Fortunately the priests fixed it correctly.


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
