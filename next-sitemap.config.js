/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.halfnine.com/",
  generateRobotsTxt: false,
  output: "standalone",
  changefreq: "weekly",
  exclude: [
    "/contact",
    "/dev",
    "/contact/*",
    "/blog/",
    "/blog/*",
    "/blog/post/*",
    "/blog/sitemap.xml",
  ],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.halfnine.com/blog/sitemap.xml"],
  },
};
