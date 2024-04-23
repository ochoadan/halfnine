import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";
import sanitizeHtml from "sanitize-html";

/**
 * Fetch all blog posts.
 */
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
              }}
            }
          }
        }
      },
    }
  `;

  const response = await fetchGraphQL(query);

  const posts = response.data.posts.nodes.map((post: Post) => {
    const description = sanitizeHtml(post.excerpt.replace(/\n/g, ""), {
      allowedTags: [],
      allowedAttributes: {},
    });

    return {
      ...post,
      description,
    };
  });

  return {
    posts: posts as Post[],
    categories: response.data.categories.edges as { node: { slug: string, name: string } }[],
  };
}