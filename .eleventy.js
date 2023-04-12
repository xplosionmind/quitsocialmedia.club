const pluginRss = require('@11ty/eleventy-plugin-rss');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

// Markdown //
function wikilinkSlugifier(pageName) {
	pageName = pageName.replace(/\s+/, '-');
	pageName = slugify(pageName, {
		remove: /'/g,
		lower: true
	});
	return pageName
}
const markdownIt = require('markdown-it');
const md = markdownIt({
		html: true,
		typographer: true
	})
	.use(require('markdown-it-wikilinks')({
		uriSuffix: '',
		makeAllLinksAbsolute: true,
		class: 'wikilink',
		postProcessPageName: wikilinkSlugifier
	}))
	.use(require('markdown-it-anchor'), {
		permalink: require('markdown-it-anchor').permalink.headerLink(),
	})
	.use(require('markdown-it-footnote'))
	.use(require('markdown-it-mark'))
	.use(require('markdown-it-task-lists'))
	.use(require('markdown-it-mathjax3'));

const { default: slugify } = require('slugify');

module.exports = function(eleventyConfig) {
	// General //
	eleventyConfig.setLibrary('md', md);
	eleventyConfig.addDataExtension('csv', contents => require('csv-parse/sync').parse(contents, {columns: true, skip_empty_lines: true}));

	eleventyConfig.addGlobalData('permalink', () => {
		return (data) => slugify(`${data.page.fileSlug}`, {
			remove: /'/g,
			lower: true
		}).concat('/');
	});

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


	eleventyConfig.addPassthroughCopy({'svg': '/'});
	eleventyConfig.addPassthroughCopy('index.js');

	// Plugins //
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
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(require('eleventy-sass'), {
		compileOptions: {
			permalink: function(contents, inputPath) {
				return (data) => data.page.filePathStem.replace(/^\/styles\//, '/') + '.css';
			}
		},
		sass: {
			style: 'compressed'
		}
	});
	eleventyConfig.addPlugin(require('eleventy-plugin-svg-contents'));
	eleventyConfig.addPlugin(require('@sardine/eleventy-plugin-tinysvg'), {
		baseUrl: 'svg/'
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

	// Production-only //
	if (process.env.ELEVENTY_ENV == 'production') {
		// Minify output //
		eleventyConfig.addTransform(require('html-minifier'), function(content, outputPath) {
			if( this.outputPath && this.outputPath.endsWith('.html') ) {
				let minified = require('html-minifier').minify(content, {
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
		});
		eleventyConfig.addPlugin(require('eleventy-plugin-purgecss'));
	}

	eleventyConfig.on('eleventy.after', () => {
		const execSync = require('child_process').execSync;
		execSync(`npx pagefind`, { encoding: 'utf-8' });
	})

	return {
		dir: {
			includes: 'includes',
			layouts: 'layouts',
			data: 'data',
			output: 'www'
		}
	}; // there should never be anything after the “return” function
};
