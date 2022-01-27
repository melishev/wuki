import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const allComponents = [
  'code',
  'grid',
  'text',
];

const allDocs = [
  'start',
  'installation'
];

const supportedLngs = ['en', 'ru'];

i18n.use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: false,
      supportedLngs,
      resources: {}
    });

supportedLngs.forEach((lang) => {
  allComponents.forEach((component) => {
    i18n.addResourceBundle(
      lang,
      component,
      require(`../../components/${component}/docs/locales/${lang}.json`)
    );
  });
  allDocs.forEach((doc) => {
    i18n.addResourceBundle(
      lang,
      doc,
      require(`../docs/${doc}/locales/${lang}.json`)
    );
  });
});

export default i18n;