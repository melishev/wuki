module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|mdx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-grid/preset',
    'storybook-addon-grid/chromatic',
  ]
}