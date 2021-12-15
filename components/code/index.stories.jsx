import React from 'react';

import { Grid, Code } from '../index';

export default {
  title: '👨🏻‍💻 IN DEVELOP/Code',
  component: Code,
};

export const Default = () => {
  const code = `<div>
  <p>Hello, world!</p>
</div>
`;

  return (
    <Grid container>
      <Grid col={7}>
        <Code code={code} />
      </Grid>
    </Grid>
  );
};

export const InlineCode = () => {
  const code = 'npm install wuki';

  return (
    <Grid container>
      <Grid col={7}>
        <Code code={code} />
      </Grid>
    </Grid>
  );
};
