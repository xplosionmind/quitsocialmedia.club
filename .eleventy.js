const fs = require('fs');
const miniHtml = require('html-minifier');
const _ = require('lodash');
const pluginRss = require('@11ty/eleventy-plugin-rss');

// Markdown //
const markdownIt = require('markdown-it');
const md = markdownIt({
	html: true,
	fence: false
})
.disable('code')
.use(require('markdown-it-attrs'))
.use(require('markdown-it-anchor'))
.use(require('markdown-it-footnote'))
.use(require('markdown-it-sup'))
.use(require('markdown-it-sub'))
.use(require('markdown-it-ins'))
.use(require('markdown-it-mark'))
.use(require('markdown-it-task-lists'))
.use(require('markdown-it-container'), 'box')
.use(require('markdown-it-collapsible'))
.use(require('markdown-it-abbr'))
.use(require('markdown-it-mathjax3'));

module.exports = function(eleventyConfig) {
	// General //
	eleventyConfig.setLibrary('md', md);
	eleventyConfig.setFrontMatterParsingOptions({
		permalink: '/{{ page.fileSlug }}/',
	});
	eleventyConfig.addDataExtension('csv', contents => require('csv-parse/sync').parse(contents, {columns: true, skip_empty_lines: true}));
	eleventyConfig.setFrontMatterParsingOptions({ excerpt: true, excerpt_separator: '<!--excerpt-->'});
	eleventyConfig.setQuietMode(true);

	// Multilingual sitemap collection. See https://github.com/quasibit/eleventy-plugin-sitemap#create-a-multilingual-sitemap
	eleventyConfig.addCollection('sitemap', function(collectionApi) {
		return collectionApi
			.getAll()
			.map((item, index, all) => {
				return {
					url: item.url,
					date: item.date,
					data: {
						...item.data,
						sitemap: {
							...item.data.sitemap,
							links:
								all
									.filter(other => other.data.ref === item.data.ref)
									.map(translation => {
										return {
											url: translation.url,
											lang: translation.data.lang,
										};
									}),
						},
					},
				}
			});
	});


	// Scss //
	eleventyConfig.addWatchTarget('styles');
	eleventyConfig.addPassthroughCopy({'styles': '/'});
	eleventyConfig.addPassthroughCopy({'svg': '/'});
	eleventyConfig.addPassthroughCopy('js');

	// Plugins //
	eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-directory-output'));
	eleventyConfig.addPlugin(require('eleventy-plugin-find'));
	eleventyConfig.addPlugin(require('@quasibit/eleventy-plugin-schema'));
	eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
	eleventyConfig.addPlugin(require('@aloskutov/eleventy-plugin-external-links'), {
		url: 'https://quitsocialmedia.club',
		rel: ['noreferrer', 'noopener', 'external'],
		overwrite: false,
	});
	eleventyConfig.addPlugin(require('eleventy-plugin-embed-everything'), {
		youtube: {
			options: {
				embedClass: 'embed',
				lite: {
					css: {
						enabled: false
					}
				}
			}
		},
		spotify: {
			options: {
				embedClass: 'embed',
				width: '100%'
			}
		},
		instagram: {
			options: {
				embedClass: 'embed'
			}
		}
	});
	eleventyConfig.addPlugin(require('eleventy-plugin-svg-contents'));
	eleventyConfig.addPlugin(require('@sardine/eleventy-plugin-tinysvg'), {
		baseUrl: 'assets/svg/'
	});
	eleventyConfig.addPlugin(require('eleventy-plugin-toc'), {
		ul: true,
	});
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(require('@quasibit/eleventy-plugin-sitemap'), {
		sitemap: {
			hostname: 'https://quitsocialmedia.club'
		},
	});

	// Filters //
	eleventyConfig.addFilter('reverse', (collection) => {
		const arr = [...collection];
		return arr.reverse();
	});
	eleventyConfig.addFilter('markdownify', (str) => {
		return md.renderInline(str);
	});
	// RSS Filters //
	eleventyConfig.addFilter('dateToRfc3339', pluginRss.dateToRfc3339);
	eleventyConfig.addFilter('getNewestCollectionItemDate', pluginRss.getNewestCollectionItemDate);
	eleventyConfig.addFilter('absoluteUrl', pluginRss.absoluteUrl);
	eleventyConfig.addFilter('convertHtmlToAbsoluteUrls', pluginRss.convertHtmlToAbsoluteUrls);

	 // Minify output //
	/*eleventyConfig.addTransform('miniHtml', function(content, outputPath) {
		if( this.outputPath && this.outputPath.endsWith('.html') ) {
			let minified = miniHtml.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true
			});
			return minified;
		}
		return content;
	});*/

	// 404 //
	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function(err, bs) {
				bs.addMiddleware('*', (req, res) => {
					const content_404 = fs.readFileSync('www/404.html');
					res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
					res.write(content_404);
					res.end();
				});
			}
		}
	});

	return {
		dir: {
			includes: 'includes',
			layouts: 'layouts',
			data: 'data',
			output: 'www'
		}
	}; // there should never be anything after the “return” function
};
