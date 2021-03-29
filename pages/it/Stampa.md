---
title: Stampa
permalink: /stampa
redirect_from: ["/kitstampa", "/kit-stampa", "/stampakit", "/stampa-kit", "/it/press", "/press-it", "/it/press-kit"]
ref: press
description: "Articoli e video in cui è menzionato questo sito e informazioni per giornalisti interessati a raccontare di quitsocialmedia.club"
toc: false
---
## Press kit

Si prega di [contattare Tommi via email]({{ "tommi@quitsocialmedia.club" | uri_encode }} "Scrivere un’email a Tommi") per qualunque domanda la cui risposta non fosse trovata nella [pagina info](/info "Informazioni su quitsocialmedia.club") o in [Obiezioni e risposte](/it/faq "Obiezioni e risposte").

<br>
<br>

## Mentions

A list of links to publications where quitsocialmedia appears:

<ul>
	{% for article in site.data.press %}
		<li>
			{% if article.lang == 'it' %}
				🇮🇹 
			{% else %}
				🇬🇧 
			{% endif %}
			<a href="{{ article.url }}" rel="noopener noreferrer" target="_blank" title="{{ article.title }}">{{ article.title }}</a> di {{ article.author }} su {{ article.masthead }}, {{ article.date | date_to_long_string }}
		</li>
	{% endfor %}
</ul>
