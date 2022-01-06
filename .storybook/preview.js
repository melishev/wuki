import React from 'react';
import { themes } from '@storybook/theming';

import { grid } from '../components/utils/theme';
import { WukiProvider, Text, Code } from '../components';

import { DocsContainer, DocsStory, ArgsTable } from '@storybook/addon-docs';

import { I18nextProvider, useTranslation } from 'react-i18next';
import i18nConfig from './helpers/i18next.js'

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
    container: ({ children, context }) => {
      const { t, i18n } = useTranslation()

      const Universal = () => {
        const { name } = context.component

        return (
          <>
            <Text tag="h1" variant="h2">{name}</Text>
            <Text variant="body2" style={{margin: '16px 0'}}>{useTranslation(name.toLowerCase()).t('description')}</Text>
            <Code code={`import { ${name} } from 'wuki'`} />
            {children}
            <Text tag="h2" variant="h5">{useTranslation(name.toLowerCase()).t('examples.title')}</Text>
            {context.componentStories().map((story) => (
              <div key={story.id}>
                <h3>{useTranslation(name.toLowerCase()).t(`examples.${story.name.toLowerCase()}.title`)}</h3>
                <p>{useTranslation(name.toLowerCase()).t(`examples.${story.name.toLowerCase()}.description`)}</p>
                <DocsStory id={story.id} />
              </div>
            ))}
            <Text tag="h2" variant="h5">Component API (props)</Text>
            <p>Благодаря простому API(props) вы можете настроить компонент под ваши нужды. Чаще всего в этом не будет нужды, но для лучшего эффекта они и существуют</p>
            <p>Divide the table into two parts, the first will contain the props of the component itself, the second will contain global</p>
            <ArgsTable />
          </>
        )
      }

      return (
      <I18nextProvider i18n={i18nConfig}>
        <WukiProvider cssBaseLine>
          <DocsContainer context={context}>
            <button><Text variant='body2' onClick={() => i18n.changeLanguage('ru')}>Russia 🇷🇺</Text></button>
            <button><Text variant='body2' onClick={() => i18n.changeLanguage('en')}>English 🇺🇸</Text></button>
            {context.component
              ? <Universal />
              : children
            }
          </DocsContainer>
        </WukiProvider>
      </I18nextProvider>
    )},
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
}
