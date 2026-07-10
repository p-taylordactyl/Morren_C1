---
title: Not Far Sewer
publish: true
type:
  - main location
cover:
district: "[[Westreach]]"
parent:
created: 2026-04-23
modified: 2026-07-09
associations:
  - "[[Sludge Farmers]]"
  - "[[Bellanova Family|Bellanovas]]"
  - "[[The Driftwarden]]"
  - "[[Sewer Goblins]]"
  - "[[Cult of the Machine God]]"
tags:
---


# Notes

- [[Crownlight Media]] made it sound like there is going to be some kind of attempt to "bring order" to the sewers

### Points of Interest

![[Location Index.base#Sublocations]]


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

