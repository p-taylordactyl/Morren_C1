---
title: Hood Station
draft: false
aliases:
  - Hood Station
type: location
district: "[[Cloud District]]"
parent:
cover: "[[location_hoodstation_0.webp]]"
created: 2026-04-23
modified: 2026-07-06
associations:
  - "[[Factions + Groups/Hood Station/Hood Station|Hood Station]]"
  - "[[Morrgen's Community Center]]"
  - "[[The Redacted]]"
  - "[[Endline Garage]]"
  - "[[Iron Form Dojo]]"
  - "[[Protective Association for Wayward and Neglected Strays|PAWNS]]"
  - "[[The Troupe]]"
tags:
---
# Description

The old subway station that has become home to a [[Factions + Groups/Hood Station/Hood Station|community]] of folks looking to find a way to survive a little less under the thumb of the corpos and criminals.

Origin and current home base of Hood's Watch.

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
