---
dg-publish: true
type: district
aliases:
cover: "[[location_FloodedZone.webp]]"
created: 2026-05-25
modified: 2026-07-27
parent: "[[Old Valence]]"
associations:
  - "[[Ghosts of the Flooded Zone]]"
tags:
---

# Notes

Home of the [[Ghosts of the Flooded Zone]].

### Points of Interest

```base
filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: District-embed
    filters:
      and:
        - district.contains("Flooded Zone")
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true
```



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
