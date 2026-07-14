---
title: Filter Shrine
dg-publish: true
type: location
cover: "[[location_notfarsewer_filtershrine.webp]]"
created: 2026-05-08
modified: 2026-07-14
district: "[[Westreach]]"
parent: "[[Not Far Sewer]]"
associations:
  - "[[Cult of the Machine God]]"
tags:
---

# Notes

Place where [[Cult of the Machine God|Cultists of the Machine God]] worship the Machine Spirit that inhabits the Great Filter

- Unfortunately all but [[Sister Hera]] were eaten by sewer crocodiles
- The Filter had been broken, but [[Dorian Caldwell|Dorian]] was able to intimidate it into working again, at least for now

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
        - locations.contains("Filter Shrine")
    order:
      - file.name
      - brief
    image: note.cover
    cardSize: 240
    imageAspectRatio: 1.15

```



# Maps

```dataviewjs
const locationName = dv.current().file.name
  .toLowerCase()
  .replace(/\s/g, "")
  .replace(/[^a-z0-9]/g, "");

const locationImgs = dv.app.vault.getFiles()
  .filter(file =>
    file.path.startsWith("admin/assets/") &&
    file.extension === "webp" &&
    file.name.startsWith("location_") &&
    file.name.toLowerCase().includes(locationName)
  );

if (locationImgs.length === 0) { dv.paragraph("No images for this location"); } else {

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
    `<img src="/${file.path}" alt="/${file.basename}">`
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





