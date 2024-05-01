import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";

export default async function getAllPosts(slug: string) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title(format: RENDERED)
        excerpt(format: RENDERED)
        date
        modifiedGmt
        content(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl(size: LARGE)
            mediaDetails {
              sizes(include: LARGE) {
                height
                width
              }
            }
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `;

  const variables = {
    slug: slug
  }

  const response = await fetchGraphQL(query, variables);

  return response.data.post as Post;
}
