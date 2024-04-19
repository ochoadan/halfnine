import wpService from "@/lib/wordpress/wp-service";
import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { use } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import he from "he";

export const revalidate = 3600;

export async function generateStaticParams() {
  const categories = await wpService.getCategories();
  return categories.map((category: { slug: any }) => ({
    params: { categorySlug: category.slug },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string; pageNumber?: number };
}) {
  const pageNumber = parseInt(String(params.pageNumber)) || 0;
  const category = await wpService.getCategoriesBySlug(params.categorySlug);
  return {
    title: `Learn more about ${category[0].name}${
      pageNumber > 0 ? ` category | Page ${pageNumber} ` : ""
    }`,
    description: category[0].description,
    alternates: {
      canonical: `https://www.halfnine.com/blog/category/${category[0].slug}${
        pageNumber > 0 ? `/${pageNumber}` : ""
      }`,
    },
  };
}

const Page = ({
  params,
}: {
  params: { categorySlug: string; pageNumber?: number };
}) => {
  const category = use(wpService.getCategoriesBySlug(params.categorySlug));

  if (!category || Object.keys(category).length === 0) {
    return notFound();
  }

  const categoryPosts = use(
    wpService.getPosts({ categories: category[0].id, per_page: 100 })
  );

  if (categoryPosts.totalPages === 0) {
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
                {category[0].name}
              </h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Posts for {category[0].name} are coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const pageNumber = parseInt(String(params.pageNumber)) || 0;

  const totalPages = Math.ceil(categoryPosts.posts.length / 12);

  if (
    (pageNumber !== 0 && isNaN(pageNumber)) ||
    pageNumber < 0 ||
    pageNumber >= totalPages
  ) {
    redirect(`/blog/category/${category[0].slug}`);
  }

  const startIndex = pageNumber * 12;
  const endIndex = startIndex + 12;
  const paginatedPosts = categoryPosts.posts.slice(startIndex, endIndex);

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
            Learn more about {category[0].name}
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {category[0].description}
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-12">
          {paginatedPosts.map((post: any) => (
            <div
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <Link href={`/blog/post/${post.slug}`}>
                <div className="relative w-full">
                  <Image
                    src={
                      post.mediaData.media_details.sizes.medium_large.source_url.toString() ||
                      "https://via.placeholder.com/640x360"
                    }
                    width={640}
                    height={360}
                    alt={post.mediaData.alt_text as string}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col space-y-5">
                  <h2
                    className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <span className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                    {he.decode(post.description as string)}
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
                href={`/blog/category/${category[0].slug}${
                  pageNumber > 1 ? `/${pageNumber - 1}` : ""
                }`}
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
                href={`/blog/category/${category[0].slug}/${pageNumber + 1}`}
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
      {/* <Pagination
        currentPage={categoryPosts.currentPage}
        totalPages={categoryPosts.totalPages}
      /> */}
    </>
  );
};

export default Page;

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
//   return (
//     <nav
//       className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//       aria-label="Pagination"
//     >
//       {currentPage > 0 ? (
//         <Link
//           href={`/blog${currentPage > 1 ? `/${currentPage - 1}` : ""}`}
//           className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//         >
//           <span className="sr-only">Previous Page</span>
//           <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//         </Link>
//       ) : (
//         <p className="relative inline-flex items-center rounded-l-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
//           <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//         </p>
//       )}

//       <p className="relative inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 select-none">
//         {currentPage}
//       </p>

//       {currentPage < totalPages - 1 ? (
//         <Link
//           href={`/blog/${currentPage + 1}`}
//           className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//         >
//           <span className="sr-only">Next Page</span>
//           <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//         </Link>
//       ) : (
//         <p className="relative inline-flex items-center rounded-r-md px-3 py-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 select-none cursor-not-allowed">
//           <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//         </p>
//       )}
//     </nav>
//   );
// };
