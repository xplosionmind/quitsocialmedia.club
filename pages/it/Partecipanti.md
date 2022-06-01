---
title: Partecipanti
permalink: /partecipanti/
description: |
  Tutti coloro che hanno <a href='/contribuisci' target='_blank' title='Contribuisci'>contribuito</a> a questo sito
redirect_from: [/persone/,/it/contributors/,/contributors-it/,/contributori/]
ref: people
---
Questo sito [è stato creato](/info 'Informazioni su quitsocialmedia.club') da [Tommi](https://tommi.space 'Tommi's personal website').

<br>
<br>

## Localizzazione

Tutti coloro che hanno [localizzato](/l10n 'Localization') i contenuti di questo sito:

<ul>
	{% for person in people %}
		{% if person.what contains 'l10n' %}
			<li>
				{% if person.url != nil %}
					<a href='{{ person.url }}' target='_blank' title='{{ person.description }}'>{{ person.name }} {{ person.surname }}</a>
				{% else %}
					{{ person.name }} {{ person.surname }}
				{% endif %}
			</li>
		{% endif %}
	{% endfor %}
</ul>

<br>
<br>

## Suggerimenti e miglioramenti

Le persone che hanno contribuito a migliorare i contenuti e la forma in cui sono stati esposti.

<ul>
	{% for person in people %}
		{% if person.what contains 'help' %}
			<li>
				{% if person.url != nil %}
					<a href='{{ person.url }}' target='_blank' title='{{ person.description }}'>{{ person.name }} {{ person.surname }}</a>
				{% else %}
					{{ person.name }} {{ person.surname }}
				{% endif %}
			</li>
		{% endif %}
	{% endfor %}
</ul>

<br>
<br>

## Illustrazioni

Gli autori delle illustrazioni presenti nelle varie pagine

<ul>
	{% for person in people %}
		{% if person.what contains 'draw' %}
			<li>
				{% if person.url != nil %}
					<a href='{{ person.url }}' target='_blank' title='{{ person.description }}'>{{ person.name }} {{ person.surname }}</a>
				{% else %}
					{{ person.name }} {{ person.surname }}
				{% endif %}
			</li>
		{% endif %}
	{% endfor %}
</ul>
