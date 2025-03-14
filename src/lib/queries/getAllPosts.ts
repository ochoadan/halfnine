import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";

export default async function getAllPosts() {
  const query = `
    query GetAllPosts {
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
              sourceUrl
              mediaDetails {
                  height
                  width
              }
            }
          }
        }
      },
    }
  `;

  const response = await fetchGraphQL(query);

  return response.data.posts.nodes as Post[];
}
