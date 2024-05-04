module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    JSX: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [2],
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-var-requires': 0,
    'consistent-return': 0,
    camelcase: 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/destructuring-assignment': 0,
    'no-param-reassign': 1,
    'prettier/prettier': 1,
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'no-underscore-dangle': 0,
    'react/no-array-index-key': 1,
    'no-shadow': 1,
    'no-empty-pattern': 1,
    'no-nested-ternary': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
