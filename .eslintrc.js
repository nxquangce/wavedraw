module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    // 'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    // ecmaVersion: 2020
    parser: "babel-eslint",
    sourceType: "module"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-inferrable-types': 'off'
  }
}
