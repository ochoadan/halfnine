import wpService from "@/lib/wordpress/wp-service";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import { FaArrowLeft } from "react-icons/fa6";

export const revalidate = 1200;

const Page = ({ params }: { params: { categorySlug: string } }) => {
  const category = use(wpService.getCategoriesBySlug(params.categorySlug));

  if (!category || Object.keys(category).length === 0) {
    return notFound();
  }

  const categoryPosts = use(wpService.getPosts({ categories: category[0].id }));

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

  return (
    <>
      {/* <div>{JSON.stringify(categoryPosts)}</div> */}
      {/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {categoryPosts.posts.map((post: any) => (}
        </div> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 my-8">
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
          {categoryPosts.posts.map((post: any) => (
            <div
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <Link href={`/blog/posts/${post.slug}`}>
                <div className="relative w-full">
                  <Image
                    src={
                      post.mediaData.media_details.sizes.medium_large.source_url.toString() ||
                      "https://via.placeholder.com/640x360"
                    }
                    width={640}
                    height={360}
                    alt={post.mediaData.alt_text as string}
                    // alt={"Image for " + post.title.rendered}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col space-y-5">
                  <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 line-clamp-2">
                    {post.title.rendered}
                  </h2>
                  <span className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                    {post.description as React.ReactNode}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Page;
