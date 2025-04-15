import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Highlighter from "./HighLighter";

const FeaturesList = async () => {
  const t = await getTranslations("features_list");

  const FeatureCard = ({ 
    span, 
    icon, 
    titleKey, 
    descriptionKey, 
    customClass = "" 
  }: {
    span: "7" | "5" | "12";
    icon: string;
    titleKey: string;
    descriptionKey: string;
    customClass?: string;
  }) => (
    <div className={`sm:col-span-${span} h-full`}>
      <Highlighter>
        <div className={`relative h-full rounded-3xl ${customClass}`}>
          <div className="box-hover box-hover-small relative h-full overflow-hidden rounded-3xl px-11 pb-14 pt-12.5">
            <div className="relative z-20 h-full flex flex-col">
              <span className="icon-border relative mx-auto mb-13.5 inline-flex h-20 w-20 items-center justify-center rounded-full">
                <Image src={icon} alt="icon" width={32} height={32} />
              </span>
              <h3 className="mb-4.5 text-heading-6 font-semibold text-white">
                {t(titleKey)}
              </h3>
              <p className="font-medium flex-grow">{t(descriptionKey)}</p>
            </div>
          </div>
        </div>
      </Highlighter>
    </div>
  );

  return (
    <section className="pt-12.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid gap-7.5 sm:grid-cols-12">
          {/* Main Feature Card */}
          <div className="sm:col-span-12">
            <Highlighter>
              <div className="features-box-border relative rounded-3xl">
                <div className="box-hover relative overflow-hidden rounded-3xl p-10 xl:p-15">
                  <div className="relative z-20 flex items-center justify-between">
                    <div className="w-full max-w-[477px]">
                      <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
                        <Image 
                          src="/images/hero/icon-title.svg" 
                          alt="icon" 
                          width={16} 
                          height={16} 
                        />
                        <span className="hero-subtitle-text">
                          {t("section1_subtitle")}
                        </span>
                      </span>
                      <h3 className="mb-4.5 text-heading-4 font-bold text-white">
                        {t("section1_title")}
                      </h3>
                      <p className="mb-10 font-medium">
                        {t("section1_description")}
                      </p>
                    </div>
                    <div className="relative hidden aspect-square w-full max-w-[428px] sm:block">
                      <div className="flex h-full items-center justify-center">
                        <img 
                          src="/images/features/logo.svg" 
                          alt="logo" 
                          className="max-h-full max-w-full" 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
                    <span className="absolute bottom-0 right-0">
                      <Image 
                        src="/images/features/shape-01.png" 
                        alt="shape" 
                        width={282} 
                        height={226} 
                      />
                    </span>
                    <span className="absolute left-0 top-0 aspect-[1170/192] w-full">
                      <Image 
                        src="/images/features/shape-02.svg" 
                        alt="shape" 
                        fill 
                      />
                    </span>
                    <span className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2">
                      <Image 
                        src="/images/blur/blur-03.svg" 
                        alt="blur" 
                        fill 
                        className="max-w-none" 
                      />
                    </span>
                    <span className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2">
                      <Image 
                        src="/images/blur/blur-04.svg" 
                        alt="blur" 
                        fill 
                        className="max-w-none" 
                      />
                    </span>
                    <span className="absolute bottom-0 left-1/2 aspect-[530/270] w-full max-w-[530px] -translate-x-1/2">
                      <Image 
                        src="/images/blur/blur-05.svg" 
                        alt="blur" 
                        fill 
                        className="max-w-none" 
                      />
                    </span>
                    <span className="absolute right-0 top-0 aspect-[580/430] w-full max-w-[580px]">
                      <Image 
                        src="/images/features/shape-03.svg" 
                        alt="shape" 
                        fill 
                        className="max-w-none" 
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

          {/* Secondary Feature Cards */}
          <FeatureCard
            span="7"
            icon="/images/features/icon-05.svg"
            titleKey="section2_title"
            descriptionKey="section2_description"
            customClass="features-box-border"
          />

          <FeatureCard
            span="5"
            icon="/images/features/icon-07.svg"
            titleKey="section3_title"
            descriptionKey="section3_description"
            customClass="featuresIssuer-box-border"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;