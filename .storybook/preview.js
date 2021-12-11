import React from 'react';
import { themes } from '@storybook/theming';

import wukiTheme from '../components/utils/theme';
import { WukiProvider } from '../components';

export const decorators = [
  (Story, { args }) => (
    <WukiProvider cssBaseLine>
      <Story />
    </WukiProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[a-z].*" },
  docs: {
    theme: themes.light,
  },
  grid: {
    gridOn: false,
    columns: wukiTheme.grid.col,
    gap: wukiTheme.grid.gap,
    gutter: `${wukiTheme.grid.margin}px`,
    maxWidth: 'auto',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    }
  },
  viewport: {
    viewports: {
      sm: {
        name: 'SM - 576px',
        styles: {
          width: '576px',
          height: '100%',
        },
      },
      md: {
        name: 'MD - 768px',
        styles: {
          width: '768px',
          height: '100%',
        },
      },
      lg: {
        name: 'LG - 992px',
        styles: {
          width: '992px',
          height: '100%',
        },
      },
      xl: {
        name: 'XL - 1200px',
        styles: {
          width: '1200px',
          height: '100%',
        },
      },
      xxl: {
        name: 'XXL - 1400px',
        styles: {
          width: '1400px',
          height: '100%',
        },
      },
    },
  },
}
