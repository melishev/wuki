import React from 'react';
import Documentation from './docs/index.mdx';

import { Grid, Text } from '../index';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
};

const exampleStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem 0',
  background: '#FFFFFF',
  border: '1px solid #D6D6D6',
  borderRadius: 6,
  boxShadow: '4px 4px 4px #ECECEC',
};

export const Default = () => (
  <Grid container>
    {[...Array(24)].map((curr, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Grid key={index} style={exampleStyle}>
        <Text variant="body2">{index + 1}</Text>
      </Grid>
    ))}
    <Grid col={8} style={exampleStyle}>
      <Text variant="body2">col: 8</Text>
    </Grid>
    <Grid col={5} style={exampleStyle}>
      <Text variant="body2">col: 5</Text>
    </Grid>
    <Grid col={9} style={exampleStyle}>
      <Text variant="body2">col: 9</Text>
    </Grid>
    <Grid col={2} style={exampleStyle}>
      <Text variant="body2">col: 2</Text>
    </Grid>
  </Grid>
);

export const Offset = () => (
  <Grid container>
    <Grid col={4} style={exampleStyle}>
      <Text variant="body2">
        col: 4
      </Text>
    </Grid>
    <Grid col={4} offset={11} style={exampleStyle}>
      <Text variant="body2">
        col: 4, offset: 11
      </Text>
    </Grid>
    <Grid col={4} offset={21} style={exampleStyle}>
      <Text variant="body2">
        col: 4, offset: 21
      </Text>
    </Grid>
    <Grid col={6} offset={5} style={exampleStyle}>
      <Text variant="body2">
        col: 6, offset: 5
      </Text>
    </Grid>
    <Grid col={6} offset={15} style={exampleStyle}>
      <Text variant="body2">
        col: 6, offset: 15
      </Text>
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
    <Grid col={{ xs: 24, md: 12, xl: 8 }} style={exampleStyle}>
      <Text variant="body2">
        col: 24, col-md: 12, col-xl: 8
      </Text>
    </Grid>
    <Grid col={{ xs: 24, md: 12, xl: 8 }} style={exampleStyle}>
      <Text variant="body2">
        col: 24, col-md: 12, col-xl: 8
      </Text>
    </Grid>
    <Grid col={{ xs: 24, md: 12, xl: 8 }} style={exampleStyle}>
      <Text variant="body2">
        col: 24, col-md: 12, col-xl: 8
      </Text>
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
    <Grid col={24} tag="header" style={exampleStyle}>
      <Text variant="body2">
        col: 24, tag: header
      </Text>
    </Grid>
    <Grid col={6} tag="aside" style={exampleStyle}>
      <Text variant="body2">
        col: 6, tag: aside
      </Text>
    </Grid>
    <Grid col={18} tag="main" style={exampleStyle}>
      <Text variant="body2">
        col: 18, tag: main
      </Text>
    </Grid>
    <Grid col={24} tag="footer" style={exampleStyle}>
      <Text variant="body2">
        col: 24, tag: footer
      </Text>
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
      <Text variant="body2">
        See source code
      </Text>
    </Grid>
    <Grid col={18} tag="main">
      <Text variant="body2" style={{ color: 'blue' }}>
        See source code
      </Text>
    </Grid>
  </Grid>
);
