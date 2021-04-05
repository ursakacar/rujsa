require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `rujša.`,
    siteTitleAlt: `rujša.`,
    siteHeadline: `rujša.`,
    siteUrl: `https://rujsa.com`,
    siteDescription: `Clay creatures and creations of an engineer who needed a hobby. | Glineni stvori in ustvori inženirke, ki ni več želela gnesti samo tipkovnice.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      options: {
        navigation: [
          { name: `Creations`, slug: `/projects` },
          { name: `Insta`, slug: `/instagram` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `43273155453`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rujša.`,
        short_name: `rujša.`,
        description: `Clay creatures and creations of an engineer who needed a hobby. | Glineni stvori in ustvori inženirke, ki ni več želela gnesti samo tipkovnice.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
