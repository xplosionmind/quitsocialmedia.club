---
title: Stampa
permalink: /stampa/
redirect_from: [/kitstampa/,/kit-stampa/,/stampakit/,/stampa-kit/,/it/press/,/press-it/,/it/press-kit/]
ref: press
description: Articoli e video in cui è menzionato questo sito e informazioni per giornalisti interessati a raccontare di quitsocialmedia.club
toc: false
---
## Press kit

Si prega di <a href='mailto:{{ site.author.email }}' target='_blank' title='Scrivi un’email a Tommi'>contattare Tommi via email</a> per qualunque domanda la cui risposta non fosse trovata nella [pagina info](/info 'Informazioni su quitsocialmedia.club') o in [Obiezioni e risposte](/it/faq 'Obiezioni e risposte').

## Interviste e pubblicazioni

Una lista di link a video, articoli ed interviste in cui appare quitsocialmedia.club:

<ul>
	{% for article in press %}
		<li>
			{% if article.lang == 'it' %}
				🇮🇹 
			{% else %}
				🇬🇧 
			{% endif %}
			<a href='{{ article.url }}' target='_blank' title='{{ article.title }}'>{{ article.title }}</a> di {{ article.author }} su {{ article.masthead }}, {{ article.date | date: '%d %B %Y' }}
		</li>
	{% endfor %}
</ul>
