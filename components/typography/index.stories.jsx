/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React from 'react';

import Text from './index';

import Row from '../row';
import Col from '../col';

import Doc from './readme.mdx';

export default {
  title: 'General/Typography',
  component: Text,
  parameters: {
    docs: {
      page: Doc,
      description: {
        component:
          'Use typography to present your design and content as clearly and efficiently as possible.',
      },
    },
  },
};

export const Default = () => (
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
      <Text textStyle="body1">The quick brown fox jumps over the lazy dog</Text>
    </Col>
    <Col col={24}>
      <Text tag="p">The quick brown fox jumps over the lazy dog</Text>
    </Col>
    <Col col={24}>
      <Text tag="small" textStyle="small">
        The quick brown fox jumps over the lazy dog
      </Text>
    </Col>
  </Row>
);
