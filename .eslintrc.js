module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [ 'eslint:recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'flowtype', 'import', 'jsx-a11y', 'react-hooks' ],
  rules: {
    'max-len': [2, {
      'code': 100
    }],
    'indent': ["error", 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/prop-types': 2,
    'comma-dangle': ["error", "always-multiline"]
  },
};
