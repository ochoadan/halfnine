import { fetchGraphQL } from "@/lib/functions";

/**
 * Fetch all blog posts.
 */
export default async function getAllRedirects() {
  const query = `
    query NewQuery {
      redirection {
        redirects {
          origin
          target
        }
      }
    }
  `;

  const response = await fetchGraphQL(query);

  return response.data as any;
}