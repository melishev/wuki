import React from 'react';
import { themes } from '@storybook/theming';

import { DocsContainer } from '@storybook/addon-docs';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { grid } from '../theme';
import { WukiProvider } from '../components';

import i18nConfig from './helpers/i18next';

import DocsWrapper from './components/docsWrapper';

export const decorators = [
  (Story) => (
    <WukiProvider cssBaseLine>
      <Story />
    </WukiProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[a-z].*' },
  docs: {
    theme: themes.light,
    container: ({ children, context }) => {
      const { i18n } = useTranslation();

      return (
        <I18nextProvider i18n={i18nConfig}>
          <WukiProvider cssBaseLine>
            <DocsContainer context={context}>
              <div className="i18n_controller">
                <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                  <option value="en">🇺🇸 English</option>
                  <option value="ru">🇷🇺 Russian</option>
                </select>
              </div>
              {context.component
                ? <DocsWrapper context={context}>{children}</DocsWrapper>
                : children}
            </DocsContainer>
          </WukiProvider>
        </I18nextProvider>
      );
    },
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
