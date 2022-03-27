/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Code } from '@wuki-ui/react';
import { colors } from '@wuki-ui/theme';
import { Note } from '../../components';

export default function installation() {
  const t = (key) => useTranslation('installation').t(key);

  return (
    <>
      <Text tag="h1" style={{ margin: '0 0 20px' }}>
        {t('title')}
      </Text>

      <Text variant="body1" style={{ color: colors.grey[500] }}>
        {t('description')}
      </Text>

      <ol>
        <li>
          <Text tag="a" variant="body2" href="#test" style={{ color: colors.blue[400] }}>{t('installation.title')}</Text>
        </li>
        <li>
          <Text tag="a" variant="body2" href="#test" style={{ color: colors.blue[400] }}>{t('fonts.title')}</Text>
        </li>
        <li>
          <Text tag="a" variant="body2" href="#test" style={{ color: colors.blue[400] }}>{t('provider.title')}</Text>
        </li>
        <li>
          <Text tag="a" variant="body2" href="#test" style={{ color: colors.blue[400] }}>{t('components.title')}</Text>
        </li>
      </ol>

      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>
        {t('installation.title')}
      </Text>

      <Text variant="body2" style={{ margin: '16px 0' }}>
        {t('installation.text1')}
      </Text>

      <Code>
        npm install wuki
      </Code>

      <Text variant="body2" style={{ margin: '12px 0' }}>
        {t('installation.text2')}
      </Text>

      <Code>
        yarn add wuki
      </Code>

      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>
        {t('fonts.title')}
      </Text>

      <Text variant="body2">
        {t('fonts.description')}
      </Text>

      <ol style={{ margin: '16px 0' }}>
        <li>
          <Text tag="a" variant="body2" href="https://fonts.google.com/specimen/Manrope" target="_blank" style={{ color: colors.blue[400] }}>
            Manrope
          </Text>
        </li>
        <li>
          <Text tag="a" variant="body2" href="https://fonts.google.com/specimen/IBM+Plex+Mono?query=ibm+plex+mono" target="_blank" style={{ color: colors.blue[400] }}>
            IBM Plex Mono
          </Text>
        </li>
      </ol>

      <Text variant="body2">
        {t('fonts.text1')}
      </Text>

      <Text tag="h3" variant="body1" style={{ margin: '24px 0 16px' }}>
        1. Google Fonts
      </Text>

      <Code>
        {`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Manrope:wght@200;300;400;500;600;700;800&display=swap">`}
      </Code>

      <Text tag="h3" variant="body1" style={{ margin: '24px 0 16px' }}>
        2. Fontsource
      </Text>

      <Code>
        npm install @fontsource/manrope @fontsource/ibm-plex-mono
      </Code>

      <Text variant="body2" style={{ margin: '12px 0' }}>
        {t('fonts.text2')}
      </Text>

      <Code>
        {`import '@fontsource/manrope'
import '@fontsource/ibm-plex-mono'`}
      </Code>

      <Text variant="body2" style={{ margin: '12px 0 28px' }}>
        {t('fonts.text3')}
        {' '}
        <Text tag="a" variant="body2" href="https://fontsource.org/fonts/manrope" target="_blank" style={{ color: colors.blue[400] }}>Manrope</Text>
        {', '}
        <Text tag="a" variant="body2" href="https://fontsource.org/fonts/ibm-plex-mono" target="_blank" style={{ color: colors.blue[400] }}>IBM Plex Mono</Text>
        .
      </Text>

      <Note>{t('fonts.note')}</Note>

      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>{t('provider.title')}</Text>

      <Text variant="body2" style={{ margin: '16px 0' }}>
        {t('provider.description.text1')}
        {' '}
        <Text tag="a" variant="body2" href="?path=/docs/getting-start-theming--page" style={{ color: colors.blue[400] }}>
          {t('provider.description.link1')}
        </Text>
        {' '}
        {t('provider.description.text2')}
        {' '}
        <Text tag="a" variant="body2" href="https://necolas.github.io/normalize.css/" style={{ color: colors.blue[400] }}>
          {t('provider.description.link2')}
        </Text>
        {t('provider.description.text3')}
      </Text>

      <Code>
        {'import { WukiProvider } from \'wuki\';'}
      </Code>

      <Text variant="body2" style={{ margin: '12px 0' }}>
        {t('provider.text1')}
      </Text>

      <Code style={{ margin: '0 0 28px' }}>
        {`ReactDOM.render(
  <WukiProvider>
    <App />
  </WukiProvider>,
  document.getElementById('root')
);`}
      </Code>

      <Note type="important">
        {t('provider.note')}
      </Note>

      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>
        {t('components.title')}
      </Text>

      <Text variant="body2" style={{ margin: '16px 0' }}>
        {t('components.description')}
      </Text>

      <Code>
        {'import { Text } from \'wuki\''}
      </Code>
    </>
  );
}
