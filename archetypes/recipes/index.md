---
date: "{{ .Date }}"
draft: true
title: "{{ replace .File.ContentBaseName "_" " " | title }}"
author: ""
categories: []
cover:
  image: cover.jpg
  relative: true
servings: 4
ingredient_lists:
  - title: Zutaten
    ingredients:
      - [100, g, Zutat 1]
---
