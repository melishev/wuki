/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React from 'react';

import Text from './index';

import Row from '../grid/row';
import Col from '../grid/col';

export default {
  title: 'General/Typography',
  component: Text,
};

const Information = ({ title, description }) => (
  <Row>
    <Col col={24}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Col>
  </Row>
);

export const Typography = () => (
  <>
    <Information title="Title" description="Description" />
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
    </Row>
  </>
);
