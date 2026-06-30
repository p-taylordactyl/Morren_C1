---
type: location
cover:
parent:
created:
modified:
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

