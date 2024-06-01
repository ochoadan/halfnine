import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import getAllPostsForBlogPages from "@/lib/queries/getAllPostsForBlogPages";
import he from "he";
import sanitizeHtml from "sanitize-html";

export const revalidate = 3600;

const pageLength = 30;

async function returnPostPage() {
  const response = await getAllPostsForBlogPages();

  return response;
}

export async function generateStaticParams() {
  const response = await returnPostPage();

  const totalPages = Math.ceil(response.posts.length / pageLength);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
  return pageNumbers.map((pageNum) => ({
    pageNumber: [String(pageNum)],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { pageNumber?: number };
}) {
  const pageNumber = parseInt(String(params.pageNumber)) || 0;
  return {
    title: `Blog ${pageNumber > 0 ? `Page ${pageNumber} ` : ""}`,
    description:
      "Learn more about Technology, Software Sales, and more on the Halfnine blog.",
    alternates: {
      canonical: `https://www.halfnine.com/blog${
        pageNumber > 0 ? `/${pageNumber}` : ""
      }`,
    },
    openGraph: {
      url: `https://www.halfnine.com/blog${
        pageNumber > 0 ? `/${pageNumber}` : ""
      }`,
    },
  };
}

export default async function Home({
  params,
}: {
  params: { pageNumber?: number };
}) {
  // if (params.pageNumber && isNaN(parseInt(String(params.pageNumber)))) {
  //   return notFound();
  // }
  const pageNumber = parseInt(String(params.pageNumber)) || 0;

  const response = await returnPostPage();

  const totalPages = Math.ceil(response.posts.length / pageLength);

  if (
    (params.pageNumber && isNaN(params.pageNumber)) ||
    pageNumber < 0 ||
    pageNumber >= totalPages
  ) {
    return notFound();
  }

  const startIndex = pageNumber * pageLength;
  const endIndex = startIndex + pageLength;
  const paginatedPosts = response.posts.slice(startIndex, endIndex);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="flex flex-wrap justify-center my-2">
          {response.categories.map((category: any) => (
            <Link
              key={category.node.slug}
              href={`/blog/category/${category.node.slug}`}
              className="inline-block px-3 py-1 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg m-2"
            >
              {category.node.name}
            </Link>
          ))}
        </div>
        {pageNumber === 0 ? (
          <div className="mt-8 mb-4 text-2xl font-bold">Latest Posts:</div>
        ) : (
          <div className="mt-8 mb-4 text-2xl font-bold">Page {pageNumber}:</div>
        )}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {paginatedPosts.map((post: any) => (
            <div
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <Link href={`/blog/post/${post.slug}`}>
                <div className="relative w-full">
                  <Image
                    src={
                      post.featuredImage?.node.sourceUrl ||
                      "https://via.placeholder.com/640x360"
                    }
                    width={640}
                    height={360}
                    alt={post.featuredImage?.node.altText}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col space-y-5">
                  <h2
                    className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <span className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                    {he.decode(
                      sanitizeHtml(post.excerpt.replace(/\n/g, ""), {
                        allowedTags: [],
                        allowedAttributes: {},
                      })
                    )}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {(pageNumber > 0 && (
              <Link
                href={`/blog${pageNumber > 1 ? `/${pageNumber - 1}` : ""}`}
                className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            )) || (
              <p className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                {/* <span className="sr-only">Next Page</span> */}
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            )}
            <p className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 select-none">
              {pageNumber}
            </p>
            {(pageNumber < totalPages - 1 && (
              <Link
                href={`/blog/${pageNumber + 1}`}
                className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            )) || (
              <p className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                {/* <span className="sr-only">Next Page</span> */}
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
