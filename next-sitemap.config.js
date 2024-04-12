/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.halfnine.com/",
  generateRobotsTxt: false,
  output: "standalone",
  exclude: ["/contact", "/dev", "/contact/*", "/blog/posts/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.halfnine.com/blog/sitemap.xml"],
  },
};
