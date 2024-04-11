import { use } from "react";
import Link from "next/link";

import wpService from "@/lib/wordpress/wp-service";
import { Metadata } from "next";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";

export const metadata: Metadata = {
  title: "Blog | Halfnine",
  description:
    "Learn more about Technology, Software Sales, and more on the Halfnine blog.",
  alternates: { canonical: "https://www.halfnine.com/blog" },
};

export default function Home() {
  const posts = use(wpService.getLatestThreePosts());

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mt-12 mb-4 text-2xl font-bold">Latest:</div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <Link href={`/blog/posts/${post.slug}`}>
              <div className="relative w-full">
                <Image
                  src={
                    post.featured_media?.toString() ||
                    "https://via.placeholder.com/640x360"
                  }
                  width={640}
                  height={360}
                  alt=""
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
    </div>
  );
}
