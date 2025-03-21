import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";

export default async function getSitemapData() {
  const query = `
    query GetAllPosts {
      posts(where: {status: PUBLISH}, first: 10000000) {
        nodes {
          slug
          modifiedGmt
        }
      }
      categories {
        edges {
          node {
            slug
            count
          }
        }
      }
    }
  `;

  const response = await fetchGraphQL(query);

  return response.data as {
    posts: {
      nodes: Post[];
    };
    categories: {
      edges: {
        node: {
          slug: string;
          count: number;
        };
      }[];
    };
  };
}
