import { MetadataRoute } from "next";
import wpService from "@/lib/wordpress/wp-service";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await wpService.getPosts({ per_page: 100 });
  const { posts } = response;

  const blogPages = Array.from(
    { length: Math.ceil(posts.length / 12) - 1 },
    (_, index) => index + 1
  );

  const categories = await wpService.getCategories();
  const categorySlugs = categories.map((category: any) => category.slug);

  const postForEachCategory = await Promise.allSettled(
    categories.map(async (category: any) => {
      const posts = await wpService.getPosts({
        per_page: 100,
        categories: category.id,
      });
      return { category: category.slug, ...posts };
    })
  );

  const pagesForEachCategory = postForEachCategory.map((result: any) => {
    const { posts } = result.value || { posts: [] };
    const totalPages = Math.max(Math.ceil(posts.length / 12) - 1, 0);
    return { slug: result.value?.category, totalPages };
  });

  const blogUrls = blogPages.map((pageNumber: any) => ({
    url: `https://www.halfnine.com/blog/${pageNumber}`,
    changeFrequency: "daily",
    priority: 0.5,
  }));

  const categoryUrls = categorySlugs.map((categorySlug: any) => ({
    url: `https://www.halfnine.com/blog/category/${categorySlug}`,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const categoryPagesUrls = pagesForEachCategory.flatMap((page) => {
    const { slug, totalPages } = page;
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      // const pageNumber = parseInt(String(index + 1));

      const url = `https://www.halfnine.com/blog/category/${slug}/${pageNumber}`;
      return { url, changeFrequency: "weekly", priority: 0.5 };
    });
  });

  const postUrls = posts.map((post: any) => ({
    url: `https://www.halfnine.com/blog/post/${post.slug}`,
    lastModified: new Date(post.modified_gmt),
    changeFrequency: "weekly",
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
    ...categoryPagesUrls,
    ...postUrls,
  ];
}
