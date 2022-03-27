import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const allComponents = [
  'code',
  'grid',
  'text',
];

const allDocs = [
  'start',
  'installation',
  'icons',
];

const allDocsComponents = [
  'docsWrapper',
];

const supportedLngs = ['en', 'ru'];

i18n.use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: false,
    supportedLngs,
    resources: {},
  });

supportedLngs.forEach((lang) => {
  allComponents.forEach(async (component) => {
    i18n.addResourceBundle(
      lang,
      component,
      await import(`../../components/${component}/docs/locales/${lang}.json`),
    );
  });
  allDocs.forEach(async (doc) => {
    i18n.addResourceBundle(
      lang,
      doc,
      await import(`../docs/${doc}/locales/${lang}.json`),
    );
  });
  allDocsComponents.forEach(async (docComp) => {
    i18n.addResourceBundle(
      lang,
      docComp,
      await import(`../components/${docComp}/locales/${lang}.json`),
    );
  });
});

export default i18n;
