module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // eslint-disable-next-line quote-props
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 'off',
    // eslint-disable-next-line quote-props
    'react/jsx-no-bind': 'off',
    'default-param-last': 0,
    'no-unused-vars': 'off',
    ' import/no-named-as-default-member': 0,
  },
};
