import { use } from "react";
import Link from "next/link";

import wpService from "@/lib/wordpress/wp-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Halfnine",
  description: "Learn more about Technology, Software Sales, and more on the Halfnine blog.",
  alternates: { canonical: "https://www.halfnine.com/blog" },
};

export default function Home() {
  const { posts } = use(wpService.getPosts());

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
      <div className="flex flex-col space-y-8">
        <h1 className="text-xl xl:text-2xl font-bold">Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
          {posts.map((post) => (
            <div className="flex flex-col space-y-5" key={post.id}>
              <Link href={`/blog/posts/${post.slug}`}>
                <h2>{post.title.rendered}</h2>
                <span>{post.excerpt.protected}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
