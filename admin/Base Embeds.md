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
- [ ]  organization embed final version
- [ ] update faction and group templates
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

filters:
  and:
    - type == "session_note"
    - file.folder != "admin/templates"
properties:
  file.name:
    displayName: Session
  note.locations:
    displayName: Session Locations
views:
  - type: table
    name: Encounters
    filters:
      and:
        - file.hasLink("<%tp.file.title%>")
    order:
      - file.name
      - locations


Session debug 
formulas:
  test_links: file.links.join(", ")
  test_haslink: file.hasLink("Sprocket")
  test_haslink_v2: file.links.contains("sprocket")
  raw_locations: locations.join(";;")
  raw_locations_length: locations.join(" | ").length


    name: Debug
    filters:
      and:
        - file.links.join(",").lower().contains("sprocket")
    order:
      - test_links
      - file.name
      - formula.raw_locations
      - formula.raw_locations_length
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      formula.raw_locations: 588