// src/components/Footer/linksData.ts
import { FooterLink } from "@/types/footerLink";

export function getFooterLinks(locale: string): FooterLink[] {
  return [
    {
      id: 11,
      title: "Privacy Policy",
      href: `/${locale}/policy`,
      newTab: false,
    },
    {
      id: 15,
      title: "Term of services",
      href: `/${locale}/terms`,
      newTab: false,
    },
    {
      id: 16,
      title: "Extension Policy",
      href: `/${locale}/extension-policy`,
      newTab: false,
    },
  ];
}
