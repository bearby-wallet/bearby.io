"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ post }: any) => {
  const pathname = usePathname();

  const current = decodeURIComponent(pathname);
  const isActive = current.includes(`/docs/${post?.slug}`);

  return (
    <li className="block">
      <Link
        href={`/docs/${post?.slug}`}
        className={`flex w-full rounded-md px-3 py-2.5 font-medium duration-300 ${
          isActive
            ? "bg-white/10 text-white"
            : "text-zinc-400 hover:text-white hover:bg-white/5"
        }`}
      >
        {post?.title}
      </Link>
    </li>
  );
};

export default SidebarLink;
