import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const ns = ['common'];
const supportedLngs = ['en', 'ru'];

i18n.use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: false,
      supportedLngs,
      ns,
    });

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18n.addResourceBundle(
      lang,
      n,
      require(`../public/locales/${lang}/${n}.json`)
    );
  });
});

export default i18n;