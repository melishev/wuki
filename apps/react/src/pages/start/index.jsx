/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@wuki-ui/react';
import { colors } from '@wuki-ui/theme';

export default function start() {
  const t = (key) => useTranslation('start').t(key);

  return (
    <>
      <Text tag="h1" style={{ margin: '0 0 20px' }}>
        {t('title')}
      </Text>

      <Text variant="body1" style={{ margin: '16px 0', color: colors.grey[500] }}>
        {t('description')}
      </Text>

      <Text tag="a" variant="body2" href="?path=/docs/getting-start-installation--page" style={{ color: colors.blue[400] }}>
        {t('button.0')}
      </Text>
    </>
  );
}
