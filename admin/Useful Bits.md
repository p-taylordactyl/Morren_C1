---
title:
publish: false
type: meta
modified: 2026-03-26
created: 2026-03-26
---

## Location Images Query

> [!note] Original (outdated)
```
dataviewjs
/** Query to embed all webp images starting with location_filename (converted to lowercase, spaces removed). */

const placeTitle = dv.current().file.name.toLowerCase().replace(/\s/g, "");
 
 const imgFiles = app.vault.getFiles()
   .filter(file => 
     file.extension === 'webp' && 
     file.name.startsWith("location_") &&
     file.name.includes(placeTitle))
 
 imgFiles.forEach(file => dv.paragraph(`![[${file.path}]]`));
```


> [!note] Updated for Quartz as of 7/10/26
>
>  
```
dataviewjs  
/* Query to embed all webp images starting with location_filename (converted to lowercase, spaces removed).*/

const locationName = dv.current().file.name.toLowerCase().replace(/\s/g, "");

const imgFolder = app.vault.getAbstractFileByPath("admin/assets"); 

const locationImg = imgFolder.children
  .filter(file => 
    file.extension === 'webp' && 
    file.name.startsWith("location_") &&
    file.name.includes(locationName)
    );
 
/* Sort based on depth (# of underscores) and then numerically */   
locationImg.sort((a, b) => {
  const depthA = a.basename.split("_").length;
  const depthB = b.basename.split("_").length;

    if (depthA !== depthB) return depthA - depthB;

    return a.basename.localeCompare(b.basename, undefined, {
      numeric: true,
      sensitivity: "base",
    });
});

/* Emit images as html with css hook */
const locationEmit = `
<div class="location-images">
${locationImg
    .map(file => `<img src="${file.path}" alt="${file.basename}">`)
    .join("\n")}
</div>
`;

dv.paragraph(locationEmit);

```

> [!NOTE] Updated for Quartz Version 2 (tree hierarchy) - not currently in use
> 
```
dataviewjs

const locationName = dv.current()
  .file.name
  .toLowerCase()
  .replace(/\s/g, "")
  .replace(/[^a-z0-9]/g, "");

const imgFolder = app.vault.getAbstractFileByPath("admin/assets");

/*
 Find all location images that belong to this location or its children.
 */

const locationImgs = imgFolder.children
  .filter(file =>
    file.extension === "webp" &&
    file.name.startsWith("location_") &&
    file.name.toLowerCase().includes(locationName)
  );

if (!locationImgs) { dv.paragraph("No images for this location"); } else {

/*
 Convert filename into hierarchy information.
*/

function parseLocationPath(file) {

  let base = file.basename
    .toLowerCase()
    .replace(/^location_/, "");

  // Remove image metadata suffix
  base = base.split("-")[0];

  return base.split("_");
}


/*
 Convert normalized location IDs back into readable labels.

 Uses existing Obsidian notes when possible.
 Otherwise falls back to title casing.
*/

const locationNotes = dv.pages('"Locations"')
  .map(p => ({
    id: p.file.name
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/[^a-z0-9]/g, ""),
    name: p.file.name
  }));


function getDisplayName(id) {

  const existing = locationNotes.find(
    loc => loc.id === id
  );

  // Use actual note title if this location has a note
  if (existing) {
    return existing.name;
  }

  // Fallback for locations without notes
  return id
    .replace(/([a-z])([0-9])/g, "$1 $2")
    .replace(/([0-9])([a-z])/g, "$1 $2")
    .replace(/\b\w/g, c => c.toUpperCase());
}


/*
 Determine which location group the image belongs to.

 For example:

 location_..._funstreetshoppingcenter_furniturestore-1

 returns:

 furniturestore
*/

function getLowestLocation(file) {

  const path = parseLocationPath(file);

  const currentIndex = path.indexOf(locationName);

  if (currentIndex === -1) {
    return null;
  }

  return {
    id: path[path.length - 1],
    depth: path.length,
    path
  };
}


/*
 Group images by lowest-level location.
*/

const tree = {};

function addToTree(path, file) {

  let node = tree;

  path.forEach((segment, index) => {

    if (!node[segment]) {
      node[segment] = {
        _images: [],
        _children: {}
      };
    }

    if (index === path.length - 1) {
      node[segment]._images.push(file);
    } else {
      node = node[segment]._children;
    }

  });

}


for (const file of locationImgs) {

  const location = getLowestLocation(file);

  if (!location) continue;

  addToTree(location.path, file);

}

function renderTree(node, depth = 0) {

  return Object.entries(node)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, data]) => {

      let output = `
<div class="location-group depth-${depth}">

<div class="location-title">
${getDisplayName(id)}
</div>
`;

      if (data._images.length > 0) {

        output += `
<div class="location-assets">

${data._images
  .sort((a,b) =>
    a.basename.localeCompare(
      b.basename,
      undefined,
      {
        numeric:true,
        sensitivity:"base"
      }
    )
  )
  .map(file =>
    `<img src="${file.path}" alt="${file.basename}">`
  )
  .join("\n")}

</div>
`;

      }

      output += renderTree(data._children, depth + 1);

      output += `
</div>
`;

      return output;

    })
    .join("\n");

}


/*
 Render HTML for Quartz.

 Keeps images as normal HTML.
*/

const locationQuartz = `
<div class="location-images">

${renderTree(tree)}

</div>
`;

dv.paragraph(locationQuartz);

}
```

# Variables

UsefulBits  file title with spaces removed



.location-images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

.location-images img {
    width: 100%;
    height: auto;
}



