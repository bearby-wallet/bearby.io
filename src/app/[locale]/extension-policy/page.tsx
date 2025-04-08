import { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'extension-policy' });
  return {
    title: `${t('head_title')} | Bearby`,
  };
}

export default function ExtensionPolicyPage() {
  const t = useTranslations('extension-policy'); // Убедитесь, что это правильный namespace

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-3xl mx-auto blog-details rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>{t('head_title')}</h1>
                <p className="font-medium">{t('last_update')}</p>

                <strong className="text-white">{t('title0')}</strong>
                <p className="font-medium">{t('p0')}</p>
                <p className="font-medium">{t('p1')}</p>
                <p className="font-medium">{t('p2')}</p>
                <p className="font-medium">{t('p3')}</p>

                <strong className="text-white mt-1 block">{t('title1')}</strong>
                <ul className="list-none pl-4 mt-0 mb-1">
                  <li className="mb-1">{t('collections0')}</li>
                  <li className="mb-1">{t('collections1')}</li>
                </ul>

                <strong className="text-white block mt-4 mb-0">{t('title2')}</strong>
                <p className="font-medium">{t('p4')}</p>

                <strong className="text-white">{t('title3')}</strong>
                <p className="font-medium">{t('p5')}</p>
                <p className="font-medium">{t('p6')}</p>
                <p className="font-medium">{t('p7')}</p>
                <p className="font-medium">{t('p8')}</p>

                <strong className="text-white">{t('title4')}</strong>
                <p className="font-medium">{t('p9')}</p>
                <p className="font-medium text-gray-200">{t('p10')}</p>

                <strong className="text-white mb-1 block">{t('title5')}</strong>
                <ul className="list-none pl-4 mt-0 mb-1">
                  <li className="mb-1">{t('stores0')}</li>
                  <li className="mb-1">{t('stores1')}</li>
                  <li className="mb-1">{t('stores2')}</li>
                  <li className="mb-1">{t('stores3')}</li>
                  <li className="mb-1">{t('stores4')}</li>
                  <li className="mb-1">{t('stores5')}</li>
                </ul>

                <strong className="text-white block mt-4 mb-0">{t('title6')}</strong>
                <p className="font-medium">{t('p11')}</p>

                <strong className="text-white">{t('title7')}</strong>
                <p className="font-medium">{t('p12')}</p>

                <strong className="text-white">{t('title8')}</strong>
                <p className="font-medium">{t('p13')}</p>

                <strong className="text-white">{t('title9')}</strong>
                <p className="font-medium">{t('p14')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
