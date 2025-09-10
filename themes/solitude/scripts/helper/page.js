"use strict";
const { stripHTML, escapeHTML, prettyUrls } = require("hexo-util");
hexo.extend.helper.register('page_description', function () {
    const { config, page } = this
    let description =  page.description || page.content || page.title || config.description

    if (description) {
        description = escapeHTML(stripHTML(description).substring(0, 150)
            .trim()
        ).replace(/\n/g, ' ').replace(/\s+/g, ' ');
        return description
    }
})

hexo.extend.helper.register("urlNoIndex", function (url = null) {
    const { config } = this
    return prettyUrls(url || this.url, config.pretty_urls);
});

// Check if a post belongs to any of the excluded categories
hexo.extend.helper.register('inCategories', function (post, names) {
    try {
        const list = Array.isArray(names) ? names.map(s => String(s).toLowerCase()) : []
        const cats = (post && post.categories && post.categories.data) ? post.categories.data : []
        return cats.some(c => list.includes(String(c.name).toLowerCase()))
    } catch (e) {
        return false
    }
});
