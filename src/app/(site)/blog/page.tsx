import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import { integrations, messages } from "../../../../integrations.config";

// Статические данные, которые могут быть заменены на данные из вашего API
const posts = [
  { id: 1, title: "Post 1", excerpt: "This is the first post.", slug: { current: "post-1" } },
  { id: 2, title: "Post 2", excerpt: "This is the second post.", slug: { current: "post-2" } },
  { id: 3, title: "Post 3", excerpt: "This is the third post.", slug: { current: "post-3" } }
];

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is Blog page for AI Tool",
};

export default async function BlogPage() {
  return (
    <>
      <Breadcrumb pageTitle="Blog Grid" />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          {/* Прямо передаем данные без проверки на Sanity */}
          <BlogGridContainer blogs={posts} />
        </div>
      </section>
    </>
  );
}

// import BlogGridContainer from "@/components/Blog/BlogGridContainer";
// import Breadcrumb from "@/components/Breadcrumb";
// // import { getPosts } from "@/sanity/sanity-utils";
// import { Metadata } from "next";
// import { integrations, messages } from "../../../../integrations.config";

// export const metadata: Metadata = {
//   title: "Blog | AI Tool - Next.js Template for AI Tools",
//   description: "This is Blog page for AI Tool",
//   // other metadata
// };

// export default async function BlogPage() {
//   // const posts = integrations.isSanityEnabled ? await getPosts() : [];

//   return (
//     <>
//       <Breadcrumb pageTitle="Blog Grid" />

//       <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
//         <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
//           {integrations?.isSanityEnabled ? (
//             <BlogGridContainer blogs={posts} />
//           ) : (
//             <div>{messages.sanity}</div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }
