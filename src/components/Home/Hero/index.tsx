"use client";

import Image from "next/image";
import { NextPage } from "next";
import { useState, useEffect } from "react";

const Hero: NextPage = () => {
  const [browserName, setBrowserName] = useState<string | null>(null);
  const [isBrowserDetected, setIsBrowserDetected] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("chrome") && !userAgent.includes("edg") && !userAgent.includes("opr")) {
      setBrowserName("chrome");
    } else if (userAgent.includes("firefox")) {
      setBrowserName("firefox");
    }

    setIsBrowserDetected(true);
  }, []);

  const buttons = [
    {
      name: "chrome",
      label: "Get add-on",
      link: "https://chromewebstore.google.com/detail/bearby/papngmkmknnmfhabbckobgfpihpdgplk",
      icon: "/images/hero/chrome.svg",
    },
    {
      name: "firefox",
      label: "Get add-on",
      link: "https://addons.mozilla.org/en-GB/firefox/addon/bearby/",
      icon: "/images/hero/firefox.svg",
    },
  ];

  return (
    <section id="home" className="relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45">
      {/* Hero Bg Shapes */}
      <div className="mx-auto max-w-7xl">
        <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
          <div className="-u-z-10 hero-circle-gradient absolute -top-[128%] left-1/2 -z-1 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]"></div>
          <div className="-u-z-10 hero-circle-gradient absolute -top-[112%] left-1/2 -z-1 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]"></div>
          <div className="-u-z-10 absolute left-1/2 top-0 aspect-[1204/394] w-full max-w-[1204px] -translate-x-1/2">
            <Image src="/images/blur/blur-02.svg" alt="blur" fill className="max-w-none" />
          </div>
          <div className="-u-z-10 absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-01.svg)] bg-cover bg-top bg-no-repeat"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-1 mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
        <div className="text-left">
          <span className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src="/images/hero/icon-title.svg" alt="icon" width={16} height={16} />
            <span className="hero-subtitle-text">Join massa web3.</span>
          </span>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white sm:text-5xl xl:text-7xl">
            <span className="block">A portal to the</span>
            <span className="block">decentralised</span>
            <span className="block">world</span>
          </h1>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl xl:text-3xl">
            The most popular and fastest Massa wallet
          </h2>

          {/* Кнопки, отцентрированные для мобильных устройств */}
          {isBrowserDetected && (
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
              {buttons
                .filter(btn => !browserName || browserName === btn.name)
                .map(btn => (
                  <a
                    key={btn.name}
                    href={btn.link}
                    className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-lg transition duration-300
                    bg-purple-800 text-white border-2 border-purple-800
                    hover:bg-purple-900 hover:border-purple-900
                    max-w-fit"
                  >
                    <Image src={btn.icon} alt={`${btn.name} Icon`} width={24} height={24} className="mr-2" />
                    {btn.label}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative mx-auto mt-17 aspect-[1170/411] w-full max-w-[1170px]" data-wow-delay="0.1s">
        <Image className="mx-auto" src="./images/hero/hero.svg" alt="hero" fill />
      </div>
    </section>
  );
};

export default Hero;
