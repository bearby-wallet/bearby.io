import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'extension-policy' });
  return {
    title: `${t('title')} | Bearby`,
  };
}

// Хелпер для форматирования текста с {{br}}
function formatText(text: string) {
  return text.split('{{br}}').map((line, index, arr) => (
    <span key={index}>
      {line}
      {index < arr.length - 1 && <br />}
    </span>
  ));
}

// Хелпер для отображения параграфа
const Paragraph = ({ text }: { text: string }) => (
  <p className="font-medium">{text}</p>
);

// Хелпер для отображения параграфа с HTML-тегами
const ParagraphHTML = ({ text }: { text: string }) => {
  if (!text) return null; // Проверка на пустой текст
  return <p className="font-medium" dangerouslySetInnerHTML={{ __html: text }} />;
};

// Хелпер для параграфа с форматированием через {{br}}
const ParagraphFormatted = ({ text }: { text: string }) => (
  <p className="font-medium">{formatText(text)}</p>
);

// Хелпер для подзаголовка
const SubTitle = ({ text }: { text: string }) => (
  <strong className="text-white">{text}</strong>
);

// Хелпер для подзаголовка с HTML-тегами
const SubTitleHTML = ({ text }: { text: string }) => {
  if (!text) return null; // Проверка на пустой текст
  return <strong className="text-white" dangerouslySetInnerHTML={{ __html: text }} />;
};

export default function PolicyPage() {
  const t = useTranslations('policy');

  // Все ключи, которые нужно отобразить
  const contentOrder = [
    { type: 'title', key: 'title' },
    { type: 'paragraph', key: 'last_update' },
    { type: 'paragraph', key: 'p0' },
    { type: 'paragraph', key: 'p1' },
    { type: 'paragraph', key: 'p2' },
    { type: 'paragraph', key: 'p3' },

    { type: 'subtitle', key: 'sub_title4' },
    { type: 'paragraph', key: 'p5' },

    { type: 'subtitleFormatted', key: 'sub_title6' },
    { type: 'paragraphHTML', key: 'p7' }, // Используем HTML-теги
    { type: 'paragraph', key: 'p8' },
    { type: 'paragraph', key: 'p9' },
    { type: 'paragraph', key: 'p10' },
    { type: 'paragraph', key: 'p11' },
    { type: 'paragraph', key: 'p12' },
    { type: 'paragraph', key: 'p13' },

    { type: 'subtitle', key: 'sub_title14' },
    { type: 'paragraph', key: 'p15' },
    { type: 'paragraphFormatted', key: 'p16' },
    { type: 'paragraphHTML', key: 'p17' }, // Используем HTML-теги
    { type: 'paragraph', key: 'p18' },
    { type: 'paragraph', key: 'p19' },
    { type: 'paragraph', key: 'p20' },
    { type: 'paragraph', key: 'p21' },
    { type: 'paragraph', key: 'p22' },
    { type: 'paragraph', key: 'p23' },
    { type: 'paragraph', key: 'p24' },
    { type: 'paragraph', key: 'p25' },
    { type: 'paragraph', key: 'p26' },
    { type: 'paragraph', key: 'p27' },
    { type: 'paragraph', key: 'p28' },
    { type: 'paragraph', key: 'p29' },

    { type: 'subtitle', key: 'sub_title30' },
    { type: 'paragraph', key: 'p31' },
    { type: 'paragraphHTML', key: 'p32' }, // Используем HTML-теги

    { type: 'subtitle', key: 'sub_title33' },
    { type: 'paragraph', key: 'p34' },
    { type: 'paragraph', key: 'p35' },
    { type: 'paragraph', key: 'p36' },

    { type: 'subtitle', key: 'sub_title37' },
    { type: 'paragraph', key: 'p38' },
    { type: 'paragraph', key: 'p39' },
    { type: 'paragraph', key: 'p40' },

    { type: 'subtitle', key: 'sub_title41' },
    { type: 'paragraph', key: 'p42' },
    { type: 'paragraph', key: 'p43' },
    { type: 'paragraph', key: 'p44' },

    { type: 'subtitle', key: 'sub_title45' },
    { type: 'paragraph', key: 'p46' },
    { type: 'paragraphHTML', key: 'p47' }, // Используем HTML-теги
    { type: 'paragraph', key: 'p48' },

    { type: 'paragraphHTML', key: 'p50' }, // Используем HTML-теги
    { type: 'paragraph', key: 'p53' },

    { type: 'subtitle', key: 'sub_title54' },
    { type: 'paragraph', key: 'p55' },
    { type: 'paragraph', key: 'p56' },

    { type: 'subtitle', key: 'sub_title57' },
    { type: 'paragraphHTML', key: 'p58' }, // Используем HTML-теги
    { type: 'paragraph', key: 'p59' },

    { type: 'subtitle', key: 'sub_title60' },
    { type: 'paragraph', key: 'p61' },
    { type: 'paragraphHTML', key: 'p62' }, // Используем HTML-теги
    { type: 'paragraph', key: 'p63' },
    { type: 'paragraph', key: 'p64' },

    { type: 'subtitle', key: 'sub_title65' },
    { type: 'paragraph', key: 'p66' },
    { type: 'paragraph', key: 'p67' },
    { type: 'paragraphHTML', key: 'p68' }, // Используем HTML-теги
  ];

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="max-w-3xl mx-auto blog-details rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              {contentOrder.map(({ type, key }, index) => {
                const text = t(key);

                // Проверка на пустой текст
                if (!text) return null;

                switch (type) {
                  case 'title':
                    return <h1 key={index}>{text}</h1>;
                  case 'subtitle':
                    return <SubTitle key={index} text={text} />;
                  case 'subtitleFormatted':
                    return <SubTitle key={index} text={formatText(text)} />;
                  case 'subtitleHTML':
                    return <SubTitleHTML key={index} text={text} />;
                  case 'paragraphFormatted':
                    return <ParagraphFormatted key={index} text={text} />;
                  case 'paragraphHTML':
                    return <ParagraphHTML key={index} text={text} />;
                  default:
                    return <Paragraph key={index} text={text} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}