---
layout: base.njk
title: page-one
tags: ['pages', 'featured']
css: styles.css
---
## This is Page 01
Wait Mr. Postman
{% for post in collections.post %}
[{{ post.data.title }}]({{ post.url}})
{% endfor %}
{% for pages in collections.pages %}
[{{ pages.data.title }}]({{ pages.url}})
{% endfor %}
[index](/)  
[home](/home)