import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";

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
