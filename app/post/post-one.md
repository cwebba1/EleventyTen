---
layout: base.njk
title: post-one
tags: ['post', 'featured']
css: styles.css
---
## This is a post 01
Wait Mr. Postman
{% for post in collections.post %}
[{{ post.data.title }}]({{ post.url}})
{% endfor %}
[index](/)  
[home](/home)