import React from 'react';

import { WukiProvider, Row, Col, Text } from '../components';

export const decorators = [
  (Story, { args }) => (
    <WukiProvider cssBaseLine={true}>
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