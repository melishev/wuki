import React from 'react';
import { render, screen } from '@testing-library/_nameFramework_';
import '@testing-library/jest-dom';
import { WukiProvider } from '../packages/_nameFramework_';

describe('Provider', () => {
  it('just render', () => {
    render(
      <WukiProvider><button>Provider</button></WukiProvider>,
    );
    expect(screen.getByText('Provider')).not.toHaveStyle(`overflow: visible`)
  });
  it('with CssBaseLine', () => {
    render(
      <WukiProvider cssBaseLine><button>Provider</button></WukiProvider>,
    );
    expect(screen.getByText('Provider')).toHaveStyle(`overflow: visible`)
  });
  // write test - custom theme
});
