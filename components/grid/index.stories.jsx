import React from 'react';
import Doc from './doc.mdx';

import { Grid, Text } from '../index';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: Doc,
      description: {
        component:
          'In standard configuration, grid has the following settings: colCount: 24, gapSize: 21, rowGap: 42',
      },
    },
  },
};

const styleCol = {
  border: '1px solid black',
};

export function Default() {
  return (
    <Grid container>
      {[...Array(24)].map((item, index) => (
        <Grid key={item} style={styleCol}>
          <Text variant="body2">{index + 1}</Text>
        </Grid>
      ))}
      <Grid col={8} style={styleCol}>
        <Text variant="body2">8</Text>
      </Grid>
      <Grid col={12} style={styleCol}>
        <Text variant="body2">12</Text>
      </Grid>
      <Grid col={4} style={styleCol}>
        <Text variant="body2">4</Text>
      </Grid>
    </Grid>
  );
}

export const Offset = () => (
  <Grid container>
    <Grid col={4} style={styleCol}>
      <Text variant="body2">
        col: 4
      </Text>
    </Grid>
    <Grid col={4} offset={11} style={styleCol}>
      <Text variant="body2">
        col: 4, offset: 11
      </Text>
    </Grid>
    <Grid col={4} offset={21} style={styleCol}>
      <Text variant="body2">
        col: 4, offset: 21
      </Text>
    </Grid>
    <Grid col={4} offset={6} style={styleCol}>
      <Text variant="body2">
        col: 4, offset: 6
      </Text>
    </Grid>
    <Grid col={4} offset={12} style={styleCol}>
      <Text variant="body2">
        col: 4, offset: 12
      </Text>
    </Grid>
    <Grid col={8} offset={17} style={styleCol}>
      <Text variant="body2">
        col: 4, offset: 17
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
    <Grid col={{ xs: 24, md: 12, xl: 8 }} style={styleCol}>
      <Text variant="body2">
        col: 12, col-md: 12, col-xl: 8
      </Text>
    </Grid>
    <Grid col={{ xs: 24, md: 12, xl: 8 }} style={styleCol}>
      <Text variant="body2">
        col: 12, col-md: 12, col-xl: 8
      </Text>
    </Grid>
    <Grid col={{ xs: 24, md: 12, xl: 8 }} style={styleCol}>
      <Text variant="body2">
        col: 12, col-md: 12, col-xl: 8
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
    <Grid col={6} tag="aside" style={styleCol}>
      <Text variant="body2">
        col: 6, tag: aside
      </Text>
    </Grid>
    <Grid col={18} tag="main" style={styleCol}>
      <Text variant="body2">
        col: 18, tag: main
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
    <Grid col={6} tag="aside" style={{ color: 'red', ...styleCol }}>
      <Text variant="body2">
        col: 6, tag: aside
      </Text>
    </Grid>
    <Grid col={18} tag="main">
      <Text variant="body2" style={{ color: 'blue', ...styleCol }}>
        col: 6, tag: aside
      </Text>
    </Grid>
  </Grid>
);

const testStyle = {
  border: '1px solid #696969',
};

export const Example = () => (
  <Grid container tag="main">
    <Grid col={24} tag="header" style={{ ...testStyle, height: '60px' }} />
    <Grid col={4} tag="ul" style={{ ...testStyle, height: '100vh' }}>
      <li>Lifestyle</li>
      <li>Jordan</li>
      <li>Running</li>
      <li>Basketball</li>
      <li>Football</li>
      <li>Soccer</li>
      <li>Training & Gym</li>
      <li>Skateboarding</li>
      <li>Baseball</li>
      <li>Golf</li>
      <li>Tennis</li>
      <li>Walking</li>
      <li>Track & Field</li>
      <li>Sandals & Slides</li>
    </Grid>
    <Grid col={20} style={{ ...testStyle, height: '100vh' }} />
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
