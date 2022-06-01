---
title: Press Kit
permalink: /press/
redirect_from: [/presskit/,/press-kit/,/press_kit/,/stampa/,/kit-stampa/,/stampa-kit/,/kitstampa/,/mentions/,/appears-on/,/mentioned-in/,/mentioned/,/menzioni/]
ref: press
description: Articles and publications containing a reference to this website, plus some basic infos for journalists and press interested in publishing something about the website
toc: false
---
## Press kit

Please [contact Tommi via email]({{ 'tommi@quitsocialmedia.club' | uri_encode }} 'Write Tommi an email') for any question not answered in the [About page](/about 'About quitsocialmedia.club').

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
			<a href='{{ article.url }}' target='_blank' title='{{ article.title }}'>{{ article.title }}</a> by {{ article.author }} on {{ article.amasthead }}, {{ article.date | date_to_long_string }}
		</li>
	{% endfor %}
</ul>
