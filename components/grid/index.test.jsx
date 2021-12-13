import React from 'react';
import { render } from '../utils/setupTests';
import { Grid } from '../index';

describe('Grid', () => {
  it('just render', () => {
    render(
      <Grid container>
        <Grid />
      </Grid>,
    );
  });
  it('with a className equal to the Col = Number', () => {
    render(
      <Grid container>
        <Grid col="2" />
      </Grid>,
    );
  });
  it('with a className equal to the Col = Object', () => {
    render(
      <Grid container>
        <Grid col={{ md: 4, xl: 12 }} />
      </Grid>,
    );
  });
  it('with a className equal to the Offset = Number', () => {
    render(
      <Grid container>
        <Grid offset="4" />
      </Grid>,
    );
  });
});
