---
title: Relay Shrine
publish: false
aliases:
type: location
cover: "[[location_RelayShrine.webp]]"
created: 2026-06-29
modified: 2026-07-06
district: "[[Cloud District]]"
parent: "[[BB Megatower]]"
associations:
tags:
  - under_construction
---



# Notes

A shrine to the [[Cult of the Machine God|Machine God]] located on [[Tier 2]] of the [[BB Megatower]].

- the priests here helped us


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
