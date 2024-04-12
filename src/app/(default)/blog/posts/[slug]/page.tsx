import { use } from "react";
import { notFound } from "next/navigation";

import wpService from "@/lib/wordpress/wp-service";
import sanitizeHtml from "sanitize-html";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 1200;

interface PostPageParams {
  params: {
    slug: string;
  };
}

async function getPostBySlug(slug: string) {
  const { posts } = await wpService.getPosts({
    slug: [slug],
  });
  return posts ? posts[0] : null;
}

export async function generateMetadata({ params }: PostPageParams) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title.rendered} - Halfnine`,
    description: post.description,
    alternates: {
      canonical: `https://www.halfnine.com/blog/posts/${params.slug}`,
    },
    openGraph: {
      title: post.title.rendered,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [(post.authorData as { name: string }).name],
      images: [
        {
          url: (post.mediaData as { source_url: string }).source_url,
          width: 800,
          height: 400,
          alt: post.title.rendered,
        },
      ],
    },
  };
}

function PostPage({ params }: PostPageParams) {
  const post = use(getPostBySlug(params.slug));
  const { posts } = use(wpService.getPosts());

  if (!post) {
    notFound();
  }
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
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <main className="flex-1 prose prose-neutral max-w-none">
          <div className="flex flex-col space-y-4">
            <div>
              {/* {JSON.stringify(post.mediaData.source_url)} */}
              <Image
                width={800}
                height={400}
                className="aspect-video rounded-2xl bg-gray-50 object-cover mx-auto mt-0 mb-8"
                src={
                  (post.mediaData as { source_url: string }).source_url ||
                  "https://via.placeholder.com/640x400"
                }
                alt={(post.mediaData as { alt_text: string }).alt_text}
              />
              <h1 className="text-4xl font-extrabold text-neutral-800 text-center">
                {post.title.rendered}
              </h1>
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
                    <Link
                      href={`/blog/author/${
                        (post.authorData as { slug: string }).slug
                      }`}
                      className="no-underline text-gray-500 text-sm font-thin"
                    >
                      {(post.authorData as { name: string }).name}
                    </Link>
                  </span>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            </div>
          </div>
        </main>

        {/* <aside className="sticky top-28 hidden w-96 shrink-0 xl:block text-gray-700 font-thin"> */}
        <aside className="hidden w-[22rem] shrink-0 xl:block text-gray-700">
          <div className="rounded-xl ring-1 ring-gray-200 px-2.5 py-1.5">
            <p className="font-bold text-xl mb-2">Latest Posts:</p>
            <div className="space-y-2">
              {posts.slice(0, 10).map((postx) => (
                <div key={postx.id}>
                  <Link
                    href={`/blog/posts/${postx.slug}`}
                    className="no-underline text-gray-700 font-base"
                  >
                    <p>{postx.title.rendered}</p>
                  </Link>
                </div>
              ))}
            </div>
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
                    href={`/blog/posts/${postx.slug}`}
                    className="no-underline text-gray-700 font-semibold"
                  >
                    <p>{postx.title.rendered}</p>
                  </Link>
                ))}
            </div> */}
          </div>
        </aside>
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
//     title: `${post.title.rendered} - Halfnine`,
//     description: post.excerpt.raw,
//     alternates: { canonical: `https://www.halfnine.com/blog/posts/${params.slug}` },
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
