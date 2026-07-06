---
title: Filter Shrine
publish: true
type: location
cover: "[[location_notfarsewer_filtershrine.webp]]"
created: 2026-05-08
modified: 2026-07-06
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Cult of the Machine God]]"
tags:
---

# Notes

Place where [[Cult of the Machine God|Cultists of the Machine God]] worship the Machine Spirit that inhabits the Great Filter

- Unfortunately all but [[Sister Hera]] were eaten by sewer crocodiles
- The Filter had been broken, but [[Dorian Caldwell|Dorian]] was able to intimidate it into working again, at least for now

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





