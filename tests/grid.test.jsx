import React from 'react';
import { render, screen } from './wrapper';
import { Grid } from '@wuki/_nameFramework_';

describe('Grid', () => {
  it('just render', () => {
    render(
      <>
        <Grid container>Grid container</Grid>
        <Grid>Grid item</Grid>
      </>,
    );
    expect(screen.getByText('Grid container')).toHaveClass('wk-con');
    expect(screen.getByText('Grid item')).toHaveClass('wk-col-xs-1');
  });
  it('with a className equal to the Col = Number', () => {
    render(
      <Grid container>
        <Grid col={12}>Grid item</Grid>
      </Grid>,
    );
    expect(screen.getByText('Grid item')).toHaveClass('wk-col-xs-12');
  });
  it('with a className equal to the Col = Object', () => {
    render(
      <Grid container>
        <Grid col={{ md: 4, xl: 12 }}>Grid item</Grid>
      </Grid>,
    );
    expect(screen.getByText('Grid item')).toHaveClass('wk-col-md-4 wk-col-xl-12');
  });
  it('with a className equal to the Offset = Number', () => {
    render(
      <Grid container>
        <Grid offset={4}>Grid item</Grid>
      </Grid>,
    );
    expect(screen.getByText('Grid item')).toHaveClass('wk-col-xs-1 wk-offset-4');
  });
});