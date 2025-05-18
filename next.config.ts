import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import withMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withMDXPlugin = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm], 
  }
});

const withNextIntl = createNextIntlPlugin({
  loadLocaleFrom: (locale, namespace) =>
    import(`./messages/${locale}/${namespace}.json`).then((m) => m.default),
  locales: ['en', 'ru', 'fr'],
  defaultLocale: 'en'
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], 
};

export default withMDXPlugin(
  withNextIntl(nextConfig)
);
