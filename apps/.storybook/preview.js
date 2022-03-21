import { themes } from '@storybook/theming';
import { grid } from '../../packages/theme';

import { WukiProvider } from '../../packages/_nameFramework_';

export const decorators = [(story) => {
  if ('_nameFramework_' === 'vue') {
    return {
      components: { WukiProvider, story },
      template: '<WukiProvider cssBaseLine><story /></WukiProvider>',
    };
  } else {
    const Story = story;
    return <WukiProvider cssBaseLine><Story /></WukiProvider>;
  }
}];

export const parameters = {
  actions: {
    argTypesRegex: '^on[a-z].*'
  },
  docs: {
    theme: themes.light,
  },
  options: {
    storySort: {
      order: ['Getting Start', ['Start', 'Installation', 'Theming'], 'General', 'Layout'],
    },
  },
  grid: {
    gridOn: false,
    columns: grid.col,
    gap: grid.gap,
    gutter: `${grid.margin}px`,
    maxWidth: 'auto',
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
};
