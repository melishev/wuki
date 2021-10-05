import './styles.scss'; // Styles for StoryBook
import '../assets/styles/global.scss'; // Global styles UI library

export const parameters = {
  actions: { argTypesRegex: "^on[a-z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}