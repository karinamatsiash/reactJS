module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  rules: {
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-undef': 'error',
    'no-debugger': 'off'
  }
};
