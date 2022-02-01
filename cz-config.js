const { devmoji } = require('./devmoji.config');

module.exports = {
  types: [
    {
      value: 'feat',
      name: `${devmoji[0].graphic} feat:      A new feature`,
    },
    {
      value: 'fix',
      name: `${devmoji[1].graphic} fix:       A bug fix`,
    },
    {
      value: 'docs',
      name: `${devmoji[2].graphic} docs:      Documentation only changes`,
    },
    {
      value: 'refactor',
      name: `${devmoji[3].graphic}  refactor:  A code change that neither fixes a bug nor adds a feature`,
    },
    {
      value: 'perf',
      name: `${devmoji[4].graphic} perf:      A code change that improves performance`,
    },
    {
      value: 'test',
      name: `${devmoji[5].graphic} test:      Adding missing tests or correcting existing tests`,
    },
    {
      value: 'chore',
      name: `${devmoji[6].graphic} chore:     Minor work (ex: updated dependencies)`,
    },
    {
      value: 'build',
      name: `${devmoji[7].graphic} build:     Changes that affect the build system (ex: rollup, npm)`,
    },
    {
      value: 'ci',
      name: `${devmoji[8].graphic} ci:        Changes to our CI configuration files and scripts\n                (ex: Github Actions)`,
    },
    {
      value: 'wip',
      name: `${devmoji[9].graphic} wip:       Work in progress.`,
    },
  ],
  scopes: [
    { name: 'components' },
    { name: 'global' },
    { name: 'storybook' },
    { name: 'styles' },
    { name: 'theme' },
    { name: 'deps' },
    { name: 'i18n' },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'perf'],
  footerPrefix: 'METADATA:',
  subjectLimit: 72,
};
