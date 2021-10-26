/* eslint-disable react/no-array-index-key,
                  react/jsx-props-no-spreading,
                  import/no-unresolved,
                  react/prop-types
*/

import React from 'react';
import './stories.scss';

import Row from './row';
import Col from './col';

export default {
  title: 'Layout/Grid',
  component: [Row, Col],
};

const Information = ({ title, description }) => (
  <Row>
    <Col col={24}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Col>
  </Row>
);

export const Default = () => (
  <>
    <Information
      title="Default Grid"
      description="In standard configuration, grid has the following settings: colCount: 24, gapSize: 21, rowGap: 42"
    />
    <Row>
      {[...Array(24)].map((item, index) => (
        <Col col={item} key={index}>
          <p style={{ textAlign: 'center' }}>{index + 1}</p>
        </Col>
      ))}
    </Row>
  </>
);

export const Offset = () => (
  <>
    <Information title="Grid using offset" />
    <Row>
      <Col col={4}>
        <p style={{ textAlign: 'center' }}>col: 4</p>
      </Col>
      <Col col={4} offset={11}>
        <p style={{ textAlign: 'center' }}>col: 4, offset: 10</p>
      </Col>
      <Col col={4} offset={21}>
        <p style={{ textAlign: 'center' }}>col: 4, offset: 21</p>
      </Col>
    </Row>
  </>
);

export const Responsive = () => (
  <>
    <Information title="Grid using responsive" />
    <Row>
      <Col col={{ xs: 8, xl: 12 }}>
        <p style={{ textAlign: 'center' }}>col: 8</p>
      </Col>
      <Col col={{ xs: 8, xl: 12 }}>
        <p style={{ textAlign: 'center' }}>col: 8</p>
      </Col>
      <Col col={{ xs: 8, xl: 12 }}>
        <p style={{ textAlign: 'center' }}>col: 8</p>
      </Col>
    </Row>
    <p>
      Тут должен будет располагаться пример кода, благодаря которому был
      реализован данный пример, а лучше использовать встроенные функции
      StoryBook.
    </p>
  </>
);

export const Tag = () => (
  <>
    <Information
      title="Grid using Tag"
      description="Sometimes, for better performance, you need to use semantic HTML tags. A props - tag has been added specifically for this. It allows the developer to override the default tag - div, which would be better suited. Props Tag is available for Row and Col."
    />
    <Row>
      <Col col={6} tag="aside">
        <p style={{ textAlign: 'center' }}>col: 4, tag: aside</p>
      </Col>
      <Col col={18} tag="main">
        <p style={{ textAlign: 'center' }}>col 20, tag: main</p>
      </Col>
    </Row>
  </>
);

export const Sandbox = () => (
  <>
    <Information
      title="Sandbox"
      description="Here you can customize the Grid and its contents however you like to get a better understanding of how it actually works."
    />
  </>
);
