// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
