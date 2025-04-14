import { FooterLink } from "@/types/footerLink";

export function getFooterLinks(locale: string, t: (key: string) => string): FooterLink[] {
  return [
    {
      id: 11,
      title: t("privacyPolicy"),
      href: `/${locale}/policy`,
      newTab: false,
    },
    {
      id: 15,
      title: t("termsOfService"),
      href: `/${locale}/terms`, 
      newTab: false,
    },
    {
      id: 16,
      title: t("extensionPolicy"),
      href: `/${locale}/extension-policy`,
      newTab: false,
    },
  ];
}