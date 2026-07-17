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
```




# Session Mentions

![[0 Session Index.base#Encounters]]
