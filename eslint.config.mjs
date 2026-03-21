import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';

export default defineConfig(
  // Global ignores (replaces .eslintignore)
  {
    ignores: ['scripts/', 'docs/', 'dist/', 'node_modules/'],
  },

  // Base configs
  eslint.configs.recommended,
  tseslint.configs.recommended,

  // JSDoc plugin
  jsdoc.configs['flat/recommended'],

  // Prettier (disables conflicting rules)
  eslintConfigPrettier,

  // Project-specific overrides for TypeScript plugin files
  {
    files: ['src/**/*.ts'],
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      'no-empty': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-empty-pattern': 'warn',

      // JSDoc rules - relaxed for plugin wrappers (stub methods, Cordova untyped APIs)
      'jsdoc/tag-lines': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns-check': 'off',
      'jsdoc/require-returns-description': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/check-tag-names': 'off',
      'jsdoc/reject-any-type': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/reject-function-type': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/check-param-names': 'off',
      'jsdoc/check-types': 'off',
    },
  }
);
