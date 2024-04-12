import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Client = ({
  posts,
  pageNumber,
  categories,
  postCount,
  totalPages,
  postsPerPage,
}: any) => {
  const startIndex = pageNumber * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPagePosts = posts.slice(startIndex, endIndex);

  return (
    <>
      {/* {pageNumber + 1} */}
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
          <>
            {/* <div className="mt-12 mb-4 text-2xl font-bold">By Category:</div> */}
            <div className="flex justify-center space-x-4 my-4">
              {categories.map((category: any) => {
                return (
                  <Link
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className="inline-block px-3 py-1 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg"
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </>
        )}

        <div className="mt-8 mb-4 text-2xl font-bold">Latest:</div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {currentPagePosts.map((post: any) => (
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
                    // alt={"Image for " + post.title.rendered}
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
          <Link
            href={`/blog${pageNumber === 0 ? "" : `/${pageNumber}`}`}
            className={`px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md ${
              pageNumber === 0 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Link>
          <div className="mx-4 text-lg font-medium text-gray-700">
            Page {pageNumber + 1} of {totalPages}
          </div>
          <Link
            href={`/blog/${pageNumber + 2}`}
            className={`px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md ${
              pageNumber === totalPages - 1
                ? "pointer-events-none opacity-50"
                : ""
            }`}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Client;
