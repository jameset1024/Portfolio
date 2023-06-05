import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Personal Portfolio`,
    siteUrl: `https://erikjamesthomas.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-tsconfig-paths", "gatsby-plugin-image", "gatsby-plugin-layout", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.WP_URL,
        schema: {
          perPage: 100,
          requestConcurrency: 10,
        },
        debug: {
          graphql: {
            showQueryVarsOnError: process.env.DEBUG || false,
            copyQueryOnError: process.env.DEBUG || false,
            panicOnError: process.env.DEBUG || false
          }
        }
      }
    },{
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};

export default config;
