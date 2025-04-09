import { setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import NextTopLoader from 'nextjs-toploader';
import ToasterContext from '../context/ToastContext';

import '../../styles/animate.css';
import '../../styles/prism-vsc-dark-plus.css';
import '../../styles/star.css';
import '../../styles/tailwind.css';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextTopLoader color="#8646F4" crawlSpeed={300} showSpinner={false} shadow="none" />
        <ToasterContext />
        <Header />
        {children}
        <Footer locale={locale}/> 
        <ScrollToTop />
      </body>
    </html>
  );
}

