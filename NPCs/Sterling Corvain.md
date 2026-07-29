---
dg-publish: true
type: npc
aliases:
  - stalker
  - Stalker
cover: "[[npc_mysteryburgerman.webp]]"
created: 2026-06-22
modified: 2026-07-29
disposition:
  - neutral
  - friendly
  - unknown
  - enemy
organizations:
  - "[[Titan Corporation]]"
associates:
  - "[[Sterling Corvain]]"
  - "[[Augustin Devereaux]]"
  - "[[Sterling Corvain]]"
brief: A mysterious individual or group that keeps sending Gideon blackmail material against the party
status:
  - alive
locations:
  - "[[BB Megatower]]"
  - unknown
tags:
  - merge_needed
---

![[npc_mysteryburgerman.webp]]

# Description

A mysterious connoisseur of the various burgers available in the [[BB Megatower]].

# Notes

- 1st encounter outside of Krystal's in the [[BB Megatower]]
- bestowed upon [[Silas Sorelli|Silas]] the title of "Burger Destroyer" but said he'd remember Silas's actual name
- 2nd encounter on [[Tier 2]] where he gifted [[Maximilius Adkins|M[[Sterling Corvain]]of chili cheese burgers
- Is revealed to be the party's [[Stalker]]
- Tortured [[Maximilius Adkins|Max]] for 7 days after accepting him in trade for [[Malcolm Oublier|Malcolm]]
- apparently lives in constant pain

# Session Mentions

```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  join(map(locations, (l) => "• " + string(l)), "<br>") AS "Session Locations"
FROM ""
WHERE type = "session_note"
  AND file.folder != "admin/templates"
  AND contains(this.file.inlinks, file.link)
SORT file.name ASC, locations ASC
```


# Description

A mysterious individual or group that has been tracking/recording the party via a drone and keeps texting [[Gideon Oublier|Gideon]]'s phone with blackmail material

### Notes

- seems to have been recording the party since the initial venture into the [[Not Far Sewer]]
- kidnapped [[Malcolm Oublier]] from a casino and demands [[Keena O'Malley|Keena]] or [[Maximilius Adkins|Max]] in trade
- the party captured their drone outside the [[Quiet Place]] 

### Known Material

- Kat/Max/Dorian/Keena talking to [[Brug]]
- Augustin Devereaux
- [[Pipe Junction]] namedropping [[Prospera Bellanova]]
- Kat whaling on the corpse of the final [[West Valence Saints|Saint]] in the first fight in the BB Megatower
- Max eating burgers
- probably everything that's happened tbh

### Information Discovered

- affiliated with the [[Titan Corporation]]
- likely related in some way to [[Augustin Devereaux]]
- Holy shit, it's actually the [[Sterling Corvain]]

# Session Mentions

```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  join(map(locations, (l) => "• " + string(l)), "<br>") AS "Session Locations"
FROM ""
WHERE type = "session_note"
  AND file.folder != "admin/templates"
  AND contains(this.file.inlinks, file.link)
SORT file.name ASC, locations ASC
```
