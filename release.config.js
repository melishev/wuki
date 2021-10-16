module.exports = {
  branches: ["master", "alpha"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          headerPattern: /^(?:(?:\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]) (\w*))(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/,
        },
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [
          "package.json",
          "package-lock.json",
          "compiled/index.js",
          "CHANGELOG.md",
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
