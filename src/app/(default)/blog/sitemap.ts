import { MetadataRoute } from "next";
import wpService from "@/lib/wordpress/wp-service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await wpService.getPosts();
  const posts = response.posts;

  return posts.map((post) => ({
    url: `https://www.halfnine.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.5,
  }));
}
