import { Feature } from "@/types/feature";
import { getTranslations } from "next-intl/server";

export async function getFeaturesData(): Promise<Feature[]> {
  const t = await getTranslations('features');

  return [
    {
      id: 1,
      title: t('feature1.title'),
      description: t('feature1.description'),
      icon: "/images/features/icon-01.svg",
    },
    {
      id: 2,
      title: t('feature2.title'),
      description: t('feature2.description'),
      icon: "/images/features/icon-02.svg",
    },
    {
      id: 3,
      title: t('feature3.title'),
      description: t('feature3.description'),
      icon: "/images/features/icon-03.svg",
    },
    {
      id: 4,
      title: t('feature4.title'),
      description: t('feature4.description'),
      icon: "/images/features/icon-04.svg",
      rotate: true,
    },
    {
      id: 5,
      title: t('feature5.title'),
      description: t('feature5.description'),
      icon: "/images/features/icon-05.svg",
      rotate: true,
    },
    {
      id: 6,
      title: t('feature6.title'),
      description: t('feature6.description'),
      icon: "/images/features/icon-06.svg",
      rotate: true,
    },
  ];
}