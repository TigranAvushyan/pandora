import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: 'common',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      /**
       * TODO: chnage Date.now to version
       */
      loadPath: `/locales/{{lng}}/{{ns}}.json?v=${Date.now()}`,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
    lng: 'ru',
    load: 'languageOnly',
  });

export default i18n;
