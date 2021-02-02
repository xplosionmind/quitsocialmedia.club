---
title: Path
permalink: /path
ref: path
description: "Too much information got you disoriented? This is the path to follow to free yourself from Social Media dependence."
layout: page
anchor: false
---
You should not rush it (and very likely you don't even want to): don't delete any account straight away.\
Before you get there, *if* you do, there's an awareness path to follow.

<div class="red box">
	Since you can take action at different levels, actions which get you closer to <a href="https://tommi.space/internet-freedom" target="_blank" title="“Internet Freedom” in Tommi's notes">Internet Freedom</a> are gameified and displayed as levels, from <a href="/l00">Level 0</a> to <a href="l1000">Level 1000</a>.
</div>

<br>

- **Level 0**: Find out more [about](/about "About quitsocialmedia.club") this website and [its purpose](/about#purpose "Purpose - quitsocialmedia.club")
- **Level 1**: understand [why](/why "Why") you should quit Social Media
- **Level 2**: find out resources 
- **Level 3**: try **Taking control** by first taking some [intermediate steps](https://www.humanetech.com/take-control "Take Control - Humane Center of Technology")

<ul>
	{% for level in site.pages %}
		{% if level.level != nil and level.lang == page.lang %}
			<li><strong>Level {{ level.level }}</strong>: <a href="{{ level.url }}" target="_blank" title="Level {{ level.level}}: {{ level.title }}">{{ level.title }}</a> - {{ level.description }}</li>
		{% endif %}
	{% endfor %}
</ul>

{% comment %}

## About

First of all, you should aknowledge [the purpose](/about) of this website, who created it, and why it's much needed.

<br>


## Why

[Why](/why) should you quit Social Media?

More importantly, are they that bad? The short answer is yes, they do. They're awesome for some things, but there are many other terrifying aspects to consider which objectively strongly overweight the pros.

The [why page](/why) is too long? Start from [here](/quick)
{:.blue .box}

<br>

## Act

You 

<br>

## Free Software

Finding out more about what's wrong with Social Media made you more aware of all of the other big problems that “free” services provided by big cosporations have?

You may be interested in learning about [Free Software](https://fsfe.org/freesoftware/freesoftware.en.html) and in considering Free Software alternatives to non-free proprietary software you are using. How to find alternative software and choose the one which fits you? There are a ton of wabsites which accomplish this task perfectly, the most famous are below.

- [AlternativeTo](https://alternativeto.net/)
- [PrivacyTools](https://privacytools.io/)
- [Switching Software](https://switching.software/)

{% endcomment %}
