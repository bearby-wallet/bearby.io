import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/logo.svg";
import FooterLinkList from "./FooterLinkList";
import { companiesLink } from "./linksData";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        {/* <!-- bg shapes --> */}
        <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
          <div className="footer-bg-gradient h-[1.24px] w-full"></div>
          <div className="footer-bg-gradient h-[2.47px] w-full"></div>
          <div className="footer-bg-gradient h-[3.71px] w-full"></div>
          <div className="footer-bg-gradient h-[4.99px] w-full"></div>
          <div className="footer-bg-gradient h-[6.19px] w-full"></div>
          <div className="footer-bg-gradient h-[7.42px] w-full"></div>
          <div className="footer-bg-gradient h-[8.66px] w-full"></div>
          <div className="footer-bg-gradient h-[9.90px] w-full"></div>
          <div className="footer-bg-gradient h-[13px] w-full"></div>
        </div>

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          <div className="flex flex-wrap justify-between">
            <div className="mb-10 w-full max-w-[520px]">
              <Link href="/" className="mb-8.5 inline-block">
                <Image src={logo} alt="Logo" width={80} height={80} />
              </Link>

              {/* <p className="mb-12 xl:w-4/5">
                Build SaaS AI applications using OpenAI and Next.js, this kit
                comes with pre-configured and pre-built examples, making it
                easier to quickly kickstart your AI startup.
              </p> */}
              <div className="flex items-center gap-5">
                <a
                  href="https://chromewebstore.google.com/detail/bearby/papngmkmknnmfhabbckobgfpihpdgplk"
                  aria-label="Chrome"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    width= "24"
                    height= "24"
                    viewBox="0 0 512 512"
                    fill="none"
                  >
                    <path
                    d="M0 256c0-46.6 12.47-90.4 34.27-128.9L144.1 318.3C166 357.5 207.9 384 256 384c14.3 0 27.1-2.3 40.8-6.6l-76.3 132.2C95.9 492.3 0 385.3 0 256m365.1 65.6c12.3-19.2 18.9-42.5 18.9-65.6c0-38.2-16.8-72.5-43.3-96h152.7c12 29.6 18.6 62.1 18.6 96c0 141.4-114.6 255.1-256 256zM477.8 128H256c-62.9 0-113.7 44.1-125.5 102.7L54.19 98.47C101 38.53 174 0 256 0c94.8 0 177.5 51.48 221.8 128M168 256c0-48.6 39.4-88 88-88s88 39.4 88 88s-39.4 88-88 88s-88-39.4-88-88"
                    fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="https://addons.mozilla.org/en-GB/firefox/addon/bearby/"
                  aria-label="firefox"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    width= "24"
                    height= "24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M11.807 9.776c.011 0 .005 0 0 0M8.109 7.927c.011 0 .005 0 0 0m22.12 2.854c-.667-1.604-2.021-3.333-3.079-3.885c.865 1.692 1.365 3.396 1.552 4.661l.005.027c-1.739-4.329-4.681-6.073-7.088-9.871c-.12-.192-.24-.385-.36-.588c-.063-.104-.115-.208-.172-.319a2.774 2.774 0 0 1-.224-.609c0-.02-.015-.036-.036-.041h-.031l-.005.005c-.005 0-.011.005-.011.005s0-.005.005-.011c-3.417 2-4.828 5.505-5.193 7.729a8.308 8.308 0 0 0-3.041.776a.396.396 0 0 0-.197.489a.387.387 0 0 0 .525.224a7.4 7.4 0 0 1 2.651-.687l.089-.011c.125-.005.255-.011.38-.011a7.702 7.702 0 0 1 2.203.307l.125.037c.12.036.235.077.355.12c.083.031.172.063.255.099c.068.025.136.057.203.083c.105.048.209.1.313.152l.14.067c.104.053.204.109.303.167c.063.037.125.073.187.115a7.824 7.824 0 0 1 2.683 2.776c-.817-.572-2.287-1.145-3.697-.895c5.52 2.76 4.036 12.265-3.615 11.905a6.64 6.64 0 0 1-2.448-.568a12.849 12.849 0 0 1-.26-.124c-1.876-.969-3.423-2.803-3.615-5.027c0 0 .708-2.64 5.072-2.64c.475 0 1.824-1.319 1.849-1.699c-.011-.125-2.683-1.187-3.724-2.213c-.557-.547-.817-.812-1.052-1.011a3.745 3.745 0 0 0-.401-.301a7.116 7.116 0 0 1-.041-3.751c-1.579.719-2.803 1.855-3.693 2.855h-.009c-.609-.771-.563-3.313-.532-3.844c-.005-.036-.453.229-.511.271c-.536.385-1.041.813-1.5 1.287a13.468 13.468 0 0 0-1.437 1.719a12.951 12.951 0 0 0-2.057 4.645a18.16 18.16 0 0 0-.249 1.417a7.57 7.57 0 0 0-.052.359a9.734 9.734 0 0 0-.089.881L.7 15.9c-.009.172-.02.339-.031.511v.077c0 8.48 6.875 15.355 15.355 15.355c7.593 0 13.9-5.516 15.135-12.756c.027-.197.047-.395.068-.593c.307-2.631-.031-5.401-.995-7.713z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="https://t.me/bearbychat"
                  aria-label="telegram"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="m446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/pay_zil?mx=2"
                  aria-label="twitter"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                      fill=""
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/bearby-wallet"
                  aria-label="github"
                  className="duration-300 ease-in hover:text-white"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_368_11839)">
                      <path
                        d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_368_11839">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>

              <p className="mt-5.5 font-medium">
                ©2025 Rinat.IP.
              </p>
            </div>

            <div className="w-full max-w-[571px] flex justify-end">
              <div className="flex flex-col items-end gap-10 sm:flex-row sm:justify-between">
                <FooterLinkList title="Company" links={companiesLink} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
