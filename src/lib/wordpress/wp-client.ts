import sanitizeHtml from "sanitize-html";
import {
  WP_REST_API_Post as Post,
  WP_REST_API_Attachment,
  WP_REST_API_User,
} from "wp-types";

const API_BASE_URL =
  process.env.WORDPRESS_API_BASE_URL ?? "http://localhost:8080/wp-json";

const API_VERSION = process.env.WORDPRESS_API_VERSION ?? "v2";
const BASE_URL = `${API_BASE_URL}/wp/${API_VERSION}/`;

const DEFAULT_POSTS_PARAMS = {
  per_page: 10,
  page: 1,
  search: "",
  slug: <string[]>[],
};

type GetPostsParams = Partial<typeof DEFAULT_POSTS_PARAMS>;

export default class WpClient {
  constructor(
    private readonly username: string,
    private readonly password: string
  ) {}

  async getPosts(params: Partial<typeof DEFAULT_POSTS_PARAMS> = {}): Promise<{
    posts: Post[];
    totalPages: number;
  }> {
    const queryParams = this.queryString({
      ...DEFAULT_POSTS_PARAMS,
      ...params,
    });

    const url = `${BASE_URL}posts${queryParams}`;
    const response = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(),
    });
    const totalPagesHeader = response.headers.get("X-WP-TotalPages");
    const totalPages = totalPagesHeader ? Number(totalPagesHeader) : 0;
    const posts = await response.json();

    const updatedPostsData: Post[] = [];
    for (const post of posts) {
      const media: string = await this.getMediaById(post.featured_media);
      const author = await this.getAuthorById(post.author);
      const category = await this.getCategoryById(post.categories[0]);
      const description = sanitizeHtml(
        post.excerpt.rendered.replace(/\n/g, ""),
        {
          allowedTags: [],
          allowedAttributes: {},
        }
      );
      const updatedPost: Post = {
        ...post,
        description: description,
        mediaData: media,
        authorData: author,
        categoryData: category,
      };
      updatedPostsData.push(updatedPost);
    }

    return {
      posts: updatedPostsData,
      totalPages,
    };
  }

  async getPost(id: number): Promise<Post> {
    const headers = this.getHeaders();
    const response = await fetch(`${BASE_URL}posts/${id}`, {
      method: "GET",
      headers,
    });

    return response.json();
  }

  async getMediaById(id: number): Promise<string> {
    const headers = this.getHeaders();
    const response = await fetch(`${BASE_URL}media/${id}`, {
      method: "GET",
      headers,
    });

    return response.json();
  }

  async getAuthorById(id: number): Promise<string> {
    const headers = this.getHeaders();
    const response = await fetch(`${BASE_URL}users/${id}`, {
      method: "GET",
      headers,
    });

    return response.json();
  }

  async getCategoryById(id: number): Promise<string> {
    const headers = this.getHeaders();
    const response = await fetch(`${BASE_URL}categories/${id}`, {
      method: "GET",
      headers,
    });

    return response.json();
  }

  private getHeaders() {
    const auth = this.createWordpressBasicAuthHeader(
      this.username,
      this.password
    );

    return {
      Authorization: auth,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  private createWordpressBasicAuthHeader(username: string, password: string) {
    const buffer = Buffer.from(`${username}:${password}`, "binary");
    const encoded = buffer.toString("base64");

    return `Basic ${encoded}`;
  }

  private queryString(params: Record<string, string | string[] | number>) {
    const queryParams = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key].toString())}`)
      .join("&");

    return queryParams ? `?${queryParams}` : "";
  }
}

// import sanitizeHtml from "sanitize-html";
// import {

// WP_REST_API_Post as Post,
// WP_REST_API_Attachment,
// WP_REST_API_User,
// } from "wp-types";

// const API_BASE_URL =
// process.env.WORDPRESS_API_BASE_URL ?? "http://localhost:8080/wp-json";

// const API_VERSION = process.env.WORDPRESS_API_VERSION ?? "v2";
// const BASE_URL = `${API_BASE_URL}/wp/${API_VERSION}/`;

// const DEFAULT_POSTS_PARAMS = {
// per_page: 10,
// page: 1,
// search: "",
// slug: <string[]>[],
// };

// type GetPostsParams = Partial<typeof DEFAULT_POSTS_PARAMS>;

// export default class WpClient {
// constructor(
//   private readonly username: string,
//   private readonly password: string
// ) {}

// async getPosts(params: Partial<typeof DEFAULT_POSTS_PARAMS> = {}): Promise<{
//   posts: Post[];
//   totalPages: number;
// }> {
//   const queryParams = this.queryString({
//     ...DEFAULT_POSTS_PARAMS,
//     ...params,
//   });

//   const url = `${BASE_URL}posts${queryParams}`;
//   const response = await this.fetchWithHeaders(url);
//   const totalPagesHeader = response.headers.get("X-WP-TotalPages");
//   const totalPages = totalPagesHeader ? Number(totalPagesHeader) : 0;
//   const posts = await response.json();

//   const updatedPostsData: Post[] = [];
//   for (const post of posts) {
//     const media: string = await this.getMediaById(post.featured_media);
//     const author = await this.getAuthorById(post.author);
//     const category = await this.getCategoryById(post.categories[0]);
//     const description = sanitizeHtml(
//       post.excerpt.rendered.replace(/\n/g, ""),
//       {
//         allowedTags: [],
//         allowedAttributes: {},
//       }
//     );
//     const updatedPost: Post = {
//       ...post,
//       description: description,
//       mediaData: media,
//       authorData: author,
//       categoryData: category,
//     };
//     updatedPostsData.push(updatedPost);
//   }

//   return {
//     posts: updatedPostsData,
//     totalPages,
//   };
// }

// async getPost(id: number): Promise<Post> {
//   const url = `${BASE_URL}posts/${id}`;
//   const response = await this.fetchWithHeaders(url);

//   return response.json();
// }

// async getMediaById(id: number): Promise<string> {
//   const url = `${BASE_URL}media/${id}`;
//   const response = await this.fetchWithHeaders(url);

//   return response.json();
// }

// async getAuthorById(id: number): Promise<string> {
//   const url = `${BASE_URL}users/${id}`;
//   const response = await this.fetchWithHeaders(url);

//   return response.json();
// }

// async getCategoryById(id: number): Promise<string> {
//   const url = `${BASE_URL}categories/${id}`;
//   const response = await this.fetchWithHeaders(url);

//   return response.json();
// }

// private async fetchWithHeaders(url: string) {
//   const headers = this.getHeaders();
//   const response = await fetch(url, {
//     method: "GET",
//     headers,
//   });

//   return response;
// }

// private getHeaders() {
//   const auth = this.createWordpressBasicAuthHeader(
//     this.username,
//     this.password
//   );

//   return {
//     Authorization: auth,
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   };
// }

// private createWordpressBasicAuthHeader(username: string, password: string) {
//   const buffer = Buffer.from(`${username}:${password}`, "binary");
//   const encoded = buffer.toString("base64");

//   return `Basic ${encoded}`;
// }

// private queryString(params: Record<string, string | string[] | number>) {
//   const queryParams = Object.keys(params)
//     .map((key) => `${key}=${encodeURIComponent(params[key].toString())}`)
//     .join("&");

//   return queryParams ? `?${queryParams}` : "";
// }
// }
