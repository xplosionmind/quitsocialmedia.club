---
title: Development roadmap
layout: page
title: Development roadmap
permalink: /development-roadmap
redirect_from: ["/dev-roadmap", "/dev", "/dev-path", "/development"]
description: "Technical stuff to do"
---
My personal roadmap to Internet Freedom is [here](https://tommi.space/internet-freedom-roadmap "Path to Internet Freedom - tommi.space")
{:.box}

More detailed data in the <a href="/notes" title="Notes page">notes</a>
{:.blue .box}

<br>
<br>

## l10n

Translations to be concluded:

<ul>
{%- for p in site.pages -%}
	{%- if p.tags contains 'l10n' -%}
	<li><a href="{{ p.url }}" title="{{ p.title }}">{{ p.title }}</a></li>
	{%- endif -%}
{%- endfor -%}
</ul>
