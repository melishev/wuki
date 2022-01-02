const { devmoji } = require('./devmoji.config');

module.exports = {
  types: [
    {
      value: 'feat',
      name: `feat: ${devmoji[0].graphic}     A new feature`,
    },
    {
      value: 'fix',
      name: `fix: ${devmoji[1].graphic}      A bug fix`,
    },
    {
      value: 'docs',
      name: `docs: ${devmoji[2].graphic}     Documentation only changes`,
    },
    {
      value: 'refactor',
      name: `refactor: ${devmoji[3].graphic}  A code change that neither fixes a bug nor adds a feature`,
    },
    {
      value: 'perf',
      name: `perf: ${devmoji[4].graphic}     A code change that improves performance`,
    },
    {
      value: 'test',
      name: `test: ${devmoji[5].graphic}     Adding missing tests or correcting existing tests`,
    },
    {
      value: 'chore',
      name: `chore: ${devmoji[6].graphic}    Minor work (ex: updated dependencies)`,
    },
    {
      value: 'build',
      name: `build: ${devmoji[7].graphic}    Changes that affect the build system (ex: rollup, npm)`,
    },
    {
      value: 'ci',
      name: `ci: ${devmoji[8].graphic}       Changes to our CI configuration files and scripts\n               (ex: Github Actions)`,
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
