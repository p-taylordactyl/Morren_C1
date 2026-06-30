---
type: location
cover:
parent: Ascedia
created: 2026-03-27
modified: 2026-03-27
associations:
tags:
---



# Description






# NPCs






# Maps

```dataviewjs

const Title = dv.current().file.name.toLowerCase();
const currentTitle = Title.replace(/\s+/g, "").trim();
  
const pngFiles = app.vault.getFiles()
  .filter(file => 
    file.extension === 'png' && 
    file.name.includes(currentTitle)
  );

pngFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));

```

