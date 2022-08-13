module.exports = {
  extends: ['airbnb', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // prettier
    'prettier/prettier': ['error'],

    // react overrides
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],

    // others
    'import/prefer-default-export': 'off',
  },
};
