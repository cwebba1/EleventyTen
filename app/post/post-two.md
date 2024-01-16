---
layout: base.njk
title: post-two
tags: ['post', 'featured']
css: styles.css
---
# This is a post 02
Wait wait Mr. Postman
{% for post in collections.post %}
[{{ post.data.title }}]({{ post.url}})
{% endfor %}