"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Suspense } from "react";

const Client = ({ posts, categories }: any) => {
  const searchParams = useSearchParams();
  const limit = 9;
  const totalPages = Math.ceil(posts.length / limit);
  const currentPage = Number(searchParams.get("page")) || 1;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentPosts = posts.slice(startIndex, endIndex);

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
        <Suspense fallback={<div>Loading...</div>}>
          {currentPage === 1 && (
            <>
              <div className="mt-12 mb-4 text-2xl font-bold">By Category:</div>
              <div className=" space-x-4">
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
        </Suspense>

        <div className="mt-12 mb-4 text-2xl font-bold">Latest:</div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Suspense fallback={<div>Loading...</div>}>
            {currentPosts.map((post: any) => (
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
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className={clsx(
                  "relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-l-md",
                  {
                    "cursor-not-allowed opacity-50": currentPage === 1,
                  }
                )}
                aria-disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Link>
              {Array.from({ length: totalPages }, (_, i) => (
                <Link
                  key={i + 1}
                  href={`/blog?page=${i + 1}`}
                  className={clsx(
                    "relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
                    {
                      "bg-brand-600 text-white": currentPage === Number(i) + 1,
                      "bg-gray-200 text-gray-900":
                        currentPage !== Number(i) + 1,
                      // "rounded-l-md": i === 0,
                      // "rounded-r-md": i === totalPages - 1,
                    }
                  )}
                >
                  {i + 1}
                </Link>
              ))}
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className={clsx(
                  "relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-r-md",
                  {
                    "cursor-not-allowed opacity-50": currentPage === totalPages,
                  }
                )}
                aria-disabled={currentPage === totalPages}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default Client;
