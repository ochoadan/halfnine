import { fetchGraphQL } from "@/lib/functions";

export default async function getAllSlugs() {
  const query = `
    query GetAllSlugs {
      categories {
        edges {
          node {
            slug
            count
          }
        }
      }
      posts(where: {status: PUBLISH}, first: 10000000) {
        nodes {
          slug
        }
      }
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
