/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@wuki-ui/react';
import { Aside } from '../../components';

export default function layoutGuide() {
  return (
    <>
      <Aside />
      <Grid tag="main" col={10} offset={8}>
        <Outlet />
      </Grid>
    </>
  );
}
