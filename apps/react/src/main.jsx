/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { WukiProvider } from '@wuki-ui/react';
import App from './app';

import './main.scss';

import i18nConfig from './i18n';

render(
  <BrowserRouter>
    <I18nextProvider i18n={i18nConfig}>
      <WukiProvider cssBaseLine>
        <App />
      </WukiProvider>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
