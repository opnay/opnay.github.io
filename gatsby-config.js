const fs = require('fs');
const path = require('path');
const projectDir = fs.realpathSync(process.cwd());
const _ = (relPath) => path.resolve(projectDir, relPath);

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Dev Blog',
    titleTemplate: 'Dev Blog · %s',
    description: `OPNay's develop blog`,
    url: 'https://opnay.com',
    image: '/images/open-graph.png',
    twitterUsername: '@opnay_dev',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'post',
        path: _('posts'),
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.TRACKING_ID || '',
      },
    },
  ],
};
