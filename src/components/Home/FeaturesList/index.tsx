import Image from "next/image";
import Highlighter from "./HighLighter";

const FeaturesList = () => {
  return (
    <section className="pt-12.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid gap-7.5 sm:grid-cols-12">
          <div className="sm:col-span-12">
            <Highlighter>
              <div className="features-box-border relative rounded-3xl">
                <div className="box-hover relative overflow-hidden rounded-3xl p-10 xl:p-15">
                  <div className="relative z-20 flex items-center justify-between">
                    <div className="w-full max-w-[477px]">
                      <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
                        <Image src="/images/hero/icon-title.svg" alt="icon" width={16} height={16} />
                        <span className="hero-subtitle-text">Bearby Wallet Network</span>
                      </span>
                      <h3 className="mb-4.5 text-heading-4 font-bold text-white">Fully Customizable Network</h3>
                      <p className="mb-10 font-medium">
                        Bearby Wallet provides a fully customizable network experience, collecting and sorting nodes by speed and region. With smart requests, it ensures maximum uptime and decentralization, tailored for advanced users to optimize effortlessly.
                      </p>
                    </div>
                    <div className="relative hidden aspect-square w-full max-w-[428px] sm:block">
                      <div className="flex items-center justify-center h-full">
                        <img src="/images/features/logo.svg" alt="logo" className="max-w-full max-h-full" />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
                    <span className="absolute bottom-0 right-0">
                      <Image src="/images/features/shape-01.png" alt="shape" width={282} height={226} />
                    </span>
                    <span className="absolute left-0 top-0 aspect-[1170/192] w-full">
                      <Image src="/images/features/shape-02.svg" alt="shape" fill />
                    </span>
                    <span className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2">
                      <Image src="/images/blur/blur-03.svg" alt="blur" fill className="max-w-none" />
                    </span>
                    <span className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2">
                      <Image src="/images/blur/blur-04.svg" alt="blur" fill className="max-w-none" />
                    </span>
                    <span className="absolute bottom-0 left-1/2 aspect-[530/270] w-full max-w-[530px] -translate-x-1/2">
                      <Image src="/images/blur/blur-05.svg" alt="blur" fill className="max-w-none" />
                    </span>
                    <span className="absolute right-0 top-0 aspect-[580/430] w-full max-w-[580px]">
                      <Image src="/images/features/shape-03.svg" alt="shape" fill className="max-w-none" />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>
          <div className="sm:col-span-7">
            <Highlighter>
              <div className="features-box-border relative rounded-3xl">
                <div className="box-hover box-hover-small relative overflow-hidden rounded-3xl px-11 pb-14 pt-12.5">
                  <div className="relative z-20">
                    <span className="icon-border relative mx-auto mb-13.5 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <Image src="/images/features/icon-05.svg" alt="icon" width={32} height={32} />
                    </span>
                    <h3 className="mb-4.5 text-heading-6 font-semibold text-white">User-Friendly Customization</h3>
                    <p className="font-medium">
                      Tailor the Bearby Wallet network to your needs with intuitive tools, designed for advanced users to customize effortlessly.
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <span className="absolute bottom-0 left-0 h-full w-full bg-[url(/images/blur/blur-06.svg)] bg-cover bg-center bg-no-repeat"></span>
                    <span className="absolute right-0 top-0 h-full w-full bg-[url(/images/blur/blur-07.svg)] bg-cover bg-center bg-no-repeat"></span>
                    <span className="absolute right-[16%] top-[16%]">
                      <Image src="/images/features/shape-04.svg" alt="shape" width={250} height={135} />
                    </span>
                    <span className="absolute bottom-0 left-0 aspect-[521/335] w-full max-w-[521px]">
                      <Image src="/images/blur/blur-08.svg" alt="blur" fill className="max-w-none" />
                    </span>
                    <span className="absolute bottom-0 left-0 aspect-[287/256] w-full max-w-[287px]">
                      <Image src="/images/blur/blur-09.svg" alt="blur" fill className="max-w-none" />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>
          <div className="sm:col-span-5">
            <Highlighter>
              <div className="featuresIssuer-box-border relative rounded-3xl">
                <div className="box-hover box-hover-small relative overflow-hidden rounded-3xl px-11 pb-14 pt-12.5">
                  <div className="relative z-20">
                    <span className="icon-border relative mx-auto mb-13.5 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <Image src="/images/features/icon-07.svg" alt="icon" width={32} height={32} />
                    </span>
                    <h3 className="mb-4.5 text-heading-6 font-semibold text-white">Optimized for Power Users</h3>
                    <p className="font-medium">
                      Enjoy a highly customizable network setup with Bearby Wallet, perfect for power users seeking control and efficiency.
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <span className="absolute right-[14%] top-[17%]">
                      <Image src="/images/features/shape-05.svg" alt="shape" width={178} height={102} />
                    </span>
                    <span className="absolute bottom-0 left-0 h-full w-full bg-[url(/images/blur/blur-10.svg)] bg-cover bg-center bg-no-repeat"></span>
                    <span className="absolute right-0 top-0 aspect-[394/336] w-full max-w-[394px]">
                      <Image src="/images/blur/blur-11.svg" alt="blur" fill className="max-w-none" />
                    </span>
                    <span className="absolute right-0 top-0">
                      <Image src="/images/blur/blur-12.svg" alt="blur" className="max-w-none" width={160} height={303} />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
