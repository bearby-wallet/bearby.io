// "use client"; // Директива для указания, что компонент является клиентским

// import { useState, useEffect } from 'react';
// import { Blog } from "@/types/blog"; 
// import SectionTitle from "../Common/SectionTitle";
// import SingleBlog from "./SingleBlog";

// export default function BlogSection() {
//   const [posts, setPosts] = useState<Blog[]>([]);

//   useEffect(() => {
//     // Пример вызова внешнего API
//     async function fetchPosts() {
//       const response = await fetch("https://api.example.com/posts");
//       const data = await response.json();
//       setPosts(data);
//     }

//     fetchPosts();
//   }, []);

//   return (
//     <section className="py-20 lg:py-25">
//       <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
//         <SectionTitle
//           subTitle="Read Our Latest Blogs"
//           title="Latest Blogs & News"
//           paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
//         />

//         <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
//           {posts.length > 0 &&
//             posts
//               .slice(0, 3)
//               .map((blog: Blog) => (
//                 <SingleBlog key={blog.id} blog={blog} />
//               ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { getPosts } from "@/sanity/sanity-utils";
// import { Blog } from "@/types/blog";
// import SectionTitle from "../Common/SectionTitle";
// import SingleBlog from "./SingleBlog";

// export default async function BlogSection() {
//   // const posts = await getPosts();

//   return (
//     <section className="py-20 lg:py-25">
//       <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
//         <SectionTitle
//           subTitle="Read Our Latest Blogs"
//           title="Latest Blogs & News"
//           paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
//         />

//         <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
//           {/* {posts.length > 0 &&
//             posts
//               .slice(0, 3)
//               .map((blog: Blog, index: number) => (
//                 <SingleBlog key={index} blog={blog} />
//               ))} */}
//         </div>
//       </div>
//     </section>
//   );
// }
