const { colors, type} = require('../theme');

module.exports = {
  stories: [
    './docs/**/index.stories.mdx',
    '../components/**/*.stories.@(js|jsx|mdx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        measure: false,
        outline: false,
        backgrounds: false,
      }
    },
    'storybook-addon-grid/preset',
    'storybook-addon-grid/chromatic',
  ],
  staticDirs: ['../public'],
  previewHead: (head) => (`
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Manrope:wght@200;300;400;500;600;700;800&display=swap">
    <style>
      body {
        padding-left: 0 !important;
        padding-right: 0 !important;
        background: ${colors.grey[25]};
      }
      h1, h2, h3, h4, h5, h6, p, li {
        font-family: ${type.family} !important;
      }
      .sbdocs.sbdocs-wrapper {
        background: ${colors.grey[25]};
      }
      .i18n_controller {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: fixed;
        top: calc(4rem + 16px);
        right: 1rem;
      }
    </style>
  `),
  managerHead: (head) => (`
    ${head}
    <!-- Favicon -->
    <meta name="theme-color" content="${colors.orange[700]}">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="${colors.orange[500]}">
    <link rel="shortcut icon" href="/wukiFavicon.ico">
    <link rel="icon" type="image/png" href="/wukiFavicon.png" sizes="192x192">
    <!-- Connect Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Manrope:wght@200;300;400;500;600;700;800&display=swap">
    <style>
      body {
        font-family: ${type.family};
      }
      div[role="main"] {
        top: 0 !important;
        height: 100% !important;
      }
      div[role="main"] > div {
        box-shadow: unset;
      }
      // STORYBOOK SIDEBAR
      #storybook-explorer-tree > div {
        margin-right: unset;
      }
      a.sidebar-item, button.sidebar-item {
        color: ${colors.grey[900]};
        padding-top: .5rem;
        padding-bottom: .5rem;
        margin: .5rem 18px;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 400;
      }
      a.sidebar-item svg, button.sidebar-item svg {
        display: none;
      }
      a.sidebar-item:hover, button.sidebar-item:hover {
        background: ${colors.grey[50]};
      }
      a.sidebar-item[data-selected="true"] {
        background: ${colors.blue[500]};
        font-weight: 400;
        color: white;
      }
      button.sidebar-subheading-action {
        display: none;
      }
    </style>
  `)
}