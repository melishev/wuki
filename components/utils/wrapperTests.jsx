/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WukiProvider } from '../index';

const componentWrapper = ({ children }) => (
  <WukiProvider cssBaseLine>
    { children }
  </WukiProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: componentWrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
