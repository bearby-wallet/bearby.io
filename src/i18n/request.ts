import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Загружаем нужные namespace-файлы по текущему locale
  const policy = await import(`../../messages/${locale}/policy.json`);
  const extensionPolicy = await import(`../../messages/${locale}/extension-policy.json`);

  // Объединяем по namespace'ам
  return {
    locale,
    messages: {
      policy: policy.default,
      'extension-policy': extensionPolicy.default,
    },
  };
});
