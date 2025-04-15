import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const policy = await import(`../../messages/${locale}/policy.json`);
  const extensionPolicy = await import(`../../messages/${locale}/extension-policy.json`);
  const termsPolicy = await import(`../../messages/${locale}/terms.json`);
  const features = await import(`../../messages/${locale}/features.json`);
  const footer = await import(`../../messages/${locale}/footer.json`);
  const menu = await import(`../../messages/${locale}/menu.json`);
  const hero = await import(`../../messages/${locale}/hero.json`);

  return {
    locale,
    messages: {
      policy: policy.default,
      "extension-policy": extensionPolicy.default,
      terms: termsPolicy.default,
      features: features.default,
      footer: footer.default,
      menu: menu.default,
      hero: hero.default,
    },
  };
});