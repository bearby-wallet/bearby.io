import createMiddleware from 'next-intl/middleware';

export default async function middleware(request) {
  
  const response = createMiddleware({
    locales: ['en', 'ru', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  })(request);

  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.cookies.delete('NEXT_LOCALE');

  return response;
}
export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};