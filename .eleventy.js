const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

    eleventyConfig.setBrowserSyncConfig({
        files: '.docs/**/*'
    });

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    return {
        "dataTemplateEngine": "liquid",
        "dir": {
            data: "_data",
            input: "templates",
            output: "docs"
        }
    }
};