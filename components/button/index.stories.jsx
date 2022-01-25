import React from 'react';
// import Documentation from './docs/index.mdx';
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import { LogIn, User } from 'react-feather';

import { Grid, Button } from '../index';

export default {
  title: 'General/Button',
  component: Grid,
  // parameters: {
  //   docs: {
  //     page: Documentation,
  //   },
  // },
};

export const Default = () => (
  <Grid container>
    <Grid col={6}>
      <Button size="large">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="large">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="large">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="large">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button>Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button>Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button>Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button>Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="small">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="small">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="small">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="small">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="mini">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="mini">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="mini">Sign In</Button>
    </Grid>
    <Grid col={6}>
      <Button size="mini">Sign In</Button>
    </Grid>
  </Grid>
);
