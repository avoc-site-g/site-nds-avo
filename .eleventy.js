module.exports = function (eleventyConfig) {

    eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false, // warning: don’t do this!
    });

    eleventyConfig.setBrowserSyncConfig({
        files: '.docs/**/*'
    });

    return {
        "dataTemplateEngine": "njk",
        "dir": {
            input: "templates",
            output: "docs"
        }
    }
};