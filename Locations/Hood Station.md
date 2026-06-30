---
title: Hood Station
draft: false
aliases:
  - Hood Station
type: location
district: "[[Cloud District]]"
parent:
cover:
created: 2026-04-23
modified: 2026-06-08
controlled by: "[[Factions + Groups/Hood Station/Hood Station|Hood Station]]"
associations:
  - "[[Factions + Groups/Hood Station/Hood Station|Hood Station]]"
tags:
  - under_construction
---
# Description

The old subway station that has become home to the members of 

# Controlling Faction




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
