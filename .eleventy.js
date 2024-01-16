const path = require('path');
const sass = require("sass");
const browserslist = require("browserslist");
const { transform, browserslistToTargets } = require("lightningcss");

module.exports = function(eleventyConfig) {
// Recognize Sass as a "template languages"
eleventyConfig.addTemplateFormats("scss");

// Compile Sass
eleventyConfig.addExtension("scss", {
  outputFileExtension: "css",
  compile: async function (inputContent, inputPath) {
    // Skip files like _fileName.scss
    let parsed = path.parse(inputPath);
    if (parsed.name.startsWith("_")) {
      return;
    }
// Run file content through Sass
let result = sass.compileString(inputContent, {
  loadPaths: [parsed.dir || "."],
  sourceMap: false, // or true, your choice!
});
// Allow included files from @use or @import to
// trigger rebuilds when using --incremental
    this.addDependencies(inputPath, result.loadedUrls);

// Add Browserlist / LightningCSS to Sass
    let targets = browserslistToTargets(browserslist("> 0.2% and not dead"));

//  This is SASS without LightningCSS
//    return async () => {
//      return result.css;
//    };
//  },
//});

//  This is SASS with LightningCSS and minification, no map
return async () => {
    let { code } = await transform({
      code: Buffer.from(result.css),
      minify: true,
      sourceMap: true,
      targets,
    });
      return result.css; //code
    };
  },
});

eleventyConfig.addWatchTarget("app/scss/");
// Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
		files: 'app/css/**/*.css'
	});
  eleventyConfig.addPassthroughCopy('app/assets');
  eleventyConfig.addWatchTarget('app/assets');
  eleventyConfig.addPassthroughCopy('app/css');
  eleventyConfig.addWatchTarget('app/css');

  // This changes resource.md output to write to /resource.html
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  return {
  dir: {
    input: "app",
    includes: "_includes",
    output: "dist"	// Defaults to _site
    },
  templateFormats: ['md', 'njk', 'html' ],
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  };
}
  