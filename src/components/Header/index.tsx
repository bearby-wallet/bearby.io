"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../../public/images/logo/logo.svg";
import DropDown from "./DropDown";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[1000] w-full transition duration-300 ${
          stickyMenu ? "bg-dark/50 backdrop-blur-md shadow-md py-4" : "bg-transparent py-7"
        }`}
      >
        <div className="relative mx-auto flex max-w-[1200px] items-center justify-between px-4 sm:px-8 lg:px-0">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" width={80} height={80} />
            </Link>
          </div>
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-6">
              {menuData.map((menuItem, key) => (
                <li key={key} className="relative">
                  {menuItem.submenu ? (
                    <DropDown menuItem={menuItem} />
                  ) : (
                    <Link
                      href={menuItem.path ?? ""}
                      className={`hover:nav-gradient relative px-4 py-2 text-sm flex items-center gap-2 hover:text-white ${
                        pathUrl === menuItem.path ? "nav-gradient text-white" : "text-white/80"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center lg:hidden">
            <button onClick={() => setNavigationOpen(!navigationOpen)} className="block">
              <span className="relative block h-6 w-6 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative my-1 block h-0.5 rounded-sm bg-white transition-all duration-300 ${
                      navigationOpen ? "w-0" : "w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative my-1 block h-0.5 rounded-sm bg-white transition-all duration-300 ${
                      navigationOpen ? "w-0" : "w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative my-1 block h-0.5 rounded-sm bg-white transition-all duration-300 ${
                      navigationOpen ? "w-0" : "w-full"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white transition-all duration-300 ${
                      navigationOpen ? "h-full" : "h-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white transition-all duration-300 ${
                      navigationOpen ? "h-0.5" : "h-0"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>
        </div>
        {navigationOpen && (
          <div className="absolute left-0 top-full w-full bg-transparent backdrop-blur-md py-5 transition-all duration-300 lg:hidden">
            <nav>
              <ul className="flex flex-col items-center gap-5">
                {menuData.map((menuItem, key) => (
                  <li key={key}>
                    <Link
                      href={menuItem.path ?? ""}
                      className="text-white text-lg hover:text-gray-300"
                      onClick={() => setNavigationOpen(false)}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
