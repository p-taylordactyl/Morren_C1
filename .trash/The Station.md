---
type: location
cover:
parent: "[[Hood Station]]"
created: 2026-04-23
modified: 2026-04-23
associations:
tags:
---



# Description






# NPCs






# Maps

```dataviewjs

function sanitizeAlphanumeric(input) {
  // Keep only letters and numbers
  return input.replace(/[^a-zA-Z0-9]/g, '');
}

const currentTitle = dv.current().file.name.toLowerCase();

const pngFiles = app.vault.getFiles()
  .filter(file => 
    file.extension === 'png' && 
    file.name.includes(currentTitle)
  );

pngFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));
```

