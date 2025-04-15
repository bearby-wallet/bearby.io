"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "@/types/menu";

const DropDown = ({ menuItem }: { menuItem: Menu }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();
  const t = useTranslations("menu");
  const locale = pathUrl.split("/")[1] || "en";

  // Локализованный заголовок
  const localizedTitle =
    menuItem.id === 1 ? t("home") : menuItem.id === 3 ? t("docs") : menuItem.title;

  // Локализованный путь
  const localizedPath =
    menuItem.path === "/" ? `/${locale}` : `/${locale}${menuItem.path || ""}`;

  // Локализованные элементы подменю (если они есть)
  const localizedSubmenu = menuItem.submenu?.map((item) => ({
    ...item,
    title: t(item.title.toLowerCase().replace(/\s+/g, "_")),
    path: item.path ? `/${locale}${item.path}` : "#",
  }));

  return (
    <>
      {menuItem.title !== "Pages" ? (
        <Link
          onClick={() => setDropdownToggler(!dropdownToggler)}
          className={`hover:nav-gradient relative flex items-center justify-between gap-3 border border-transparent px-4 py-1.5 text-sm hover:text-white ${
            pathUrl === localizedPath ? "nav-gradient text-white" : "text-white/80"
          }`}
          href={localizedPath}
        >
          {localizedTitle}
          <span>
            <svg
              className="h-3 w-3 cursor-pointer fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </Link>
      ) : (
        <button
          onClick={() => setDropdownToggler(!dropdownToggler)}
          className={`hover:nav-gradient relative flex items-center justify-between gap-3 border border-transparent px-4 py-1.5 text-sm hover:text-white ${
            pathUrl === localizedPath ? "nav-gradient text-white" : "text-white/80"
          }`}
        >
          {localizedTitle}
          <span>
            <svg
              className="h-3 w-3 cursor-pointer fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </button>
      )}

      <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
        {localizedSubmenu &&
          localizedSubmenu.map((item, key) => (
            <li key={key}>
              <Link
                href={item.path || "#"}
                className="flex rounded-md px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default DropDown;