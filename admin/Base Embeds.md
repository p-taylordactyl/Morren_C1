

- [x] update page embeds from NPC Index - committed
- [x] update page embeds from Location Index
- [ ] update page embeds from Quest Index
- [ ] Update page embeds from Session Index




NPC Location Embed


filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
views:
  - type: cards
    name: Location-embedonly
    filters:
      and:
        - locations.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
    image: note.cover
    cardSize: 240
    imageAspectRatio: 1.15





NPC Organizations Embed

filters:
  and:
    - type == "npc"
    - file.folder != "admin/templates"
views:
  - type: cards
    name: Organizations-embedonly
    filters:
      and:
        - organizations.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
      - locations
      - associates
    image: note.cover
    cardSize: 240
    imageAspectRatio: 1.1


Sublocations Embed

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
    indentProperties: true


District embed

filters:
  and:
    - type.contains("location")
    - file.folder != "admin/templates"
views:
  - type: table
    name: District-embed
    filters:
      and:
        - district.contains("<%tp.file.title%>")
