import { Feature } from "@/types/feature";
import { getTranslations } from "next-intl/server";

export async function getFeaturesData(): Promise<Feature[]> {
  const t = await getTranslations('features');

  return [
    {
      id: 1,
      title: t('title1'),
      description: t('description1'),
      icon: "/images/features/icon-01.svg",
    },
    {
      id: 2,
      title: t('title2'),
      description: t('description2'),
      icon: "/images/features/icon-02.svg",
    },
    {
      id: 3,
      title: t('title3'),
      description: t('description3'),
      icon: "/images/features/icon-03.svg",
    },
    {
      id: 4,
      title: t('title4'),
      description: t('description4'),
      icon: "/images/features/icon-04.svg",
      rotate: true,
    },
    {
      id: 5,
      title: t('title5'),
      description: t('description5'),
      icon: "/images/features/icon-05.svg",
      rotate: true,
    },
    {
      id: 6,
      title: t('title6'),
      description: t('description6'),
      icon: "/images/features/icon-06.svg",
      rotate: true,
    },
  ];
}