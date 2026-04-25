import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';
import translationAZ from './locales/az/translation.json';
import translationDE from './locales/de/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationIT from './locales/it/translation.json';
import translationNL from './locales/nl/translation.json';
import translationNO from './locales/no/translation.json';
import translationDA from './locales/da/translation.json';
import translationSV from './locales/sv/translation.json';
import translationFI from './locales/fi/translation.json';
import translationHU from './locales/hu/translation.json';
import translationPL from './locales/pl/translation.json';
import translationPT from './locales/pt/translation.json';
import translationEL from './locales/el/translation.json';
import translationRU from './locales/ru/translation.json';
import translationAR from './locales/ar/translation.json';
import translationID from './locales/id/translation.json';
import translationBN from './locales/bn/translation.json';
import translationVI from './locales/vi/translation.json';
import translationTH from './locales/th/translation.json';
import translationJA from './locales/ja/translation.json';
import translationKO from './locales/ko/translation.json';
import translationHI from './locales/hi/translation.json';

const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR },
  az: { translation: translationAZ },
  de: { translation: translationDE },
  fr: { translation: translationFR },
  es: { translation: translationES },
  it: { translation: translationIT },
  nl: { translation: translationNL },
  no: { translation: translationNO },
  da: { translation: translationDA },
  sv: { translation: translationSV },
  fi: { translation: translationFI },
  hu: { translation: translationHU },
  pl: { translation: translationPL },
  pt: { translation: translationPT },
  el: { translation: translationEL },
  ru: { translation: translationRU },
  ar: { translation: translationAR },
  id: { translation: translationID },
  bn: { translation: translationBN },
  vi: { translation: translationVI },
  th: { translation: translationTH },
  ja: { translation: translationJA },
  ko: { translation: translationKO },
  hi: { translation: translationHI }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
