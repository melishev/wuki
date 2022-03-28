/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, Code } from '@wuki-ui/react';
import { colors } from '@wuki-ui/theme';
import { Iframe } from '../../components';

export default function layoutComponent() {
  const { componentName } = useParams();
  const { t } = useTranslation(['component', componentName]);

  return (
    <>
      <Text tag="h1" style={{ margin: '0 0 20px' }}>
        {componentName[0].toUpperCase() + componentName.slice(1)}
      </Text>

      <Text variant="body1" style={{ margin: '16px 0', color: colors.grey[500] }}>
        {t('description', { ns: componentName })}
      </Text>

      <Code style={{ margin: '16px 0' }}>
        {`import { ${componentName[0].toUpperCase() + componentName.slice(1)} } from 'wuki'`}
      </Code>

      {/* {children} */}

      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>
        {t('examples.title')}
      </Text>

      <Text variant="body2" style={{ margin: '16px 0 24px' }}>
        {t('examples.description')}
      </Text>

      {Object.entries(t('examples', { ns: componentName, returnObjects: true })).map(([key, value]) => (
        <React.Fragment key={key}>
          <Text tag="h3" variant="h6" style={{ margin: '24px 0 16px' }}>
            {value.title}
          </Text>

          <Text variant="body2">
            {value.description}
          </Text>

          <Iframe category="general" componentName={componentName} variant={key} />
        </React.Fragment>
      ))}

      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>
        {t('api.title')}
      </Text>

      <Text variant="body2">
        {t('api.description')}
      </Text>

      {/* <ArgsTable /> */}
    </>
  );
}
