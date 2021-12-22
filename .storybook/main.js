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
    'storybook-i18n',
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
        background: #fafafa;
      }
      h1, h2, h3, h4, h5, h6, p, li {
        font-family: ${theme.type.family} !important;
      }
      .sbdocs.sbdocs-wrapper {
        background: #fafafa;
      }
    </style>
  `),
  managerHead: (head) => (`
    ${head}
    <style>
      div[role="main"] {
        top: 0 !important;
        height: 100% !important;
      }
      div[role="main"] > div {
        box-shadow: unset;
      }
      #storybook-explorer-tree > div {
        margin-right: unset;
      }
      a.sidebar-item, button.sidebar-item {
        color: #1e1e1f;
        padding-top: .5rem;
        padding-bottom: .5rem;
        margin: .5rem 0 .5rem 18px;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 400;
      }
      a.sidebar-item svg, button.sidebar-item svg {
        display: none;
      }
      a.sidebar-item:hover, button.sidebar-item:hover {
        background: rgba(0,16,61,.04);
      }
      a.sidebar-item[data-selected="true"] {
        background: rgb(224 224 224);
        font-weight: 400;
        color: #1e1e1f;
      }
      button.sidebar-subheading-action {
        display: none;
      }
    </style>
  `)
}