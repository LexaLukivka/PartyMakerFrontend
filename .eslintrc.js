module.exports = {
  'extends': ['standard', 'standard-react'],
  'parser': 'babel-eslint',
  'rules': {
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'standard/object-curly-even-spacing': 0,
    'generator-star-spacing': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': 0,
    'newline-before-return': 0,
    'padded-blocks': 0,
    'no-trailing-spaces': 0,
    'camelcase': 0,
  },
  'settings': {},
  'env': {
    'jasmine': true,
    'jest': true,
    'browser': true,
    'node': true,
  },
}
