// import * as wukiTheme from '@wuki/theme'

module.exports = _nameFramework_ = process.env.framework_for_storybook

module.exports = {
  framework: `@storybook/${_nameFramework_ === 'react' ? _nameFramework_ : `${_nameFramework_}3`}`,
  stories: [
    `./stories/**/*.stories.@(js|jsx|mdx)`,
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
      },
    },
    'storybook-addon-grid/preset',
    // 'storybook-addon-grid/chromatic',
  ],
  staticDirs: ['./public'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|mdx)$/,
      loader: 'string-replace-loader',
      options: {
        search: '_nameFramework_',
        replace: _nameFramework_,
        flags: 'g',
      },
    });
    return config;
  },
  // previewHead: (head) => (`
  //   ${head}
  //   <link rel="preconnect" href="https://fonts.googleapis.com">
  //   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  //   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Manrope:wght@200;300;400;500;600;700;800&display=swap">
  //   <style>
  //     html {
  //       scrollbar-width: none;
  //     }
  //     body {
  //       padding-left: 0 !important;
  //       padding-right: 0 !important;
  //       background: ${wukiTheme.colors.grey[25]};
  //     }
  //     body::-webkit-scrollbar {
  //       width: 0;
  //     }
  //     h1, h2, h3, h4, h5, h6, p, li {
  //       font-family: ${wukiTheme.type.family} !important;
  //     }
  //     .sbdocs.sbdocs-wrapper {
  //       background: ${wukiTheme.colors.grey[25]};
  //     }
  //     .sbdocs-preview {
  //       margin: 20px 0 28px !important;
  //     }
  //     .i18n_controller {
  //       display: flex;
  //       flex-direction: column;
  //       gap: 1rem;
  //       position: fixed;
  //       top: calc(4rem + 16px);
  //       right: 1rem;
  //     }
  //   </style>
  // `),
  // managerHead: (head) => (`
  //   ${head}
  //   <!-- Favicon -->
  //   <meta name="theme-color" content="${wukiTheme.colors.grey[600]}">
  //   <link rel="mask-icon" href="/safari-pinned-tab.svg" color="${wukiTheme.colors.grey[400]}">
  //   <link rel="icon" href="/wukiFavicon.svg">
  //   <!-- Connect Font -->
  //   <link rel="preconnect" href="https://fonts.googleapis.com">
  //   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  //   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Manrope:wght@200;300;400;500;600;700;800&display=swap">
  //   <style>
  //     body {
  //       font-family: ${wukiTheme.type.family};
  //     }
  //     div[role="main"] {
  //       top: 0 !important;
  //       height: 100% !important;
  //     }
  //     div[role="main"] > div {
  //       box-shadow: unset;
  //     }
  //     // STORYBOOK SIDEBAR
  //     #storybook-explorer-tree > div {
  //       margin-right: unset;
  //     }
  //     a.sidebar-item, button.sidebar-item {
  //       width: -webkit-fill-available;
  //       width: -moz-available;
  //       width: fill-available;
  //       color: ${wukiTheme.colors.grey[900]};
  //       padding-top: .5rem;
  //       padding-bottom: .5rem;
  //       margin: .5rem 18px;
  //       border-radius: 6px;
  //       font-size: 1rem;
  //       font-weight: 400;
  //     }
  //     a.sidebar-item svg, button.sidebar-item svg {
  //       display: none;
  //     }
  //     a.sidebar-item:hover, button.sidebar-item:hover {
  //       background: ${wukiTheme.colors.grey[50]};
  //     }
  //     a.sidebar-item[data-nodetype="story"] {
  //       font-size: .85rem;
  //     }
  //     a.sidebar-item[data-selected="true"] {
  //       background: ${wukiTheme.colors.blue[500]};
  //       font-weight: 400;
  //       color: white;
  //     }
  //     button.sidebar-subheading-action {
  //       display: none;
  //     }
  //   </style>
  // `),
  core: {
    builder: "webpack5",
  },
};
