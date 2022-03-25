import React from 'react'
import { render } from '@testing-library/_nameFramework_';
import '@testing-library/jest-dom';
import WukiProvider from '../packages/_nameFramework_/src/provider';

const customRender = (component, options) => render(
  <WukiProvider cssBaseLine>
    { component }
  </WukiProvider>, { ...options });

export * from '@testing-library/_nameFramework_';

export { customRender as render };
