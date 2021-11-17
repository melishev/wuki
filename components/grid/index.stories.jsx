/* eslint-disable react/no-array-index-key,
                  react/jsx-props-no-spreading,
                  import/no-unresolved,
                  react/prop-types
*/

import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../utils/theme';

import './stories.scss';

import Row from '../row';
import RowJss from '../row-jss';
import Col from '../col';
import ColJss from '../col-jss';

export default {
  title: 'Layout/Grid',
  component: [Row, Col],
};

const WrapperStoryBook = ({
  children,
  title = 'Title',
  description = 'Description',
}) => (
  <ThemeProvider theme={theme}>
    <Row>
      <Col col={24}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Col>
    </Row>
    {children}
  </ThemeProvider>
);

export const Default = () => (
  <WrapperStoryBook
    title="Default Grid"
    description="In standard configuration, grid has the following settings: colCount: 24, gapSize: 21, rowGap: 42"
  >
    <Row>
      {[...Array(24)].map((item, index) => (
        <Col col={item} key={index}>
          <p>{index + 1}</p>
        </Col>
      ))}
    </Row>
    <RowJss>
      {[...Array(24)].map((item, index) => (
        <ColJss col={item} key={index}>
          <p>{index + 1}</p>
        </ColJss>
      ))}
    </RowJss>
  </WrapperStoryBook>
);

export const Offset = () => (
  <WrapperStoryBook title="Grid using offset">
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
    <RowJss>
      <ColJss col={4}>
        <p>col: 4</p>
      </ColJss>
      <ColJss col={4} offset={11}>
        <p>col: 4, offset: 11</p>
      </ColJss>
      <ColJss col={4} offset={21}>
        <p>col: 4, offset: 21</p>
      </ColJss>
    </RowJss>
  </WrapperStoryBook>
);

export const Responsive = () => (
  <WrapperStoryBook
    title="Grid using responsive"
    description="Use responsive classes to adjust your layout across viewports."
  >
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
    <RowJss>
      <ColJss col={{ xs: 12, xl: 8 }}>
        <p>col: 12, col-xl: 8</p>
      </ColJss>
      <ColJss col={{ xs: 12, xl: 8 }}>
        <p>col: 12, col-xl: 8</p>
      </ColJss>
      <ColJss col={{ xs: 12, xl: 8 }}>
        <p>col: 12, col-xl: 8</p>
      </ColJss>
    </RowJss>
    {/* Тут должен будет располагаться пример кода, благодаря которому был
    реализован данный пример, а лучше использовать встроенные функции
    StoryBook. */}
  </WrapperStoryBook>
);

export const Tag = () => (
  <WrapperStoryBook
    title="Grid using Tag"
    description="Sometimes, for better performance, you need to use semantic HTML tags. A props - tag has been added specifically for this. It allows the developer to override the default tag - div, which would be better suited. Props Tag is available for Row and Col."
  >
    <Row>
      <Col col={6} tag="aside">
        <p>col: 4, tag: aside</p>
      </Col>
      <Col col={18} tag="main">
        <p>col 20, tag: main</p>
      </Col>
    </Row>
  </WrapperStoryBook>
);

export const Sandbox = () => (
  <WrapperStoryBook
    title="Sandbox"
    description="Here you can customize the Grid and its contents however you like to get a better understanding of how it actually works."
  />
);
