const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const jsdoc = require('eslint-plugin-jsdoc');
const prettier = require('eslint-config-prettier');

module.exports = [
  // Ignore patterns (equivalent to .eslintignore)
  {
    ignores: ['scripts/**', 'docs/**', 'dist/**', 'node_modules/**'],
  },

  // Main configuration for TypeScript files
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      jsdoc,
    },
    rules: {
      // TypeScript ESLint recommended rules (manually specified to avoid breaking changes)
      ...typescriptEslint.configs.recommended.rules,

      // JSDoc recommended rules (manually specified to avoid breaking changes)
      ...jsdoc.configs.recommended.rules,

      // Custom rules from original .eslintrc (maintained for compatibility)
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      // '@typescript-eslint/ban-types': 'warn', // Deprecated in v8, removed
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-namespace': 'off',

      // Disable rules that might cause immediate issues during migration
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-as-const': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',

      // JSDoc rules that might cause issues
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-description': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/check-param-names': 'off',
      'jsdoc/check-tag-names': 'off',
      'jsdoc/check-types': 'off',
      'jsdoc/newline-after-description': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/valid-types': 'off',

      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
    },
  },

  // Apply prettier config last to override formatting rules
  prettier,
];
