/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Code, Grid } from '@wuki-ui/react';
import { colors } from '@wuki-ui/theme';
import * as Icons from 'lucide-react';
import { Note } from '../../components';

export default function start() {
  const t = (key) => useTranslation('icons').t(key);

  const cssCell = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${colors.grey[100]}`,
    padding: '2rem 0',
    borderRadius: 4,
  };

  return (
    <>
      <Text tag="h1" style={{ margin: '0 0 20px' }}>
        {t('title')}
      </Text>

      <Text variant="body2" style={{ margin: '16px 0' }}>
        {t('description')}
        {' '}
        <Text tag="a" variant="body2" href="https://www.npmjs.com/package/react-feather" target="_blank" rel="noreferrer" style={{ color: colors.blue[400] }}>React Feather Icons</Text>
        .
      </Text>

      <Code>
        npm i react-feather
      </Code>

      <Text variant="body2" style={{ margin: '16px 0' }}>
        {t('text')}
        {' '}
        <Text tag="a" variant="body2" href="https://www.npmjs.com/package/react-feather#usage" target="_blank" rel="noreferrer" style={{ color: colors.blue[400] }}>{t('button')}</Text>
        .
      </Text>

      <Note>
        {t('note.text')}
        {' '}
        <Text tag="a" variant="body2" href="#test" style={{ color: colors.blue[400] }}>
          {t('note.button')}
        </Text>
        .
      </Note>

      <Text tag="h2" variant="h4" style={{ margin: '40px 0 20px' }}>
        {t('gallery.title')}
      </Text>

      <Grid container style={{ padding: '0' }}>
        {Object.entries(Icons).map(([name, Icon]) => (
          name !== 'createReactComponent'
            ? (
              <Grid col={4} key={name} style={cssCell}>
                <Icon />
              </Grid>
            )
            : ''),
        )}
      </Grid>
    </>
  );
}
