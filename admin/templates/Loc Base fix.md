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
        - locations.contains("<%tp.file.title%>")
    order:
      - file.name
      - brief
    image: note.cover
    cardSize: 240
    imageAspectRatio: 1.15

```