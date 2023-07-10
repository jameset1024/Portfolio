import * as path from "path";

export const createPages: ({graphql, actions}: { graphql: any; actions: any }) => Promise<void> = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/components/templates/post/index.tsx');
  const categoryTemplate = path.resolve("./src/components/templates/category/index.tsx");
  const portfolioTemplate = path.resolve("./src/components/templates/portfolio/index.tsx");
  const articlesTemplate = path.resolve("./src/components/templates/articles/index.tsx");

  const allData: {errors, data } = await graphql(`
      query allNeededData{
        allWpPost(limit: 1000, sort: {date: DESC}) {
          edges {
            node {
              id
              title
              uri
              date
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
        allWpCategory {
          nodes {
            name
            slug
          }
        },
        allWpPortfolio {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    if (allData.errors) {
      console.log(allData.errors);
    } else {
      const { allWpPost, allWpCategory, allWpPortfolio} = allData.data;

      const sortedPosts = allWpPost.edges
        .map(edge => edge.node);

      sortedPosts.forEach(post => {
        const { uri } = post;
        createPage({
          path: uri,
          component: postTemplate,
          context: {
            id: post.id
          },
        });
      });

      const postsPerPage = 2;
      const numPages = Math.ceil(sortedPosts.length / postsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/articles` : `/articles/${i + 1}`,
          component: articlesTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            pageCount: numPages,
            currentPage: i + 1,
          },
        })
      })

      const portfolio = allWpPortfolio.edges.map(edge => edge.node);
      portfolio.forEach( pf => {
        const { slug } = pf;
        const portPath = `/work/${slug}`;
        createPage({
          path: portPath,
          component: portfolioTemplate,
          context: {
            id: pf.id
          }
        });
      });

      allWpCategory.nodes.forEach(node => {
        const slug = node.slug;
        const name = node.name;
        const categoryPath = `/category/${slug}/`;
        createPage({
          path: categoryPath,
          component: categoryTemplate,
          context: { slug, name },
        });
      });
    }
};
