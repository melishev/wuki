module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@vue/babel-plugin-jsx',
    [
      'search-and-replace',
      {
        rules: [
          {
            search: /_nameFramework_/,
            replace: 'vue',
          },
        ],
      },
    ],
  ],
};
