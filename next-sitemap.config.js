/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.halfnine.com/',
    generateRobotsTxt: false,
    output: 'standalone',
    exclude: ['/contact', '/dev', '/contact/thank-you'],
}