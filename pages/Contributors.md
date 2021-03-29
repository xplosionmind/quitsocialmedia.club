---
title: Contributors
permalink: /contributors
description: 'Everyone who <a href="/contribute" target="_blank" title="Contribute">contributed</a> to this website'
redirect_from: ["/people"]
ref: people
---
This website [was created](/about "About quitsocialmedia.club") by [Tommi](https://tommi.space "Tommi's personal website").

<br>
<br>

## Localization

Everyone who [localized](/l10n "Localization") this website’s content:

<ul>
	{% for person in site.data.people %}
		{% if person.what contains 'l10n' %}
			<li>
				{% if person.url != nil %}
					<a href="{{ person.url }}" rel="noopener noreferrer" target="_blank" title="{{ person.title }}">{{ person.name }} {{ person.surname }}</a>
				{% else %}
					{{ person.name }} {{ person.surname }}
				{% endif %}
			</li>
		{% endif %}
	{% endfor %}
</ul>

<br>
<br>

## Reviews and consulting

Anyone who was consulted and contacted with questions regarding the website.

<ul>
	{% for person in site.data.people %}
		{% if person.what contains 'help' %}
			<li>
				{% if person.url != nil %}
					<a href="{{ person.url }}" rel="noopener noreferrer" target="_blank" title="{{ person.title }}">{{ person.name }} {{ person.surname }}</a>
				{% else %}
					{{ person.name }} {{ person.surname }}
				{% endif %}
			</li>
		{% endif %}
	{% endfor %}
</ul>

<br>
<br>

## Illustrations

The authors of the drawings and illustrations displayed in the website.

<ul>
	{% for person in site.data.people %}
		{% if person.what contains 'draw' %}
			<li>
				{% if person.url != nil %}
					<a href="{{ person.url }}" rel="noopener noreferrer" target="_blank" title="{{ person.title }}">{{ person.name }} {{ person.surname }}</a>
				{% else %}
					{{ person.name }} {{ person.surname }}
				{% endif %}
			</li>
		{% endif %}
	{% endfor %}
</ul>
