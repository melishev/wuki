import React from 'react';

import { Grid } from '../index';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          'In standard configuration, grid has the following settings: colCount: 24, gapSize: 21, rowGap: 42',
      },
    },
  },
};

export const Default = () => (
  <Grid container>
    {[...Array(24)].map((item, index) => (
      <Grid key={item}>
        <p>{index + 1}</p>
      </Grid>
    ))}
  </Grid>
);

export const Offset = () => (
  <Grid container>
    <Grid col={4}>
      <p>col: 4</p>
    </Grid>
    <Grid col={4} offset={11}>
      <p>col: 4, offset: 11</p>
    </Grid>
    <Grid col={4} offset={21}>
      <p>col: 4, offset: 21</p>
    </Grid>
  </Grid>
);

Offset.parameters = {
  docs: {
    description: {
      story: 'Need description!',
    },
  },
};

export const Responsive = () => (
  <Grid container>
    <Grid col={{ xs: 12, xl: 8 }}>
      <p>col: 12, col-xl: 8</p>
    </Grid>
    <Grid col={{ xs: 12, xl: 8 }}>
      <p>col: 12, col-xl: 8</p>
    </Grid>
    <Grid col={{ xs: 12, xl: 8 }}>
      <p>col: 12, col-xl: 8</p>
    </Grid>
  </Grid>
);

Responsive.parameters = {
  docs: {
    description: {
      story: 'Use responsive classes to adjust your layout across viewports.',
    },
  },
};

export const Tag = () => (
  <Grid container>
    <Grid col={6} tag="aside">
      <p>col: 6, tag: aside</p>
    </Grid>
    <Grid col={18} tag="main">
      <p>col 18, tag: main</p>
    </Grid>
  </Grid>
);

Tag.parameters = {
  docs: {
    description: {
      story: `Sometimes, for better performance, you need to use semantic HTML tags. A props - tag has been added specifically for this.
      It allows the developer to override the default tag - div, which would be better suited. Props Tag is available for Row and Col.`,
    },
  },
};

export const Style = () => (
  <Grid container>
    <Grid col={6} tag="aside" style={{ color: 'red' }}>
      <p>col: 6, tag: aside</p>
    </Grid>
    <Grid col={18} tag="main" style={{ color: 'blue' }}>
      <p>col 18, tag: main</p>
    </Grid>
  </Grid>
);
// export const Sandbox = () => <></>;

// Sandbox.parameters = {
//   docs: {
//     description: {
//       story: 'Here you can customize the Grid and its contents however you like to get a better understanding of how it actually works.',
//     },
//   },
// };
