import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  loadLocaleFrom: (locale, namespace) =>
    import(`./messages/${locale}/${namespace}.json`).then((m) => m.default),

  locales: ['en', 'ru', "fr"], 
  defaultLocale: 'en'
});

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);