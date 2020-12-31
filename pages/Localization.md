---
title: Localization
permalink: /l10n
ref: l10n
description: "Localization and translation insights and guidelines"
layout: page
---
Localizing a content means translating it in another language to make it available to a broader public. If you'd like to do it, first of all thank you very much, secondly, there are a few things you need to know.

If you want to translate this website, don't skip this page content: please **read carefully** the list below
{:.red .box}

- You should have an complete understanding of English, since…
- …all of the content has to be translated **from English only**; for example, if you want to translate a page in French and you are proficient in Italian and French, you shouldn't translate it from Italian to French, but <u>from English to French</u>: **pages in English are the ones you should refer to** when translating. Also: the first pages to be updated with better content and new data are the ones in English; you don't want to risk to translate an outdated version of the page.
- You should be familiar with [GitHub](https://github.com) and [Jekyll](https://jekyllrb.com/)
- It might be helpful to know how [git](https://git-scm.com/) works
- Before translating anything, you have to change the [**wrapper layout** file](https://github.com/xplosionmind/quit-social-media/blob/master/_layouts/wrapper.html) by adding a condition for the language your translating to, like this: `{% raw %}{% elsif page.lang == 'page-lang' %}{% endraw %}`, where `page-lang` stands for the [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) of the language you're translating to.
- Another important thing to do before translating pages, is to add the language you're translating to in the **`index.html`** file, which allows to select the website language before getting in.
- The translation priority has the following order:
    1. The [`_includes` pages](https://github.com/xplosionmind/quit-social-media/tree/master/_includes) (header, footer, dialogs). NOTE: translations in includes have to be inserted as `{% raw %}{% elsif %}{% endraw %}` tags, thus they should be like this `{% raw %}{% elsif page.lang == 'page-lang' %}{% endraw %}`, where `page-lang` stands for the [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) of the language you're translating to.
    1. The main pages, which are:
        1. [Homepage](https://github.com/xplosionmind/quit-social-media/blob/master/pages/home.html)
        1. [Why page](https://github.com/xplosionmind/quit-social-media/blob/master/pages/Why.md)
        1. [About page](https://github.com/xplosionmind/quit-social-media/blob/master/pages/About.md)
        1. [Act page](https://github.com/xplosionmind/quit-social-media/blob/master/pages/Act.md)
        1. [Path page](https://github.com/xplosionmind/quit-social-media/blob/master/pages/Path.md)
        1. [Quick page](https://github.com/xplosionmind/quit-social-media/blob/master/pages/Quick.md)
- All English pages are located in the [`pages` folder](https://github.com/xplosionmind/quit-social-media/tree/master/pages); when you're adding a translated page, place it in a subfolder named after the [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For example, all pages in Italian have the following path: [`/pages/it/`](https://github.com/xplosionmind/quit-social-media/tree/master/pages/it). In order to make it quicker and easier to find a file in a folder, don't translate the 
- All pages contain a [front matter](https://jekyllrb.com/docs/front-matter/) attribute called **`ref`**. Please copy and paste it in the translated page to make it appear among the available page translations in the language menu.
- All localized pages' permalink should correspond to its localized title; for example, the permalink of the Path page is `/path`, its correspondent page in Italian has `Percorso` as its title, so `/percorso` is its permalink.
- All the links to resources are in English, but if you know content in the language you're translating to which is related or similar to the English links, **feel free to add or replace them**, but **take it up in a pull request comment**, so that the localized link can be verified.
- Before committing the changes and opening a pull request:
    1. **Update all the links** in all the pages, to match the permalink of the localized page.
    1. Add your name in the [`Translators` section](/contributors#translators) of the [Contributors page](https://github.com/xplosionmind/quit-social-media/tree/master/pages/Contributors.md).

If you have trouble or you need any kind of help, please [open an issue](https://github.com/xplosionmind/quit-social-media/issues).

Email me if you know nothing about GitHub or Jekyll but you'd like to contribute to translation anyway.
