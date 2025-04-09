import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'policy' });
  return {
    title: `${t('head_title')} | Bearby`,
  };
}

export default function PolicyPage() {
  const t = useTranslations('policy');
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">

            <div className="w-full px-4">
              <div className="max-w-3xl mx-auto blog-details rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>{t('title')}</h1>
                <p className="font-medium">{t('last_update')}</p>

                <p className="font-medium">{t('p0')}</p>
                <p className="font-medium">{t('p1')}</p>
                <p className="font-medium">{t('p2')}</p>
                <p className="font-medium">{t('p3')}</p>

                <strong className="text-white">{t('sub_title4')}</strong>
                <p className="font-medium">{t('p5')}</p>

                <strong className="text-white">{t('sub_title6')}</strong>
                <p className="font-medium">{t('p7')}</p>
                <p className="font-medium">{t('p8')}</p>
                <p className="font-medium">{t('p9')}</p>
                <p className="font-medium">{t('p10')}</p>
                <p className="font-medium">{t('p11')}</p>
                <p className="font-medium">{t('p12')}</p>
                <p className="font-medium">{t('p13')}</p>

                <strong className="text-white">{t('sub_title14')}</strong>
                <p className="font-medium">{t('p15')}</p>
                <p className="font-medium">{t('p16')}</p>
                <p className="font-medium">{t('p17')}</p>
                <p className="font-medium">{t('p18')}</p>
                <p className="font-medium">{t('p19')}</p>
                <p className="font-medium">{t('p20')}</p>
                <p className="font-medium">{t('p21')}</p>
                <p className="font-medium">{t('p22')}</p>
                <p className="font-medium">{t('p23')}</p>
                <p className="font-medium">{t('p24')}</p>
                <p className="font-medium">{t('p25')}</p>
                <p className="font-medium">{t('p26')}</p>
                <p className="font-medium">{t('p27')}</p>
                <p className="font-medium">{t('p28')}</p>
                <p className="font-medium">{t('p29')}</p>

                <strong className="text-white">{t('sub_title30')}</strong>
                <p className="font-medium">{t('p31')}</p>
                <p className="font-medium">{t('p32')}</p>

                <strong className="text-white">{t('sub_title33')}</strong>
                <p className="font-medium">{t('p34')}</p>
                <p className="font-medium">{t('p35')}</p>
                <p className="font-medium">{t('p36')}</p>

                <strong className="text-white">{t('sub_title37')}</strong>
                <p className="font-medium">{t('p38')}</p>
                <p className="font-medium">{t('p39')}</p>
                <p className="font-medium">{t('p40')}</p>

                <strong className="text-white">{t('sub_title41')}</strong>
                <p className="font-medium">{t('p42')}</p>
                <p className="font-medium">{t('p43')}</p>
                <p className="font-medium">{t('p44')}</p>

                <strong className="text-white">{t('sub_title45')}</strong>
                <p className="font-medium">{t('p46')}</p>
                <p className="font-medium">{t('p47')}</p>
                <p className="font-medium">{t('p48')}</p>

                <p className="font-medium">{t('p49')}</p>
                <p className="font-medium">{t('p50')}</p>

                <strong className="text-white">{t('sub_title51')}</strong>
                <p className="font-medium">{t('p52')}</p>

                <p className="font-medium">{t('p53')}</p>

                <strong className="text-white">{t('sub_title54')}</strong>
                <p className="font-medium">{t('p55')}</p>
                <p className="font-medium">{t('p56')}</p>

                <strong className="text-white">{t('sub_title57')}</strong>
                <p className="font-medium">{t('p58')}</p>
                <p className="font-medium">{t('p59')}</p>

                <strong className="text-white">{t('sub_title60')}</strong>
                <p className="font-medium">{t('p61')}</p>
                <p className="font-medium">{t('p62')}</p>
                <p className="font-medium">{t('p63')}</p>
                <p className="font-medium">{t('p64')}</p>

                <strong className="text-white">{t('sub_title65')}</strong>
                <p className="font-medium">{t('p66')}</p>
                <p className="font-medium">{t('p67')}</p>
                <p className="font-medium">{t('p68')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}