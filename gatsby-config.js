module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Hybrx Test Gatsby",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qjkmi4u7cggi`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "gXbrPgd6_5fT_Qoa3uDGjfUFRHJbrPMHCRcdb1mJDkI",
      },
    },
  ]
};
