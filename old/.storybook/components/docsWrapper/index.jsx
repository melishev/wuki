import React from 'react';

import { DocsStory, ArgsTable } from '@storybook/addon-docs';
import { Trans, useTranslation } from 'react-i18next';
import { colors } from '../../../theme';
import { Text, Code } from '../../../components';

function docsWrapper({ context, children }) {
  const { name } = context.component;
  const compT = (key) => useTranslation('docsWrapper').t(key);
  const t = (key) => useTranslation(name.toLowerCase()).t(key);

  return (
    <>
      <Text tag="h1" style={{ margin: '0 0 20px' }}>
        {name}
      </Text>
      <Text variant="body1" style={{ margin: '16px 0', color: colors.grey[500] }}>
        <Trans t={t} components={{ code: <Code inline /> }}>
          description
        </Trans>
      </Text>
      <Code style={{ margin: '16px 0' }}>
        {`import { ${name} } from 'wuki'`}
      </Code>
      {children}
      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>
        {compT('examples.title')}
      </Text>
      <Text variant="body2" style={{ margin: '16px 0 24px' }}>
        {compT('examples.description')}
      </Text>
      {context.componentStories().map((story) => (
        <React.Fragment key={story.id}>
          <Text tag="h3" variant="h6" style={{ margin: '24px 0 16px' }}>
            {t(`examples.${story.name.toLowerCase()}.title`)}
          </Text>
          <Text variant="body2">
            <Trans t={t} components={{ code: <Code inline /> }}>
              {`examples.${story.name.toLowerCase()}.description`}
            </Trans>
          </Text>
          <DocsStory id={story.id} />
        </React.Fragment>
      ))}
      <Text tag="h2" variant="h4" style={{ margin: '40px 0 16px' }}>
        {compT('api.title')}
      </Text>
      <Text variant="body2">
        {compT('api.description')}
      </Text>
      <ArgsTable />
    </>
  );
}

// Divide the table into two parts, the first will contain the props of the component itself, the second will contain global

export default docsWrapper;
