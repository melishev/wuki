/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Grids from './index';
import Button from '../button';

export default {
  title: 'Layout/Grid',
  component: Grids,
};

export const Grid = () => (
  <Grids.Row>
    <Grids.Col col={2}>
      <Button />
    </Grids.Col>
    <Grids.Col col={3}>
      <Button />
    </Grids.Col>
    <Grids.Col>
      <Button />
    </Grids.Col>
  </Grids.Row>
);
