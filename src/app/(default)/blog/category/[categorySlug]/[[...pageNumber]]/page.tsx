import getCategoryData from "@/lib/queries/getCategoryData";
import getAllSlugs from "@/lib/queries/getAllSlugs";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import he from "he";
import sanitizeHtml from "sanitize-html";

export const runtime = 'edge';

export const revalidate = 86400;

const pageLength = 30;

async function fetchCategoryData(categorySlug: string) {
  const response = await getCategoryData(categorySlug);

  return response;
}

export async function generateStaticParams() {
  const response = await getAllSlugs();
  const totalPagesPerCategory = response.categories.edges.map(
    (category: any) => {
      const totalPages = Math.ceil(category.node.count / pageLength);
      return Array.from({ length: totalPages }, (_, index) => ({
        categorySlug: category.node.slug,
        pageNumber: index,
      }));
    }
  );
  const pageNumbers = totalPagesPerCategory
    .flat()
    .map(
      ({
        categorySlug,
        pageNumber,
      }: {
        categorySlug: string;
        pageNumber?: number;
      }) => ({
        categorySlug,
        pageNumber: pageNumber === 0 ? undefined : [String(pageNumber)],
      })
    )
    .map(
      ({
        categorySlug,
        pageNumber,
      }: {
        categorySlug: string;
        pageNumber?: number;
      }) => ({
        categorySlug,
        pageNumber,
      })
    );
  return pageNumbers;
}

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string; pageNumber?: number };
}) {
  const pageNumber = parseInt(String(params.pageNumber)) || 0;
  const data = await fetchCategoryData(params.categorySlug);

  if (
    data.category === null ||
    !data.category ||
    Object.keys(data.category).length === 0
  ) {
    return null;
  }
  return {
    title: `Learn more about ${data.category.name}${
      pageNumber > 0 ? ` category | Page ${pageNumber} ` : ""
    }`,
    description: data.category.description,
    alternates: {
      canonical: `https://www.halfnine.com/blog/category/${data.category.slug}${
        pageNumber > 0 ? `/${pageNumber}` : ""
      }`,
    },
    openGraph: {
      url: `https://www.halfnine.com/blog/category/${data.category.slug}${
        pageNumber > 0 ? `/${pageNumber}` : ""
      }`,
    },
  };
}

const Page = async ({
  params,
}: {
  params: { categorySlug: string; pageNumber?: number };
}) => {
  const data = await fetchCategoryData(params.categorySlug);

  if (
    data.category === null ||
    !data.category ||
    Object.keys(data.category).length === 0
  ) {
    return notFound();
  }

  if (data.category.posts.edges.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-x-1.5 rounded-lg bg-brand-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          <FaArrowLeft className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Back to Blog
        </Link>
        <div className="flex justify-center items-center h-[60vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
            <div className="mx-auto max-w-2xl text-center justify-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.category.name}
              </h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Posts for {data.category.name} are coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const pageNumber = parseInt(String(params.pageNumber)) || 0;

  if (pageNumber === 0 && parseInt(String(params.pageNumber)) === 0) {
    redirect(`/blog/category/${data.category.slug}`);
  }

  const totalPages = Math.ceil(data.category.posts.edges.length / pageLength);

  if (
    (pageNumber !== 0 && isNaN(pageNumber)) ||
    pageNumber < 0 ||
    pageNumber >= totalPages
  ) {
    redirect(`/blog/category/${data.category.slug}`);
  }

  const startIndex = pageNumber * pageLength;
  const endIndex = startIndex + pageLength;
  const paginatedPosts = data.category.posts.edges.slice(startIndex, endIndex);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 my-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-x-1.5 rounded-lg bg-brand-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          <FaArrowLeft className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Back to Blog
        </Link>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn more about {data.category.name}
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {data.category.description}
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-12">
          {paginatedPosts.map((post: any) => (
            <div
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <Link href={`/blog/post/${post.node.slug}`}>
                <div className="relative w-full">
                  <Image
                    src={
                      post?.node.featuredImage?.node.sourceUrl ||
                      "https://via.placeholder.com/640x360"
                    }
                    width={640}
                    height={360}
                    alt={post?.node.featuredImage?.node.altText}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col space-y-5">
                  <h2
                    className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                  />
                  <span className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                    {he.decode(
                      sanitizeHtml(post.node.excerpt.replace(/\n/g, ""), {
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
                href={`/blog/category/${data.category.slug}${
                  pageNumber > 1 ? `/${pageNumber - 1}` : ""
                }`}
                className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            )) || (
              <p className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            )}
            <p className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 select-none">
              {pageNumber}
            </p>
            {(pageNumber < totalPages - 1 && (
              <Link
                href={`/blog/category/${data.category.slug}/${pageNumber + 1}`}
                className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next Page</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            )) || (
              <p className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </p>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Page;
