---
dg-publish: true
type: npc
aliases:
  - beggar
cover: "[[npc_keenavisionbeggar.webp]]"
created: 2026-07-09
modified: 2026-08-03
disposition:
  - neutral
  - unknown
organizations:
associates:
brief: A blind and mute beggar that appeared in one of Keena's visions with a message that he must die
tags:
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - "[[Tier 2]]"
---

![[npc_KeenaVisionBeggar.webp|537]]

# Description

A blind and mute beggar living on [[Tier 2]] of the [[BB Megatower]]. The night before encountering him, [[Keena O'Malley|Keena]] had a [[Keena O'Malley#Betrayer Vision|vision]] of the beggar with the message: "Betrayer. Sinner. He must die." 

# Notes

### Keena's Interrogation

Is he originally from the BB Megatower? 
	No

Did he ever work for one of the big corporations like the [[Titan Corporation]]?
	No

What about a criminal group like the [[Box Boys]] or the [[West Valence Saints|Saints]]?
	No

He then shows her a tattoo of a symbol of [[Morronel]] on his arm.

Do you follow Morronel?
	Yes

Did you ever betray Morronel?
	No

The man seems to be getting nervous about this line of questioning.

Did you follow the [[Doctrine of Ordained Authority]]? 
	A "kind of" hand gesture. He then points up before pointing at his ears and head, and then at the symbol of Morronel. Keena doesn't understand, and he repeats the gesture a few times to no avail.

Did Morronel take away his tongue, or was he otherwise punished somehow by Morronel?
	No and no.

Was he punished by someone who followed a different order of Morronel?
	No

But he was punished by someone else, it just wasn't to do with religion?
	Yes

Was he punished for some kind of wrongdoing?
	A vague gesture that seems to indicate "maybe" or "kind of"

Did you do something wrong? Was something wrong done to you?
	No and no.

He gestures to himself, and then makes a W shape with his fingers, coming at himself. 

Keena doesn't understand what that means. The beggar seems unsettled by the questioning and is getting ready to leave.

Keena asks if he's here every day and he shrugs in like a "probably" sort of way before heading out.

# Session Mentions

```dataviewjs
function toArray(val) {
  return Array.isArray(val) ? val : (val ? [val] : []);
}

function parseLocationTree(locations) {
  return toArray(locations).map(raw => {
    const str = raw.toString();
    const match = str.match(/^(>+)/);
    const depth = match ? match[1].length : 0;
    const text = match ? str.slice(match[1].length) : str;
    return { depth, text };
  });
}

function buildNestedList(items) {
  return items.map(item => {
    const indent = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(item.depth);
    const bullet = item.depth === 0 ? "•" : "◦";
    return `${indent}${bullet} ${item.text}`;
  }).join("<br>");
}

const currentPath = dv.current().file.path;
const inlinkPaths = toArray(dv.current().file.inlinks).map(l => l.path);

const rows = dv.pages()
  .where(p => p.type === "session_note" && p.file.folder !== "admin/templates"
    && inlinkPaths.includes(p.file.path))
  .sort(p => p.file.name, "asc");

dv.table(
  ["Session", "Session Locations"],
  rows.map(p => [
    `${p.file.link}`,
    buildNestedList(parseLocationTree(p.locations))
  ])
);
```
