---
title: Pumping Station
publish: true
aliases:
  - Hot Pipe
type: location
cover: "[[location_PumpingStation.webp]]"
created: 2026-05-25
modified: 2026-07-06
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Titan Corporation]]"
  - "[[Box Boys]]"
tags:
---



# Notes

- controls the water flow to various locations near the [[Not Far Sewer]]
- The party defeated a nasty orange slime that was blocking a pipe underneath the station causing significant flow issues
- Previously controlled by the [[Titan Corporation]] until the party convinced the [[Box Boys]] to take it over in the hopes they could then negotiate to further improve [[Hood Station]]'s water flow.


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
