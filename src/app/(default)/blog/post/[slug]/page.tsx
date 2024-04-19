import getPostBySlug from "@/lib/queries/getPostBySlug";
import getAllRedirects from "@/lib/queries/getRedirects";
import he from "he";
import { notFound, redirect } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import slugify from "slugify";
import Image from "next/image";
import getAllSlugs from "@/lib/queries/getAllSlugs";
import { Post } from "@/lib/types";

export const revalidate = 3600;

interface PostPageParams {
  params: {
    slug: string;
  };
}

async function returnPostPage(params: { slug: string }) {
  const redirectResponse = await getAllRedirects();
  const redirectMatch = redirectResponse.redirection.redirects.find(
    (redirect: { origin: string }) => slugify(redirect.origin) === params.slug
  );
  if (redirectMatch) {
    const targetSlug = slugify(
      redirectMatch.target.replace(/.*hyleon.com\//, "")
    );
    const redirectUrl = `https://www.halfnine.com/blog/post/${targetSlug}`;
    redirect(redirectUrl);
  }
  const post = await getPostBySlug(params.slug);
  const description = sanitizeHtml(post.excerpt.replace(/\n/g, ""), {
    allowedTags: [],
    allowedAttributes: {},
  });
  if (!post) {
    return notFound();
  }
  // const title = he.decode(post.title);
  return { ...post, description };
}
export async function generateStaticParams() {
  const response = await getAllSlugs();
  const postSlugs = response.posts.nodes.map((post: Post) => post.slug);
  const redirectSlugs = response.redirection.redirects.map(
    (redirect: { origin: string }) => slugify(redirect.origin)
  );
  return [...postSlugs, ...redirectSlugs].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PostPageParams) {
  const post = await returnPostPage(params);

  return {
    metadataBase: "https://www.halfnine.com",
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.halfnine.com/blog/post/${params.slug}`,
    },
    openGraph: {
      title: he.decode(post.title),
      description: post.description,
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
      title: he.decode(post.title),
      description: post.description,
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
  const post = await returnPostPage(params);
  return (
    <>
      {/* <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8"> */}
      <div className="mx-auto flex w-full max-w-[50rem] items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <main className="flex-1 prose prose-lg text-[1.08rem] prose-neutral leading-relaxed max-w-none">
          <div className="flex flex-col space-y-4">
            <div>
              {/* {JSON.stringify(post.mediaData.media_details.sizes["1536x1536"].source_url)} */}
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
                className="text-4xl font-extrabold text-neutral-800 text-center"
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
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </main>
      </div>
      {/* <div className="mx-auto w-full max-w-4xl items-start gap-x-8 px-4 py-10 pb-16 sm:px-6 lg:px-8">
        <p className="font-bold mb-2 text-xl">Latest Posts:</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {posts.map((postx: any) => (
            <div
              key={postx.id}
              className="flex flex-col items-start justify-between"
            >
              <Link href={`/blog/post/${postx.slug}`}>
                <div className="relative w-full">
                  <Image
                    src={
                      postx.mediaData.media_details.sizes.medium_large.source_url.toString() ||
                      "https://via.placeholder.com/640x360"
                    }
                    width={368}
                    height={207}
                    alt={postx.mediaData.alt_text as string}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col space-y-5">
                  <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                    {he.decode(postx.title.rendered)}
                  </h2>
                  <span className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                    {he.decode(postx.description as string)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div> */}
      {/* {posts.map((postx: any) => (
        <div key={postx.id}>
          <Link
            href={`/blog/post/${postx.slug}`}
            className="no-underline text-gray-700 font-base"
          >
            <div className="relative w-full">
              <Image
                src={
                  (
                    postx.mediaData as any
                  ).media_details.sizes.medium_large.source_url.toString() ||
                  "https://via.placeholder.com/640x360"
                }
                width={640}
                height={360}
                alt={(postx.mediaData as any).alt_text as string}
                // alt={"Image for " + post.title.rendered}
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
             <p>{postx.title.rendered}</p> 
          </Link>
        </div>
      ))} */}
      {/* </div> */}
    </>
  );
};

export default Page;
