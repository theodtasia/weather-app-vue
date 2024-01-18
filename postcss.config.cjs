/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential', // Use vue3-essential for Vue 3
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    // Add specific rules for your Vue files here
    // For example:
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-for-template-key': 'error',
    // ...
  },
};
