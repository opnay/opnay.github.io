module.exports = {
  plugins: [
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
