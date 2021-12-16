import React from 'react';

import { Grid, Code } from '../index';

export default {
  title: '👨🏻‍💻 IN DEVELOP/Code',
  component: Code,
};

const codeInline = 'npm install wuki';
const codeHTML = `<div>
  <p>Hello, world!</p>
</div>
`;
const codeJS = `insertAt(index, value) {
  const previousNode = this.nodes[index - 1] || null;
  const nextNode = this.nodes[index] || null;
  const node = { value, next: nextNode };

  if (previousNode) previousNode.next = node;
  this.nodes.splice(index, 0, node);
}`;

export const Default = () => (
  <Grid container>
    <Grid col={8}>
      <Code code={codeInline} />
    </Grid>
    <Grid col={8}>
      <Code code={codeHTML} />
    </Grid>
    <Grid col={8}>
      <Code code={codeJS} />
    </Grid>
  </Grid>
);

export const Hover = () => (
  <Grid container>
    <Grid col={8}>
      <Code code={codeInline} />
    </Grid>
    <Grid col={8}>
      <Code code={codeHTML} />
    </Grid>
    <Grid col={8}>
      <Code code={codeJS} />
    </Grid>
  </Grid>
);
