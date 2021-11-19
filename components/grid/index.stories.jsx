/* eslint-disable react/no-array-index-key,
                  react/jsx-props-no-spreading,
                  import/no-unresolved,
                  react/prop-types
*/

import React from 'react';

import Row from '../row';
import Col from '../col';

export default {
  title: 'Layout/Grid',
  component: [Row, Col],
};

export const Default = () => (
  <Row>
    {[...Array(24)].map((item, index) => (
      <Col col={item} key={index}>
        <p>{index + 1}</p>
      </Col>
    ))}
  </Row>
);

Default.args = {
  title: 'Default Grid',
  description:
    'In standard configuration, grid has the following settings: colCount: 24, gapSize: 21, rowGap: 42',
};

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

Offset.args = {
  title: 'Grid using offset',
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

Responsive.args = {
  title: 'Grid using responsive',
  description: 'Use responsive classes to adjust your layout across viewports.',
};

export const Tag = () => (
  <Row>
    <Col col={6} tag="aside">
      <p>col: 4, tag: aside</p>
    </Col>
    <Col col={18} tag="main">
      <p>col 20, tag: main</p>
    </Col>
  </Row>
);

Tag.args = {
  title: 'Grid using Tag',
  description:
    'Sometimes, for better performance, you need to use semantic HTML tags. A props - tag has been added specifically for this. It allows the developer to override the default tag - div, which would be better suited. Props Tag is available for Row and Col.',
};

export const Sandbox = () => <></>;

Sandbox.args = {
  title: 'Sandbox',
  description:
    'Here you can customize the Grid and its contents however you like to get a better understanding of how it actually works.',
};
