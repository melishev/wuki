import React from 'react';
import Documentation from './docs/index.mdx';

import { Grid, Text, Code } from '../index';

export default {
  title: 'Components/Code',
  component: Code,
  parameters: {
    docs: {
      page: Documentation,
    },
  },
};

export const Default = () => (
  <Grid container>
    <Grid col={8}>
      <Code code="npm install wuki" />
      <Code>npm install wuki</Code>
    </Grid>
  </Grid>
);

export const MultiLine = () => (
  <Grid container>
    <Grid col={8}>
      <Code code={`<div>
  <p>Hello, world!</p>
</div>`}
      />
      <Code>
        {`<div>
  <p>Hello, world!</p>
</div>`}
      </Code>
    </Grid>
  </Grid>
);

export const Inline = () => (
  <Grid container>
    <Grid col={8}>
      <Text variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ullam maxime inventore,
        odio itaque minima quasi cum facere
        {' '}
        <Code code="npm install wuki@latest" inline />
        {' '}
        quia quisquam expedita unde beatae officia aspernatur, quae,
        dignissimos nobis culpa accusamus quo!
      </Text>
    </Grid>
  </Grid>
);
