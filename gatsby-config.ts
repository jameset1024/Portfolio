import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Erik Thomas Portfolio`,
    siteUrl: `https://erikjamesthomas.com/`,
    description:
      'Erik Thomas is a senior full stack engineer currently residing in Charlotte, NC.',
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@jameset1024',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-tsconfig-paths", "gatsby-plugin-image", "gatsby-plugin-layout", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: 'blurred',
          backgroundColor: `#cccccc`,
        },
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.WP_URL,
        production: {
          allow404Images: true
        },
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
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: ["G-7FYNG6KHDD"],
        pluginConfig: {
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        }
      },
    },
  ]
};

export default config;
