---
dg-publish: false
---

NPC Index


Quest Index
- [ ] 






# NPC Index

- [x] location embed final version
- [x] update location template
- [x] update districts
- [x] update locations
- [x]  organization embed final version
- [x] update faction and group templates
- [x] update factions and groups

### Location Note Embed
filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  location_names: locations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Location-embedonly
    filters:
      and:
        - formula.location_names.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.15



> [!success] Hood Station note embed (or other faction/location combo notes)
> 
> filters:
>   and:
>     - type == "npc"
>     - file.folder != "admin/templates"
> formulas:
>   location_names: locations.join(", ")
>   organization_names: organizations.join(", ")
>   cover_url: '"https://hoodswatch.vercel.app/img/user/admin/assets/" + cover.toString().replace("[[", "").replace("]]", "")'
> views:
>   - type: cards
>     name: Location-embedonly
>     filters:
>       or:
>         - formula.location_names.contains("Hood Station")
>         - formula.organization_names.contains("Hood Station")
>     order:
>       - file.name
>       - brief
>     image: formula.cover_url
>     cardSize: 240
>     imageAspectRatio: 1.15


> [!recite] Debug Version (remove org if not hood station)
> filters:
>   and:
>     - type == "npc"
>     - file.folder != "admin/templates"
> formulas:
>   location_names: locations.join(", ")
>   organization_names: organizations.join(", ")
>   cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
>   test_toString: cover.toString()
>   test_replace_only: cover.replace("[[", "").replace("]]", "")
>   test_split: cover.split("(")[1].replace(")", "").trim()
> 
> views:
>   - type: cards
>     name: Location-embedonly
>     filters:
>       or:
>         - formula.location_names.contains("<%tp.file.title%>")
>         - formula.organization_names.contains("<%tp.file.title%>")
>     order:
>       - file.name
>       - brief
>     image: formula.cover_url
>     cardSize: 240
>     imageAspectRatio: 1.15
>   - type: table
>     name: Debug
>     order:
>       - file.name
>       - cover
>       - formula.test_split
>       - formula.cover_url
>       - formula.test_toString
>       - formula.test_replace_only



### Faction and Group Note Embed

filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
formulas:
  organization_names: organizations.join(", ")
  cover_url: 'if(cover.contains("("), cover.split("(")[1].replace(")", "").trim(), cover)'
views:
  - type: cards
    name: Organization-embed
    filters:
      and:
        - formula.organization_names.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
      - locations
    image: formula.cover_url
    cardSize: 240
    imageAspectRatio: 1.3
    imageFit: contain



# Location Index

### Points of Interest

filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: Sublocations-embed
    filters:
      and:
        - parent.contains("<%tp.file.title%>")
    order:
      - file.name
    indentProperties: true



### District Points of Interest

filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: list
    name: District-embed
    filters:
      and:
        - district.contains("Crownlight Strip")
        - parent.isEmpty()
    order:
      - file.name
    indentProperties: true


# Session Index

- [ ] finalize encounters base embed
- [ ] decide what to do about prev and next session
- [ ] update NPCs
- [ ] update Factions and Groups

### Encounters

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
