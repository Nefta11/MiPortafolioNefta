import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '../lib/i18n/config';

export default async function initTranslations(locale: string) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string) => import(`../lib/i18n/locales/${language}.json`)))
    .init({
      ...i18nConfig,
      lng: locale
    });

  return i18nInstance;
}