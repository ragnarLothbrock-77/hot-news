import i18next from "i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    interpolation: {
      escapeValue: __IS_DEV__
    }
  })