import React from 'react';

import Row from '../row';
import Col from '../col';

export default {
  title: 'Layout/Grid',
  component: [Row, Col],
  parameters: {
    docs: {
      description: {
        component:
          'In standard configuration, grid has the following settings: colCount: 24, gapSize: 21, rowGap: 42',
      },
    },
  },
};

export const Default = () => (
  <Row>
    {[...Array(24)].map((item, index) => (
      <Col col={item} key={item}>
        <p>{index + 1}</p>
      </Col>
    ))}
  </Row>
);

export const Offset = () => (
  <Row>
    <Col col={4}>
      <p>col: 4</p>
    </Col>
    <Col col={4} offset={11}>
      <p>col: 4, offset: 11</p>
    </Col>
    <Col col={4} offset={21}>
      <p>col: 4, offset: 21</p>
    </Col>
  </Row>
);

Offset.parameters = {
  docs: {
    description: {
      story: 'Need description!',
    },
  },
};

export const Responsive = () => (
  <Row>
    <Col col={{ xs: 12, xl: 8 }}>
      <p>col: 12, col-xl: 8</p>
    </Col>
    <Col col={{ xs: 12, xl: 8 }}>
      <p>col: 12, col-xl: 8</p>
    </Col>
    <Col col={{ xs: 12, xl: 8 }}>
      <p>col: 12, col-xl: 8</p>
    </Col>
  </Row>
);

Responsive.parameters = {
  docs: {
    description: {
      story: 'Use responsive classes to adjust your layout across viewports.',
    },
  },
};

export const Tag = () => (
  <Row>
    <Col col={6} tag="aside">
      <p>col: 6, tag: aside</p>
    </Col>
    <Col col={18} tag="main">
      <p>col 18, tag: main</p>
    </Col>
  </Row>
);

Tag.parameters = {
  docs: {
    description: {
      story: `Sometimes, for better performance, you need to use semantic HTML tags. A props - tag has been added specifically for this.
      It allows the developer to override the default tag - div, which would be better suited. Props Tag is available for Row and Col.`,
    },
  },
};

export const Sandbox = () => <></>;

Sandbox.parameters = {
  docs: {
    description: {
      story: 'Here you can customize the Grid and its contents however you like to get a better understanding of how it actually works.',
    },
  },
};
