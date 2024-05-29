import getPostBySlug from "@/lib/queries/getPostBySlug";
import getAllSlugs from "@/lib/queries/getAllSlugs";
import { notFound, redirect } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import slugify from "slugify";
import Image from "next/image";
import { Post } from "@/lib/types";
import he from "he";
import clsx from "clsx";
import { Prose } from "@/components/Prose";
import Latest3Posts from "@/components/Latest3Posts";
import ContactForm from "@/components/Global/ContactForm";

// export const revalidate = async (params: { slug: string }) => {
//   const post = await getPostBySlug(params.slug);
//   if (!post) {
//     return null;
//   }
//   if (post.featuredImage === null) {
//     return 5;
//   }
//   return 86400;
// };

export const runtime = 'edge';

export const revalidate = 86400;

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
  if (!post) {
    // Deleting Causes Critical Build Error
    return null;
  }
  const description = post?.excerpt
    ? sanitizeHtml(post.excerpt.replace(/\n/g, ""), {
        allowedTags: [],
        allowedAttributes: {},
      })
    : "Error: Missing Description";
  return { ...post, description };
}
export async function generateStaticParams() {
  const response = await slugsFetcher();
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
  if (!post) {
    return null;
  }
  return {
    metadataBase: "https://www.halfnine.com",
    title: post.title,
    description: he.decode(post.description),
    alternates: {
      canonical: `https://www.halfnine.com/blog/post/${params.slug}`,
    },
    publishedTime: post.date,
    modifiedTime: post.modified,
    openGraph: {
      title: post.title,
      description: he.decode(post.description),
      url: `https://www.halfnine.com/blog/post/${params.slug}`,
      type: "article",
      sitename: "Halfnine",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: post.author.node.name,
      images: [
        {
          url:
            post.featuredImage?.node.sourceUrl ||
            "https://via.placeholder.com/896x504",
          width: post.featuredImage?.node.mediaDetails.width || 896,
          height: post.featuredImage?.node.mediaDetails.height || 504,
          alt: post.featuredImage?.node.altText || "Placeholder",
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
          url:
            post.featuredImage?.node.sourceUrl ||
            "https://via.placeholder.com/896x504",
          width: post.featuredImage?.node.mediaDetails.width || 896,
          height: post.featuredImage?.node.mediaDetails.height || 504,
          alt: post.featuredImage?.node.altText || "Placeholder",
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
      redirectMatch.target
        .replace(/.*hyleon.com\//, "")
        .replace(/.*cms.halfnine.com\//, "")
    );
    const redirectUrl = `/blog/post/${targetSlug}`;
    redirect(redirectUrl);
  }

  const post = await returnPostPage(params);

  if (!post) {
    return notFound();
  }

  function modifyContent(content: string) {
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
    content = content.replace(
      /<h[1-6].*?>(.*?)<\/h[1-6]>/g,
      function (match, p1) {
        const level = match.charAt(2);
        const id = p1
          .toLowerCase()
          .replace(/<\/?[^>]+(>|$)/g, "")
          .replace(/ /g, "-");
        return `<h${level} id="${id}">${p1}</h${level}>`;
      }
    );
    return content;
  }

  const generateTableOfContents = (content: string) => {
    const headings = content.match(/<h2.*?>.*?<\/h2>/g);
    if (!headings) {
      return [];
    }
    const tableOfContents = headings.map((heading) => {
      const level = 1;
      // const headings = content.match(/<h[1-6].*?>.*?<\/h[1-6]>/g);
      // if (!headings) {
      //   return [];
      // }
      // const tableOfContents = headings.map((heading) => {
      //   const level = parseInt(heading.charAt(2));
      const text = heading.replace(/<\/?[^>]+(>|$)/g, "");
      const id = text.toLowerCase().replace(/ /g, "-");
      return { level, text, id };
    });
    return tableOfContents;
  };

  const tableOfContents = generateTableOfContents(post.content);
  const Content = () => (
    <>
      <Image
        width={896}
        height={504}
        className="aspect-video rounded-2xl bg-gray-50 object-cover mx-auto xl:mt-0 mb-4 -mt-6 "
        src={
          post?.featuredImage?.node?.sourceUrl ||
          "https://via.placeholder.com/896x504"
        }
        alt={post?.featuredImage?.node?.altText || "Placeholder"}
      />
      <h1
        className="text-3xl sm:text-4xl font-bold text-neutral-800 text-center mb-2"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
      <Prose>
        <div className="relative mt-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">
              Posted on{" "}
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>{" "}
              by {post.author.node.name}
            </span>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: modifyContent(post.content),
          }}
        />
      </Prose>
    </>
  );
  const TableOfContents = () => (
    // <div className="sticky top-20">
    //   <div className="space-y-4">
    // <div className="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
    <div className="hidden xl:sticky xl:top-[1.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        <h2 className="text-lg font-bold text-neutral-800 mb-2">
          Table of Contents
        </h2>
        <ul className="space-y-2">
          {tableOfContents.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={clsx(
                  "text-sm text-neutral-600 hover:text-neutral-800",
                  `pl-${heading.level * 2}`
                )}
              >
                {he.decode(heading.text)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
  return (
    <>
      <div className="relative mx-auto flex w-full max-w-7xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="min-w-0 max-w-2xl flex-auto px-4 pt-16 lg:max-w-4xl lg:pl-8 lg:pr-0 xl:px-16">
          <Content />
        </div>
        <TableOfContents />
      </div>
      <div className="flex justify-center w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <div className="w-full mb-4">
          <div className="border-t border-gray-300" />
          <h3 className="text-2xl font-bold my-2 mt-4">Latest Posts:</h3>
          <Latest3Posts />
        </div>
      </div>
      <ContactForm addContainer="tight" addPadding="bottom" />
    </>
  );
};

export default Page;
