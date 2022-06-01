---
title: Press Kit
permalink: /press/
redirect_from: [/presskit/,/press-kit/,/press_kit/,/mentions/,/appears-on/,/mentioned-in/,/mentioned/]
ref: press
description: Articles and publications containing a reference to this website, plus some basic infos for journalists and press interested in publishing something about the website
toc: false
---
## Press kit

Please <a href='mailto:{{ site.author.email }}' title='Write Tommi an email'>contact Tommi via email</a> for any question not answered in the [About page](/about 'About quitsocialmedia.club').

<br>
<br>

## Mentions

A list of links to publications where quitsocialmedia appears:

<ul>
	{% for article in press %}
		<li>
			{% if article.lang == 'it' %}
				🇮🇹 
			{% else %}
				🇬🇧 
			{% endif %}
			<a href='{{ article.url }}' target='_blank' title='{{ article.title }}'>{{ article.title }}</a> by {{ article.author }} on {{ article.amasthead }}, {{ article.date | date: '%d %B %Y' }}
		</li>
	{% endfor %}
</ul>
