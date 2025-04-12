// src/i18n/utils.ts
import { getTranslations } from 'next-intl/server';

export async function getLocalizedContent(locale: string, namespace: string) {
  return await getTranslations({ locale, namespace });
}