import { Suspense, use } from "react";
import wpService from "@/lib/wordpress/wp-service";
import { Metadata } from "next";
import Client from "./client";

export const metadata: Metadata = {
  title: "Blog | Halfnine",
  description:
    "Learn more about Technology, Software Sales, and more on the Halfnine blog.",
  alternates: { canonical: "https://www.halfnine.com/blog" },
};

export const revalidate = 1200;

export default function Home() {
  const { posts } = use(wpService.getPosts());
  const categories = use(wpService.getCategories());
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Client posts={posts} categories={categories} />
    </Suspense>
  );
}
