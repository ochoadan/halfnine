import { MetadataRoute } from "next";
import wpService from "@/lib/wordpress/wp-service";

export const revalidate = 1200;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await wpService.getPosts({
    per_page: 100,
  });
  const posts = response.posts;

  const categories = await wpService.getCategories();
  const categorySlugs = categories.map((category: any) => category.slug);

  const blogPages = Array.from({
    // length: Math.ceil(posts.length / 12 - 1),
    length: Math.ceil(posts.length / 12) - 1,
  }).map((_, index) => index + 1);

  return [
    {
      url: "https://www.halfnine.com/blog",
      changeFrequency: "daily",
      priority: 0.5,
    },
    ...blogPages.map((pageNumber: any) => ({
      url: `https://www.halfnine.com/blog/${pageNumber}`,
      changeFrequency: "daily",
      priority: 0.5,
    })),
    ...categorySlugs.map((categorySlug: any) => ({
      url: `https://www.halfnine.com/blog/category/${categorySlug}`,
      changeFrequency: "weekly",
      priority: 0.5,
    })),
    ...posts.map((post) => ({
      url: `https://www.halfnine.com/blog/posts/${post.slug}`,
      lastModified: new Date(post.modified_gmt),
      changeFrequency: "weekly",
      priority: 0.5,
    })),
  ];
}
