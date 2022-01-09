import React from 'react';

import { colors } from '../../components/utils/theme';
import { Text, Code } from '../../components';

import { DocsStory, ArgsTable } from '@storybook/addon-docs';

import { useTranslation } from 'react-i18next';

function docsWrapper({context, children}) {
  const { name } = context.component
  const { t } = useTranslation(name.toLowerCase())

  return (
    <>
      <Text tag="h1" style={{marginBottom: 32, color: colors.grey[900]}}>
        {name}
      </Text>
      <Text variant="body1" style={{marginBottom: 32, color: colors.grey[500]}}>
        {t('description')}
      </Text>
      <Code
        code={`import { ${name} } from 'wuki'`}
        style={{marginBottom: 36}}
      />
      {children}
      <Text tag="h2" variant="h3" style={{margin: '48px 0 32px'}}>{t('examples.title')}</Text>
      {context.componentStories().map((story) => (
        <div key={story.id}>
          <Text tag="h3" variant="h6" style={{marginBottom: 24}}>{t(`examples.${story.name.toLowerCase()}.title`)}</Text>
          <Text variant="body2" style={{marginBottom: 24}}>{t(`examples.${story.name.toLowerCase()}.description`)}</Text>
          <DocsStory id={story.id} style={{marginBottom: 32}} />
        </div>
      ))}
      <Text tag="h2" variant="h3">Component API (props)</Text>
      <Text variant="small">Благодаря простому API(props) вы можете настроить компонент под ваши нужды. Чаще всего в этом не будет нужды, но для лучшего эффекта они и существуют</Text>
      <Text variant="small">Divide the table into two parts, the first will contain the props of the component itself, the second will contain global</Text>
      <ArgsTable />
    </>
  )
}

export default docsWrapper