---
title: <% tp.file.title %>
dg-publish: false
aliases:
type: group
cover: "[[group_<% tp.file.title.replace(/ /g, '') %>.webp]]"
created:
modified:
parent:
associations:
locations:
tags:
  - under_construction
---
# Description






# NPCs

```base
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
```




# Session Mentions

![[0 Session Index.base#Encounters]]
