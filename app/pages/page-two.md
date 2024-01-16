---
layout: base.njk
title: page-two
date: 2024-01-16
tags: ['pages', 'featured']
css: styles.css
---
## This is Page 02
{% for post in collections.post %}
[{{ post.data.title }}]({{ post.url}})
{% endfor %}
{% for pages in collections.pages %}
[{{ pages.data.title }}]({{ pages.url}})
{% endfor %}
[index](/)  
[home](/home)  

I teach people to let themselves be creative.  
~ Julia Cameron  

## 9 life shortcuts that actually work:  
1. Learn directly from a mentor  
2. Eliminate brain fog foods  
3. Outsource  
4. Copy  
5. Exercise daily  
6. Pay to play  
7. Do more with less  
8. Be intolerant to worry  
9. Simplify everything.  
– Alex Mathers  
[@Alexmathers84](https://twitter.com/Alexmathers84)

