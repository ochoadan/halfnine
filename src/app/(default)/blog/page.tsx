import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import he from "he";
import sanitizeHtml from "sanitize-html";
import getLastPosts from "@/lib/queries/getLastPosts";

export const revalidate = 3600;

async function returnPostPage() {
  const response = await getLastPosts();

  return response;
}

// export async function generateStaticParams() {
//   const response = await returnPostPage();

//   //   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
//   //   return pageNumbers.map((pageNum) => ({
//   //     pageNumber: [String(pageNum)],
//   //   }));
// }

export async function generateMetadata() {
  return {
    title: `Halfnine's Digital Transformation and Digital Success Blog`,
    description:
      "Learn more about Technology, Software Sales, and more on the Halfnine blog.",
    alternates: {
      canonical: `https://www.halfnine.com/blog`,
    },
    openGraph: {
      url: `https://www.halfnine.com/blog`,
    },
  };
}

export default async function Home() {
  const response = await returnPostPage();
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Halfnine&apos;s Digital Success Blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn more about how technology can help you succeed in your
            business.
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

        <div className="mt-8 mb-4 text-2xl font-bold">Latest Posts:</div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {response.posts.map((post: any) => (
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
            {/* {(pageNumber > 0 && (
              <Link
                href={`/blog${pageNumber > 1 ? `/${pageNumber - 1}` : ""}`}
                className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            )) || ( */}
              <p className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            {/* )} */}
            <p className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 select-none">
              {`0`}
            </p>
            {/* {(pageNumber < totalPages - 1 && ( */}
              <Link
                href={`/blog/1`}
                className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            {/* )) || ( */}
              {/* <p className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </p> */}
            {/* )} */}
          </nav>
        </div>
      </div>
    </>
  );
}
