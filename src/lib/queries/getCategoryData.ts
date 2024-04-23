import { fetchGraphQL } from "@/lib/functions";
import { Post } from "@/lib/types";

/**
 * Fetch all blog posts.
 */
export default async function getCategoryData(id: string) {
  const query = `
    query GetCategoryData($id: ID!) {
      category(id: $id, idType: SLUG) {
        name,
        description,
        slug,
        posts(first: 100000000, where: {status: PUBLISH}) {
          edges {
            node {
              slug
              title
              excerpt
              featuredImage {
                node {
                  altText
                  sourceUrl(size: MEDIUM_LARGE),
                  mediaDetails {
                    sizes(include: MEDIUM_LARGE) {
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    id,
  };

  const response = await fetchGraphQL(query, variables);

  // return response.data as any;
  return response.data as {
    categories: {
      edges: {
        node: {
          slug: string;
        };
      }[];
    };
    category: {
      name: string;
      description: string;
      slug: string;
      posts: {
        edges: {
          node: Post;
        }[];
      };
    };
  }
};

// query GetCategoryData($id: ID!) {
//   category(id: $id, idType: SLUG){
//     edges {
//       node {
//         slug
//         count
//         posts(first: 1) {
//           edges {
//             node {
//               slug
//               featuredImage {
//                 node {
//                   altText
//                   mediaDetails {
//                     sizes(include: MEDIUM_LARGE) {
//                       sourceUrl
//                       width
//                       height
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }