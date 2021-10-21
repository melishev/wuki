/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Grids from './index';

export default {
  title: 'Layout/Grid',
  component: Grids,
};

export const Grid = () => (
  <Grids.Row>
    <Grids.Col col={2}>
      <p>Col 2</p>
    </Grids.Col>
    <Grids.Col col={3} offset={10}>
      <p>Col 3, Offset 10</p>
    </Grids.Col>
    <Grids.Col col={2}>
      <p>Col 2</p>
    </Grids.Col>
  </Grids.Row>
);
