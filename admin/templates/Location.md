---
title: <% tp.file.title %>
publish: false
aliases:
type: location
cover: "[[location_<% tp.file.title.replace(/ /g, '') %>.webp]]"
created:
modified:
district:
parent:
associations:
tags:
  - under_construction
---



# Notes






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
