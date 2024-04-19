import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";

/**
 * Fetch all blog posts.
 */
export default async function getAllPosts() {
  const query = `
    query GetAllPosts {
      posts(where: {status: PUBLISH}, first: 100000) {
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
              sourceUrl
              mediaDetails {
                  height
                  width
              }
            }
          }
        }
      },
      redirection {
        redirects {
          origin
          target
        }
      }
    }
  `;

  const response = await fetchGraphQL(query);

  return response.data.posts.nodes as Post[];
}
