import React from 'react'
import { render } from '@testing-library/_nameFramework_';
import '@testing-library/jest-dom';
import WukiProvider from '@wuki/_nameFramework_/provider';

const customRender = (component, options) => render(
  <WukiProvider cssBaseLine>
    { component }
  </WukiProvider>, { ...options });

export * from '@testing-library/_nameFramework_';

export { customRender as render };
