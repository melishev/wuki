const theme = require('../components/utils/theme');

module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|mdx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-mdx-embed',
    'storybook-addon-grid/preset',
    'storybook-addon-grid/chromatic',
  ],
  previewHead: (head) => (`
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap">
    <style>
      body {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      h1, h2, h3, h4, h5, h6, p {
        font-family: ${theme.type.family} !important;
      }
    </style>
  `)
}