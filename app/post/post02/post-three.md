---
layout: base.njk
title: post-three
tags: ['post', 'featured']
css: styles.css
---
## This is a post 03
Wait Mr. Postman
{% for post in collections.post %}
[{{ post.data.title }}]({{ post.url}})
{% endfor %}
[index](/)  
[home](/home)