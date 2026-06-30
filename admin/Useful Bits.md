---
title: Useful Bits
draft: true
type: meta
modified: 2026-03-26
created: 2026-03-26
---

## Location Images Query

> [!NOTE]
>dataviewjs
> /** Query to embed all webp images starting with location_filename (converted to lowercase, spaces removed). */
> 
> const placeTitle = dv.current().file.name.toLowerCase().replace(/\s/g, "");
> 
> const imgFiles = app.vault.getFiles()
>   .filter(file => 
>     file.extension === 'webp' && 
>     file.name.startsWith("location_") &&
>     file.name.includes(placeTitle))
> 
> imgFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));
> 


# Variables

<% tp.file.title.replace(/ /g, '') %>  file title with spaces removed

