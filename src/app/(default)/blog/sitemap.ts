import { MetadataRoute } from "next";
import getSitemapData from "@/lib/queries/getSitemapData";

export const revalidate = 1200;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageLength = 15;
  const { posts, categories } = await getSitemapData();

  const blogPages = Array.from(
    { length: Math.ceil(posts.nodes.length / pageLength) - 1 },
    (_, index) => index + 1
  );

  const categoryUrls = categories.edges.flatMap(({ node }: any) => {
    const totalPages = Math.ceil(node.count / pageLength);
    return Array.from({ length: totalPages }, (_, index) => index).map((pageNumber) => {
      const url = `https://www.halfnine.com/blog/category/${node.slug}${pageNumber === 0 ? '' : `/${pageNumber}`}`;
      return {
        url,
        changeFrequency: "weekly" as const,
        priority: 0.5,
      };
    });
  });

  const blogUrls = blogPages.map((pageNumber: any) => ({
    url: `https://www.halfnine.com/blog/${pageNumber}`,
    changeFrequency: "daily" as const,
    priority: 0.5,
  }));

  const postUrls = posts.nodes.map((post: any) => ({
    url: `https://www.halfnine.com/blog/post/${post.slug}`,
    lastModified: new Date(post.modifiedGmt),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: "https://www.halfnine.com/blog",
      changeFrequency: "daily",
      priority: 0.5,
    },
    ...blogUrls,
    ...categoryUrls,
    ...postUrls,
  ];
}
