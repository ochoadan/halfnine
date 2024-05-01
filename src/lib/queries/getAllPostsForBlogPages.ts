import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";

export default async function getAllPostsForBlogPages() {
  const query = `
    query GetAllPosts {
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      posts(where: {status: PUBLISH}, first: 10000000) {
        nodes {
          databaseId
          date
          modified
          title
          slug
          excerpt(format: RENDERED)
          featuredImage {
            node {
              altText
              sourceUrl(size: MEDIUM_LARGE)
              mediaDetails {
                sizes(include: MEDIUM_LARGE) {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetchGraphQL(query);

  const posts = response.data.posts.nodes.map((post: Post) => ({ ...post }));

  return {
    posts,
    categories: response.data.categories.edges as { node: { slug: string, name: string } }[],
  };
}
