import React from 'react';
import { themes } from '@storybook/theming';

import { WukiProvider, Row, Col, Text } from '../components';

export const decorators = [
  (Story, { args }) => (
    <WukiProvider>
      <Row>
        <Col col={24}>
          <Text tag="h1" textStyle="h3">{ args.title }</Text>
          <Text>{ args.description }</Text>
        </Col>
      </Row>
      <Story />
    </WukiProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[a-z].*" },
  docs: {
    theme: themes.dark,
  },
  grid: {
    gridOn: true, // ???
    columns: 24, // set from config
    gap: '21px', // set from congig
    gutter: 'calc(1rem + 42px)', // set from config
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
    grid: {
      disable: true,
    }
  },
  viewport: {
    viewports: {
      xs: {
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

export const globalTypes = {
  // theme: {
  //   name: 'Theme',
  //   description: 'StoryBook theme',
  //   defaultValue: 'Dark',
  //   toolbar: {
  //     icon: 'circlehollow',
  //     items: ['Light', 'Dark'],
  //     showName: true,
  //   },
  // },
  locale: {
    name: 'Translations',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      showName: true,
      // icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'ru', right: '🇷🇺', title: 'Russia' },
      ],
    },
  },
};