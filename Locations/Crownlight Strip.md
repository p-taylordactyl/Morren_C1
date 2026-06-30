---
aliases:
type: district
cover: "[[location_CrownlightStrip.webp]]"
created: 2026-06-01
modified: 2026-06-01
parent:
associations:
  - "[[Crownlight Media]]"
  - "[[NovaStyle Group]]"
  - "[[Factions + Groups/Corporate Factions/Paragon Soundworks|Paragon Soundworks]]"
  - "[[Infinity Plaza Mall]]"
  - "[[Valencian Seahorses]]"
tags:
  - under_construction
---



# Description






# NPCs

![[NPC Index.base#Location]]




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
