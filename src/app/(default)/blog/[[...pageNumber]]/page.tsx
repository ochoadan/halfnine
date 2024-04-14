import { use, useMemo } from "react";
import wpService from "@/lib/wordpress/wp-service";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export async function generateMetadata({
  params,
}: {
  params: { pageNumber?: string };
}) {
  const pageNumber = parseInt(params.pageNumber || "0");
  return {
    title: `Blog ${pageNumber > 0 ? `Page ${pageNumber} ` : ""}| Halfnine`,
    description:
      "Learn more about Technology, Software Sales, and more on the Halfnine blog.",
    alternates: {
      canonical: `https://www.halfnine.com/blog${
        pageNumber > 0 ? `/${pageNumber}` : ""
      }`,
    },
  };
}

export const revalidate = 1200;

export async function generateStaticParams() {
  const { posts } = await wpService.getPosts({
    per_page: 100,
  });
  const totalPages = Math.ceil(posts.length / 12);

  return Array.from({ length: totalPages }).map((_, index) => ({
    params: { pageNumber: index.toString() },
  }));
}

export default function Home({ params }: { params: { pageNumber?: string } }) {
  const { posts } = use(wpService.getPosts({ per_page: 100 }));
  const categories = use(wpService.getCategories());
  const pageNumber = parseInt(params.pageNumber || "0");

  const totalPages = useMemo(() => Math.ceil(posts.length / 12), [posts]);

  if (pageNumber < 0 || pageNumber >= totalPages) {
    redirect("/blog");
  }

  const startIndex = pageNumber * 12;
  const endIndex = startIndex + 12;
  const paginatedPosts = useMemo(
    () => posts.slice(startIndex, endIndex),
    [posts, startIndex, endIndex]
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        {pageNumber === 0 && (
          <div className="flex justify-center space-x-4 my-4">
            {categories.map((category: any) => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="inline-block px-3 py-1 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg"
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 mb-4 text-2xl font-bold">Latest:</div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {paginatedPosts.map((post: any) => (
            <div
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <Link href={`/blog/posts/${post.slug}`}>
                <div className="relative w-full">
                  <Image
                    src={
                      post.mediaData.media_details.sizes.medium_large.source_url.toString() ||
                      "https://via.placeholder.com/640x360"
                    }
                    width={640}
                    height={360}
                    alt={post.mediaData.alt_text as string}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col space-y-5">
                  <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                    {post.title.rendered}
                  </h2>
                  <span className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                    {post.description as React.ReactNode}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {(pageNumber > 0 && (
              <Link
                href={`/blog${pageNumber > 1 ? `/${pageNumber - 1}` : ""}`}
                className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            )) || (
              <p className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                {/* <span className="sr-only">Next Page</span> */}
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            )}
            <p className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 select-none">
              {pageNumber}
            </p>
            {(pageNumber < totalPages - 1 && (
              <Link
                href={`/blog/${pageNumber + 1}`}
                className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            )) || (
              <p className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                {/* <span className="sr-only">Next Page</span> */}
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

// import { useMemo } from "react";
// import wpService from "@/lib/wordpress/wp-service";
// import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import { redirect } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Blog | Halfnine",
//   description:
//     "Learn more about Technology, Software Sales, and more on the Halfnine blog.",
//   alternates: { canonical: "https://www.halfnine.com/blog" },
// };

// export const revalidate = 1200;

// export default function Home({ params }: { params: { pageNumber?: string } }) {
//   const { posts } = use(wpService.getPosts());
//   const categories = use(wpService.getCategories());
//   const pageNumber = parseInt(params.pageNumber || "0");

//   const totalPages = useMemo(() => Math.ceil(posts.length / 12), [posts]);

//   if (pageNumber < 0 || pageNumber >= totalPages) {
//     redirect("/blog");
//   }

//   const startIndex = pageNumber * 12;
//   const endIndex = startIndex + 12;
//   const paginatedPosts = useMemo(
//     () => posts.slice(startIndex, endIndex),
//     [posts, startIndex, endIndex]
//   );

//   return (
//     <>
