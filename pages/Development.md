---
title: Development
permalink: /development/
redirect_from: [/dev-roadmap/,/dev/,/dev-path/,/development-roadmap/]
description: 'Technical stuff to do'
toc: false
---
<div>
	My personal roadmap to Internet Freedom, where <q>quitting Social Media</q> is at the top of the list, can be found <a href='https://tommi.space/path-to-internet-freedom' target='_blank' title='Tommi’s path to Internet Freedom'>here</a>.
</div>

<div class='blue box'>
	More detailed data in the <a href='/notes' title='Notes on quitsocialmedia.club'>notes</a>
</div>

<br>
<br>

## l10n

Translations to be concluded:

<ul>
{%- for p in collections.all -%}
	{%- if p.tags contains 'l10n' -%}
	<li><a href='{{ p.url }}' title='{{ p.title }}'>{{ p.title }}</a></li>
	{%- endif -%}
{%- endfor -%}
</ul>
