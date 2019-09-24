const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = (...paths) => path.resolve(process.env.PWD, ...paths);

exports.onCreateNode = ({ node, getNode, actions }) => {
  // Add slug
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templates = _('src/templates');
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              template
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    if (!post.frontmatter.template) {
      throw new Error(
        'Markdown page should have existed `template` on frontmatter.'
      );
    }

    createPage({
      path: post.fields.slug,
      component: _(templates, post.frontmatter.template, 'index.tsx'),
      context: {
        slug: post.fields.slug,
        previous,
        next,
      },
    });
  });
};
