import { use } from "react";
import { notFound } from "next/navigation";

import wpService from "@/lib/wordpress/wp-service";
import Image from "next/image";
import Link from "next/link";
import he from "he";
import { url } from "inspector";

export const revalidate = 1200;

interface PostPageParams {
  params: {
    slug: string;
  };
}

async function getPostBySlug(slug: string) {
  const { posts } = await wpService.getPosts({
    slug: [slug],
    per_page: 100,
  });
  return posts ? posts[0] : null;
}

export async function generateMetadata({ params }: PostPageParams) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return {
    metadataBase: "https://www.halfnine.com",
    title: `${he.decode(post.title.rendered)}`,
    description: post.description,
    alternates: {
      canonical: `https://www.halfnine.com/blog/post/${params.slug}`,
    },
    openGraph: {
      title: he.decode(post.title.rendered),
      description: post.description,
      url: `https://www.halfnine.com/blog/post/${params.slug}`,
      type: "article",
      sitename: "Halfnine",
      locale: "en_US",
      publishedTime: post.date,
      authors: [(post.authorData as { name: string }).name],
      images: [
        {
          url: (post.mediaData as any).media_details.sizes.large.source_url,
          width: 1024,
          height: 576,
          alt: (post.mediaData as { alt_text: string }).alt_text,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: he.decode(post.title.rendered),
      description: post.description,
      siteId: "1591480775735709700",
      creatorId: "1591480775735709700",
      site: "@halfnine",
      creator: "@halfnine",
      images: [
        {
          url: (post.mediaData as any).media_details.sizes.large.source_url,
          width: 1024,
          height: 576,
          alt: (post.mediaData as { alt_text: string }).alt_text,
        },
      ],
    },
  };
}

async function getLatestPosts() {
  const posts = await wpService.getLatestThreePosts();
  return posts;
}

function PostPage({ params }: PostPageParams) {
  const post = use(getPostBySlug(params.slug));
  if (!post) {
    notFound();
  }
  const posts = use(getLatestPosts());
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
    return content;
  }
  const modifiedContent = addNofollowContent(post.content.rendered);

  return (
    <>
      {/* <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8"> */}
      <div className="mx-auto flex w-full max-w-[50rem] items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <main className="flex-1 prose prose-lg text-[1.08rem] prose-neutral leading-relaxed max-w-none">
          <div className="flex flex-col space-y-4">
            <div>
              {/* {JSON.stringify(post.mediaData.media_details.sizes["1536x1536"].source_url)} */}
              <Image
                width={740}
                height={416.25}
                className="aspect-video rounded-2xl bg-gray-50 object-cover mx-auto mt-0 mb-8"
                src={
                  // (post.mediaData as { source_url: string }).source_url ||
                  (post.mediaData as any).media_details.sizes.large
                    .source_url || "https://via.placeholder.com/640x400"
                }
                alt={(post.mediaData as { alt_text: string }).alt_text}
              />
              <h1
                className="text-4xl font-extrabold text-neutral-800 text-center"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
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
                    {(post.authorData as { name: string }).name}
                    {/* </Link> */}
                  </span>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            </div>
          </div>
        </main>

        {/* <aside className="sticky top-28 hidden w-96 shrink-0 xl:block text-gray-700 font-thin"> */}
        {/* <aside className="hidden w-[22rem] shrink-0 xl:block text-gray-700">
          <div className="rounded-xl ring-1 ring-gray-200 px-2.5 py-1.5">
            <p className="font-bold text-xl mb-2">Latest Posts:</p>
            <div className="space-y-2">
              {posts.slice(0, 10).map((postx) => (
                <div key={postx.id}>
                  <Link
                    href={`/blog/post/${postx.slug}`}
                    className="no-underline text-gray-700 font-base"
                  >
                    <p>{postx.title.rendered}</p>
                  </Link>
                </div>
              ))}
            </div> */}
        {/* <p>
              Read more the "
              <Link
                href={`/blog/category/${
                  (post.categoryData as { slug: string }).slug
                }`}
                className="no-underline text-gray-700 font-bold"
              >
                {(post.categoryData as { name: string }).name}
              </Link>
              " category:
            </p>
            <div className="">
              {posts
                .filter((postx) => postx.categories![0] === post.categories![0])
                .map((postx) => (
                  <Link
                    key={postx.id}
                    href={`/blog/post/${postx.slug}`}
                    className="no-underline text-gray-700 font-semibold"
                  >
                    <p>{postx.title.rendered}</p>
                  </Link>
                ))}
            </div> */}
        {/* </div>
        </aside> */}
      </div>
      <div className="mx-auto w-full max-w-4xl items-start gap-x-8 px-4 py-10 pb-16 sm:px-6 lg:px-8">
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
                    {postx.title.rendered}
                  </h2>
                  <span className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                    {postx.description as React.ReactNode}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
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
      </div>
    </>
  );
}

