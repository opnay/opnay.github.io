module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`plugin:@typescript-eslint/recommended`],
  rules: {
    // Use 'indent' instead of typescript-eslint
    indent: ['error', 2],
    '@typescript-eslint/indent': 'off',

    quotes: 'off',
    'jsx-quotes': ['error', 'prefer-double'],

    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
