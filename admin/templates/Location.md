---
title: <% tp.file.title %>
dg-publish: false
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

### Points of Interest


![[0 Location Index.base#Sublocations-embed]]




# NPCs

```base
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
views:
  - type: cards
    name: Location-embedonly
    filters:
      and:
        - locations.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
    image: note.cover
    cardSize: 240
    imageAspectRatio: 1.15

```


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
