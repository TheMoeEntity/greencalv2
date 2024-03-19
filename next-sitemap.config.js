/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '<https://greencalv2.vercel.app>',
    generateRobotsTxt: true, // optional
    // other configurations...
}