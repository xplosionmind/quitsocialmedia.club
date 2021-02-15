---
title: Localization
permalink: /l10n
redirect_from: ["/it/l10n", "/localization", "/translate", "/translation"]
description: "Localization and translation guidelines"
toc: false
---
Localizing a content means translating it in another language to make it available to a broader public. If you would like to do it, first of all thank you very much; secondly, there are a few things you need to know.

<div class="red box">
	If you want to translate this website, do not skip this page content: please <strong>read carefully</strong> the guide below.
</div>

- You should have a complete understanding of English, since…
- …all of the content has to be translated **from English only**; for example, if you want to translate a page in French and you are proficient in Italian and French, you should not translate it from Italian to French, but <u>from English to French</u>: **pages in English are the ones you should refer to** when translating. Also: the first pages to be updated, the ones with better content and new data are the ones in English; you don’t want to risk to translate an outdated version of the page.
- You should be familiar with [GitHub](https://github.com "GitHub") and [Jekyll](https://jekyllrb.com/ "Jekyll")
- It might be helpful to know how [git](https://git-scm.com/ "git") works
- Before translating anything, you have to change the [**wrapper layout** file](https://github.com/xplosionmind/quitsocialmedia.club/blob/main/_layouts/wrapper.html) by adding a condition for the language your translating to, like this: `{% raw %}{% elsif page.lang == 'page-lang' %}{% endraw %}`, where `page-lang` stands for the [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes "“ISO 639-1 codes„ on Wikipedia") of the language you are translating to.
- Another important thing to do before translating pages, is to add the language you are translating to in the **`index.html`** file, which allows to select the website language before getting in.
- The translation priority has the following order:
	1. The [`_includes` pages](https://github.com/xplosionmind/quitsocialmedia.club/tree/main/_includes "“_includes” folder on GitHub") (header, footer, dialogs). NOTE: translations in includes have to be inserted as `{% raw %}{% elsif %}{% endraw %}` tags, thus they should be like this `{% raw %}{% elsif page.lang == 'page-lang' %}{% endraw %}`, where `page-lang` stands for the [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes "“ISO 639-1 codes„ on Wikipedia") of the language you are translating to.
	1. The main pages, which are:
		1. [Homepage](https://github.com/xplosionmind/quitsocialmedia.club/blob/main/pages/home.html "Homepage on GitHub")
		1. [Why page](https://github.com/xplosionmind/quitsocialmedia.club/blob/main/pages/Why.md "Why page on GitHub")
		1. [About page](https://github.com/xplosionmind/quitsocialmedia.club/blob/main/pages/About.md "About page on GitHub")
		1. [Path page](https://github.com/xplosionmind/quitsocialmedia.club/blob/main/pages/Path.md "Path page on GitHub")
		1. [Quick page](https://github.com/xplosionmind/quitsocialmedia.club/blob/main/pages/Quick.md "Quick page on GitHub")
		1. [FAQ page](https://github.com/xplosionmind/quitsocialmedia.club/blob/main/pages/FAQ.md "FAQ page on GitHub")
- All English pages are located in the [`pages` folder](https://github.com/xplosionmind/quitsocialmedia.club/tree/main/pages "“pages” folder on GitHub"); when you are adding a translated page, place it in a subfolder named after the [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes "“ISO 639-1 codes„ on Wikipedia"). For example, all pages in Italian have the following path: [`/pages/it/`](https://github.com/xplosionmind/quitsocialmedia.club/tree/main/pages/it).
- All pages contain a [front matter](https://jekyllrb.com/docs/front-matter/ "Front matter explanation on Jekyll documentation website") attribute called **`ref`**. Please copy and paste it in the translated page to make it appear among the available page translations in the language menu.
- All localized pages’ permalinks should correspond to their localized title; for example, the permalink of the “Path” page is `/path`, its correspondent page in Italian has “Percorso” as its title, hence `/percorso` is its permalink.
- All the links to resources are in English, but if you know content in the language you are translating to which is related or similar to the English links, **feel free to add or replace them**, but **take it up in a pull request comment**, so that the localized link can be verified.
- Before committing the changes and opening a pull request:
	1. **Update all the links** in all the pages, to match the permalink of the localized page.
	1. Add your name in the [`Translators` section](/contributors#translators) of the [Contributors page](https://github.com/xplosionmind/quitsocialmedia.club/tree/main/pages/Contributors.md).

If you have trouble or you need any kind of help, please [open an issue](https://github.com/xplosionmind/quitsocialmedia.club/issues "Issues of this website's repository on GitHub").

[Email me](mailto:{{ site.email | encode_email }}) if you know nothing about what I wrote about up to now but you would like to contribute to translation anyway.