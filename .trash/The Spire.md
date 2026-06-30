---
type: location
created: 2026-03-27
modified: 2026-03-27
associations:
tags:
cover:
---



# Description






# NPCs






# Maps

```dataviewjs
const currentTitle = dv.current().file.name.toLowerCase();

const pngFiles = app.vault.getFiles()
  .filter(file => 
    file.extension === 'png' && 
    file.name.includes(currentTitle)
  );

pngFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));
```
eso

