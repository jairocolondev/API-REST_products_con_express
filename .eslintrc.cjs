// 20231016194159
// https://static.platzi.com/media/tmp/class-files/github/curso-backend-nodejs/curso-backend-nodejs-init/.eslintrc.json

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['eslint:recommended', 'prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 'warn',
  },
};