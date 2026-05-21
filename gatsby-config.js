const siteUrl =
  process.env.URL || `https://yuhang2023.com`

module.exports = {
  siteMetadata: {
    title: "广东宇航金属制品有限公司",
    titleEn: "Guangdong Yuhang Metal Products Co., Ltd.",
    description:
      "广东宇航金属制品有限公司，专注于储能、预制模块化数据中心及电力电气领域的箱式装备结构件研发与制造，是箱式装备结构件配套解决方案龙头企业。",
    descriptionEn:
      "Guangdong Yuhang Metal Products Co., Ltd. specializes in R&D and manufacturing of enclosure structural components for energy storage, prefab modular data centers, and power & electrical sectors.",
    keywords:
      "储能结构件,箱式装备,模块化数据中心,电力电气,钣金加工,宇航金属,广东宇航,energy storage enclosure,modular data center,sheet metal fabrication",
    siteUrl: "https://yuhang2023.com",
    ogImage: "https://yuhang2023.com/img/slide1_img3.jpg",
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `广东宇航金属制品有限公司`,
        short_name: `宇航金属`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#047857`,
        display: `standalone`,
        icon: `src/img/urbangarden-icon.png`,
      },
    },
    "gatsby-transformer-remark-frontmatter",
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: () => siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
