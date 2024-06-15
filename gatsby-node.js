const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
          
    `{
        blogs: allContentfulBlogs {
            edges {
                node {
                    id
                }    
            }
        }
    }`
    );
    if (result.errors) {
        throw result.errors;
    }
    const blogsData = result.data.blogs.edges;
    const BlogsTemplate = path.resolve('./src/templates/blog.js');

    blogsData.forEach(({ node }, index) => {

        createPage({
          path: `${node.path}`,
          component: BlogsTemplate,
          // values in the context object are passed in as variables to page queries
          context: {
            title: node.title, // "Using a Theme"
          },
        })
      });
}

