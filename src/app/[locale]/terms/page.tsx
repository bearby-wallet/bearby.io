import { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'terms' });
  return {
    title: `${t('head_title')} | Bearby`,
  };
}

export default function TermsPage() {
  const t = useTranslations('terms');
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">

            <div className="w-full px-4">
              <div className="max-w-3xl mx-auto blog-details rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>{t('title')}</h1>
                <p className="font-medium">{t('last_update')}</p>
                <strong className="text-white">{t('sub_title0')}</strong>
                <p className="font-medium">{t('p0')}</p>
                <p className="font-medium">{t('p1')}</p>
                <p className="font-medium">{t('p2')}</p>
                <p className="font-medium">{t('p3')}</p>
                <p className="font-medium">{t('p4')}</p>

                <strong className="text-white">{t('subt_title1')}</strong>
                <p className="font-medium">{t('p5')}</p>
                <strong className="text-white mt-0">{t('subt_title2')}</strong>
                <p className="font-medium">{t('p7')}</p>
                <p className="font-medium">{t('p8')}</p>
                <p className="font-medium">{t('p9')}</p>
                <p className="font-medium">{t('p10')}</p>
                <strong className="text-white">{t('subt_title3')}</strong>
                <br />
                <strong className="text-white">{t('subt_title4')}</strong>
                <p className="font-medium">{t('p11')}</p>
                <strong className="text-white">{t('subt_title5')}</strong>
                <p className="font-medium">{t('p12')}</p>
                <strong className="text-white">{t('subt_title6')}</strong>
                <p className="font-medium">{t('p13')}</p>
                <strong className="text-white">{t('subt_title7')}</strong>
                <p className="font-medium">{t('p14')}</p>
                <strong className="text-white">{t('subt_title8')}</strong>
                <br />
                <strong className="text-white">{t('subt_title9')}</strong>
                <p className="font-medium">{t('p15')}</p>
                <p className="font-medium">{t('p16')}</p>
                <p className="font-medium">{t('p17')}</p>
                <strong className="text-white">{t('subt_title10')}</strong>
                <p className="font-medium">{t('p18')}</p>
                <strong className="text-white">{t('subt_title11')}</strong>
                <p className="font-medium">{t('p19')}</p>
                <strong className="text-white">{t('subt_title12')}</strong>
                <br />
                <strong className="text-white">{t('subt_title13')}</strong>
                <p className="font-medium">{t('p20')}</p>
                <p className="font-medium">{t('p21')}</p>
                <strong className="text-white">{t('subt_title14')}</strong>
                <p className="font-medium">{t('p22')}</p>
                <p className="font-medium">{t('p23')}</p>
                <strong className="text-white">{t('subt_title15')}</strong>
                <p className="font-medium">{t('p24')}</p>
                <p className="font-medium">{t('p25')}</p>
                <p className="font-medium">{t('p26')}</p>
                <strong className="text-white">{t('subt_title16')}</strong>
                <p className="font-medium">{t('p27')}</p>
                <strong className="text-white">{t('subt_title17')}</strong>
                <p className="font-medium">{t('p28')}</p>
                <p className="font-medium">{t('p29')}</p>
                <strong className="text-white">{t('subt_title18')}</strong>
                <p className="font-medium">{t('p30')}</p>
                <strong className="text-white">{t('subt_title19')}</strong>
                <p className="font-medium">{t('p31')}</p>
                <strong className="text-white">{t('subt_title20')}</strong>
                <p className="font-medium">{t('p32')}</p>
                <strong className="text-white">{t('subt_title21')}</strong>
                <p className="font-medium">{t('p33')}</p>
                <strong className="text-white">{t('subt_title22')}</strong>
                <p className="font-medium">{t('p34')}</p>
                <strong className="text-white">{t('subt_title23')}</strong>
                <p className="font-medium">{t('p35')}</p>
                <strong className="text-white">{t('subt_title24')}</strong>
                <p className="font-medium">{t('p36')}</p>
                <p className="font-medium">{t('p37')}</p>
                <p className="font-medium">{t('p38')}</p>
                <strong className="text-white">{t('subt_title25')}</strong>
                <p className="font-medium">{t('p39')}</p>
                <p className="font-medium">{t('p40')}</p>
                <strong className="text-white">{t('subt_title26')}</strong>
                <p className="font-medium">{t('p41')}</p>
                <p className="font-medium">{t('p42')}</p>
                <strong className="text-white">{t('subt_title27')}</strong>
                <br />
                <strong className="text-white">{t('subt_title28')}</strong>
                <p className="font-medium">{t('p43')}</p>
                <p className="font-medium">{t('p44')}</p>
                <strong className="text-white">{t('subt_title29')}</strong>
                <p className="font-medium">{t('p45')}</p>
                <strong className="text-white">{t('subt_title30')}</strong>
                <p className="font-medium">{t('p46')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

