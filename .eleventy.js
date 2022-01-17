module.exports = function (eleventyConfig) {

    eleventyConfig.setBrowserSyncConfig({
        files: '.docs/**/*'
    });

    return {
        "dataTemplateEngine": "liquidjs",
        "dir": {
            input: "templates",
            output: "docs"
        }
    }
};