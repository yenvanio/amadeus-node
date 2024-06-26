module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest': true
  },
  'extends': 'eslint:recommended',
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'sourceType': 'module',
    'babelOptions': {
      'plugins': [
        '@babel/plugin-syntax-import-assertions'
      ]
    }
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': [
      'warn'
    ],
    'no-trailing-spaces': [
      'error'
    ]
  }
};
