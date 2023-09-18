// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'airbnb',
//     // 'plugin:react/recommended',
//     // 'plugin:@typescript-eslint/recommended',
//     'plugin:prettier/recommended',
//   ],
//   overrides: [],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: './tsconfig.json',
//     extraFileExtensions: ['.json'],
//     tsconfigRootDir: __dirname,
//   },
//   plugins: ['react-hooks', 'prettier'],
//   rules: {
//     'prettier/prettier': 'error',
//     'no-console': 'error',
//     'react/react-in-jsx-scope': 0,
//     // '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//     'react/jsx-props-no-spreading': ['warn', { custom: 'ignore' }],
//     // 'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//     'react/forbid-prop-types': 'off',
//     'react/prop-types': 'off',
//     'no-unsafe-optional-chaining': 'warn',
//     'import/no-import-module-exports': 'off',
//     'react/function-component-definition': 'off',
//     'react/jsx-filename-extension': 'off',
//     'import/prefer-default-export': 'off',
//     'react/require-default-props': 'off',
//     'object-curly-newline': 'off',
//     'no-undef': 0,
//     'import/no-unresolved': 0,
//     'prefer-template': 1,
//     'react/jsx-no-useless-fragment': 0,
//     'import/extensions': 0,
//     'no-plusplus': 0,
//     'no-unused-vars': 'error',
//     'class-methods-use-this': 'warn',
//     'react/state-in-constructor': 0,
//     'react/destructuring-assignment': 0,
//     'no-param-reassign': 'warn',
//     'no-nested-ternary': 'warn',
//     'jsx-a11y/click-events-have-key-events': 'off',
//   },
// };

module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    // browser:true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'error',
    'no-console': 'off',
    'no-explicit-any': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: './tsconfig.json',
      },
    },
  },
};
