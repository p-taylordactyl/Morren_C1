---
title: Bone Culvert
publish: true
type: location
cover: "[[location_BoneCulvert.webp]]"
created: 2026-05-21
modified: 2026-07-06
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
tags:
---
# Notes

- creepy tunnel full of undead and scavengers
- [[Vesh Hollowbone]] helped the party fight off undead trying to complete a ritual but died during the combat

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
