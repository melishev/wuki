import React from 'react';
import { render } from '../utils/wrapperTests';
import { WukiProvider } from '../index';

describe('Provider', () => {
  it('just render', () => {
    render(
      <WukiProvider>Provider</WukiProvider>,
    );
  });
  it('with CssBaseLine', () => {
    render(
      <WukiProvider cssBaseLine>Provider</WukiProvider>,
    );
  });
});
