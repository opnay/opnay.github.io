const fs = require('fs');
const path = require('path');
const projectDir = fs.realpathSync(process.cwd());
const _ = (relPath) => path.resolve(projectDir, relPath);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'post',
        path: _('blog'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.jsx?$|\.tsx?$/,
      },
    },
  ],
};
