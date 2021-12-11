/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WukiProvider } from '../index';

const testsDecorator = ({ children }) => (
  <WukiProvider cssBaseLine>
    {children}
  </WukiProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: testsDecorator, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
