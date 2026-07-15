---
title: The Scar
dg-publish: true
aliases:
  - Scar
type: district
cover: "[[location_TheScar.webp]]"
created: 2026-06-01
modified: 2026-07-14
parent: "[[Old Valence]]"
associations:
  - "[[Old Guard]]"
tags:
  - under_construction
---
# Notes

Home of the [[Old Guard]].

### Points of Interest

```base
filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: table
    name: District-embed
    filters:
      and:
        - district.contains("The Scar")
        - parent.isEmpty()
```

# NPCs

![[0 NPC Index.base#Location-embedonly]]




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