export default PostPage;

// function addNofollowContent(content: string) {
//   content = content.replace(
//     /<a[^>]*href=["|']([^"']*)["|'][^>]*>(.*?)<\/a>/gi,
//     function (match, p1, p2) {
//       if (p1.indexOf("https://www.halfnine.com/") === -1) {
//         return `<a href="${p1}" rel="nofollow" target="_blank">${p2}</a>`;
//       } else {
//         return `<a href="${p1}" target="_blank">${p2}</a>`;
//       }
//     }
//   );
//   return content;
// }

// function addNofollowContent(content: string) {
//   content = content.replace(
//     /<a[^>]*href=["|']([^"']*)["|'][^>]*>([^<]*)<\/a>/gi,
//     function (match, p1, p2) {
//       if (p1.indexOf("https://www.halfnine.com/") === -1) {
//         return (
//           '<a href="' + p1 + '" rel="nofollow" target="_blank">' + p2 + "</a>"
//         );
//       } else {
//         return '<a href="' + p1 + '" target="_blank">' + p2 + "</a>";
//       }
//     }
//   );
//   content = content.replace(
//     /<a[^>]*href=["|']([^"']*)["|'][^>]*><sup>([^<]*)<\/sup><\/a>/gi,
//     function (match, p1, p2) {
//       if (p1.indexOf("https://www.halfnine.com/") === -1) {
//         return (
//           '<a href="' + p1 + '" rel="nofollow" target="_blank"><sup>' + p2 + "</sup></a>"
//         );
//       } else {
//         return '<a href="' + p1 + '" target="_blank"><sup>' + p2 + "</sup></a>";
//       }
//     }
//   );
//   return content;
// }

// import { use } from "react";
// import { notFound } from "next/navigation";

// import wpService from "@/lib/wordpress/wp-service";
// import { Metadata } from "next";

// interface PostPageParams {
//   params: {
//     slug: string;
//   };
// }

// export async function generateMetadata({ params }: PostPageParams) {
//   const { posts } = await wpService.getPosts({
//     slug: [params.slug],
//   });

//   const post = posts ? posts[0] : null;

//   if (!post) {
//     notFound();
//   }

//   return {
//     title: `${post.title.rendered}`,
//     description: post.excerpt.raw,
//     alternates: { canonical: `https://www.halfnine.com/blog/post/${params.slug}` },
//   };
// }

// function PostPage({ params }: PostPageParams) {
//   const { posts } = use(
//     wpService.getPosts({
//       slug: [params.slug],
//     })
//   );

//   const post = posts ? posts[0] : null;

//   if (!post) {
//     notFound();
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
//       <div className="flex flex-col space-y-4">
//         <div className="flex flex-col space-y-2">
//           <h1 className="text-3xl font-semibold">{post.title.rendered}</h1>
//           <h2 className="text-xl font-semibold">{post.excerpt.raw}</h2>
//         </div>

//         <div className="prose prose-neutral">
//           <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PostPage;

// Generate static paths

export async function generateStaticParams() {
  const { posts } = await wpService.getPosts({
    per_page: 100,
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
