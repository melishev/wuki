module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'search-and-replace',
      {
        rules: [
          {
            search: /_nameFramework_/,
            replace: 'react',
          },
        ],
      },
    ],
  ],
};
