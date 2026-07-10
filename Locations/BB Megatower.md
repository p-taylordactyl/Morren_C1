---
title: BB Megatower
publish: true
aliases:
type:
  - main location
district: "[[Cloud District]]"
cover: "[[location_BBMegatower.webp]]"
created: 2026-06-03
modified: 2026-07-09
parent: "[[Bellanova Towers]]"
associations:
  - "[[Bellanova Family|Bellanova Family]]"
tags:
---

# Notes

- Megatower owned by the [[Bellanova Family|Bellanovas]]

### Points of Interest

![[0 Location Index.base#Sublocations]]
### # Quests

![[0 Quest Index.base#location -embedonly]]


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
