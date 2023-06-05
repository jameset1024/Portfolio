import * as _  from 'lodash';
import * as path from "path";

export const createPages: ({graphql, actions}: { graphql: any; actions: any }) => Promise<void> = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/components/templates/post/index.tsx');
  const categoryTemplate = path.resolve("./src/components/templates/category/index.tsx");
  //const tagTemplate = path.resolve('./src/templates/tag-template.jsx');

  const allData: {errors, data } = await graphql(`
      query allNeededData{
        allWpPost {
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
          }
        }
      }
    `);

    if (allData.errors) {
      console.log(allData.errors);
    } else {
      const { allWpPost, allWpCategory, allWpTag } = allData.data;

      const sortedPosts = allWpPost.edges
        .map(edge => edge.node)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

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

      allWpCategory.nodes.forEach(node => {
        const name = node.name;
        const categoryPath = `/categories/${_.kebabCase(name)}/`;
        createPage({
          path: categoryPath,
          component: categoryTemplate,
          context: { category: name },
        });
      });

      /*allWpTag.nodes.forEach(node => {
        const name = node.name;
        const tagPath = `/tag/${_.kebabCase(name)}/`;
        createPage({
          path: tagPath,
          component: tagTemplate,
          context: { tag: name },
        });
      });*/
    }
};
