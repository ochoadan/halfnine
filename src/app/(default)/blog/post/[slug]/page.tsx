import getPostBySlug from "@/lib/queries/getPostBySlug";
import getAllSlugs from "@/lib/queries/getAllSlugs";
import { notFound, redirect } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import slugify from "slugify";
import Image from "next/image";
import { Post } from "@/lib/types";
import he from "he";
import BlogCTA from "@/components/Global/BlogCTA";

export const revalidate = 3600;

interface PostPageParams {
  params: {
    slug: string;
  };
}

async function slugsFetcher() {
  const response = await getAllSlugs();
  return response;
}

async function returnPostPage(params: { slug: string }) {
  const post = await getPostBySlug(params.slug);
  const description = post?.excerpt
    ? sanitizeHtml(post.excerpt.replace(/\n/g, ""), {
        allowedTags: [],
        allowedAttributes: {},
      })
    : "Error: Missing Description";
  if (!post) {
    return notFound();
  }
  return { ...post, description };
}
export async function generateStaticParams() {
  const response = await slugsFetcher();
  const postSlugs = response.posts.nodes.map((post: Post) => post.slug);
  const redirectSlugs = response.redirection.redirects.map(
    (redirect: { origin: string }) => slugify(redirect.origin)
  );
  return [...postSlugs].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PostPageParams) {
  const post = await returnPostPage(params);

  return {
    metadataBase: "https://www.halfnine.com",
    title: post.title,
    description: he.decode(post.description),
    alternates: {
      canonical: `https://www.halfnine.com/blog/post/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: he.decode(post.description),
      url: `https://www.halfnine.com/blog/post/${params.slug}`,
      type: "article",
      sitename: "Halfnine",
      locale: "en_US",
      publishedTime: post.date,
      authors: post.author.node.name,
      images: [
        {
          url: post.featuredImage.node.sourceUrl,
          width: post.featuredImage.node.mediaDetails.width,
          height: post.featuredImage.node.mediaDetails.height,
          alt: post.featuredImage.node.altText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: he.decode(post.description),
      siteId: "1591480775735709700",
      creatorId: "1591480775735709700",
      site: "@halfnine",
      creator: "@halfnine",
      images: [
        {
          url: post.featuredImage.node.sourceUrl,
          width: post.featuredImage.node.mediaDetails.width,
          height: post.featuredImage.node.mediaDetails.height,
          alt: post.featuredImage.node.altText,
        },
      ],
    },
  };
}

const Page = async ({ params }: PostPageParams) => {
  const response = await slugsFetcher();
  const redirectMatch = response.redirection.redirects.find(
    (redirect: { origin: string }) => slugify(redirect.origin) === params.slug
  );

  if (redirectMatch) {
    const targetSlug = slugify(
      redirectMatch.target.replace(/.*hyleon.com\//, "").replace(/.*cms.halfnine.com\//, "")
    );
    const redirectUrl = `/blog/post/${targetSlug}`;
    return redirect(redirectUrl);
  }

  const post = await returnPostPage(params);

  function addNofollowContent(content: string) {
    content = content.replace(
      /<a[^>]*href=["|'](http[^"']*)["|'][^>]*>(.*?)<\/a>/gi,
      function (match, p1, p2) {
        if (p1.indexOf("halfnine.com") === -1) {
          return `<a href="${p1}" rel="nofollow" target="_blank">${p2}</a>`;
        } else {
          return `<a href="${p1}" target="_blank">${p2}</a>`;
        }
      }
    );
    // content = content.replace(
    //   /<h[1-6].*?>(.*?)<\/h[1-6]>/g,
    //   function (match, p1) {
    //     const level = match.charAt(2);
    //     const id = p1.toLowerCase().replace(/ /g, "-");
    //     return `<h${level} id="${id}">${p1}</h${level}>`;
    //   }
    // );
    return content;
  }

  // const generateTableOfContents = (content: string) => {
  //   const headings = content.match(/<h2.*?>.*?<\/h2>/g);
  //   if (!headings) {
  //     return [];
  //   }
  //   const tableOfContents = headings.map((heading) => {
  //     const level = 2;
  //     // const headings = content.match(/<h[1-6].*?>.*?<\/h[1-6]>/g);
  //     // if (!headings) {
  //     //   return [];
  //     // }
  //     // const tableOfContents = headings.map((heading) => {
  //     //   const level = parseInt(heading.charAt(2));
  //     const text = heading.replace(/<\/?[^>]+(>|$)/g, "");
  //     const id = text.toLowerCase().replace(/ /g, "-");
  //     return { level, text, id };
  //   });
  //   return tableOfContents;
  // };

  // const tableOfContents = generateTableOfContents(post.content);
  return (
    <>
      {/* {JSON.stringify(tableOfContents)} */}
      {/* <BlogCTA /> */}
      <div className="mx-auto flex w-full max-w-[50rem] items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <main className="flex-1 prose prose-lg text-[1.08rem] prose-neutral leading-relaxed max-w-none">
          <div className="flex flex-col space-y-4">
            <div>
              <Image
                // width={post.featuredImage.node.mediaDetails.width}
                // height={post.featuredImage.node.mediaDetails.height}
                width={740}
                height={416.25}
                className="aspect-video rounded-2xl bg-gray-50 object-cover mx-auto mt-0 mb-8"
                src={
                  post.featuredImage.node.sourceUrl ||
                  "https://via.placeholder.com/640x400"
                }
                alt={post.featuredImage.node.altText}
              />
              <h1
                className="text-3xl sm:text-4xl font-extrabold text-neutral-800 text-center"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className="relative py-2">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-sm text-gray-500">
                    Posted on{" "}
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>{" "}
                    by{" "}
                    {/* <Link
                    href={`/blog/author/${
                      (post.authorData as { slug: string }).slug
                    }`}
                    className="no-underline text-gray-500 text-sm font-thin"
                  > */}
                    {post.author.node.name}
                    {/* </Link> */}
                  </span>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: addNofollowContent(post.content),
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
