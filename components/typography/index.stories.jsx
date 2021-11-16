/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../utils/theme';

import Text from './index';

import Row from '../row';
import Col from '../col';

export default {
  title: 'General/Typography',
  component: Text,
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
  <WrapperStoryBook>
    <Row>
      <Col col={24}>
        <Text tag="h1">The quick brown fox jumps over the lazy dog</Text>
      </Col>
      <Col col={24}>
        <Text tag="h2">The quick brown fox jumps over the lazy dog</Text>
      </Col>
      <Col col={24}>
        <Text tag="h3">The quick brown fox jumps over the lazy dog</Text>
      </Col>
      <Col col={24}>
        <Text tag="h4">The quick brown fox jumps over the lazy dog</Text>
      </Col>
      <Col col={24}>
        <Text tag="h5">The quick brown fox jumps over the lazy dog</Text>
      </Col>
      <Col col={24}>
        <Text tag="h6">The quick brown fox jumps over the lazy dog</Text>
      </Col>
      <Col col={24}>
        <Text tag="p" textStyle="subTitle">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Col>
      <Col col={24}>
        <Text tag="p" textStyle="body1">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Col>
      <Col col={24}>
        <Text tag="p" textStyle="body2">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Col>
      <Col col={24}>
        <Text tag="small" textStyle="small">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Col>
    </Row>
  </WrapperStoryBook>
);
