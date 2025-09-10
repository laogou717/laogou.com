"use strict";

hexo.extend.helper.register("brevity_items", function () {
  const site = this.site || {};
  const data = this.site?.data || {};

  const yamlList = Array.isArray(data.brevity) ? data.brevity : [];

  let postList = [];
  const posts = site.posts?.data || [];
  if (Array.isArray(posts)) {
    postList = posts
      .filter((p) => p && p.brevity)
      .map((p) => {
        const html = p.content || "";
        const imgs = [];
        const tags = html.match(/<img[^>]*>/gi) || [];
        for (let i = 0; i < tags.length && imgs.length < 3; i++) {
          const tag = tags[i];
          const m = tag.match(/(?:lazy-src|data-lazy-src|src)=["']([^"']+)["']/i);
          if (m && m[1]) {
            const u = m[1];
            const abs = /^(http(s)?:)?\/\//.test(u) ? u : this.url_for(u);
            if (!imgs.includes(abs)) imgs.push(abs);
          }
        }
        if (!imgs.length && p.cover) imgs.push(this.url_for(p.cover));
        return {
          content: p.brevity_content || p.description || p.title,
          date: p.date,
          link: this.url_for(p.path),
          commentLink: this.url_for(p.path) + "#post-comment",
          image: imgs.length ? imgs : null,
        };
      });
  }

  const merged = yamlList.concat(postList);
  merged.sort((a, b) => new Date(b.date) - new Date(a.date));
  return merged;
});
