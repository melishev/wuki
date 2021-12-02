/* eslint-disable no-template-curly-in-string */
module.exports = {
  branches: ['master', 'alpha'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'compiled/index.js',
          'CHANGELOG.md',
        ],
        message:
          'chore: 🚀 release ${nextRelease.version} \n\n${nextRelease.notes}',
      },
    ],
  ],
};
