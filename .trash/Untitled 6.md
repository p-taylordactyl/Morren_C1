---
type: location
cover: "[[location_Untitled]]"
created: 2026-05-08
modified: 2026-05-08
district:
parent:
associations:
tags:
---



# Description






# NPCs

![[NPC Index.base#Location]]




# Maps

```dataviewjs
const placeTitle = dv.current().file.name.toLowerCase().replace(/\s/g, "");

const imgFiles = app.vault.getFiles()
  .filter(file => 
    file.extension === 'webp' && 
    file.name.startsWith("location_" + placeTitle)
  );

imgFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));
```
