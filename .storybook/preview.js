export const parameters = {
  actions: { argTypesRegex: "^on[a-z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}