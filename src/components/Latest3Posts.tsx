import getLast3Posts from "@/lib/queries/getLast3Posts";
import Link from "next/link";
import Image from "next/image";
import he from "he";
import sanitizeHtml from "sanitize-html";

export const revalidate = 60 * 30;

const Latest3Posts = async () => {
  const response = await getLast3Posts();
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {response.map((post: any) => (
        <div
          key={post.id}
          className="flex flex-col items-start justify-between"
        >
          <Link href={`/blog/post/${post.slug}`}>
            <div className="relative w-full">
              <Image
                src={
                  post.featuredImage.node.sourceUrl ||
                  "https://via.placeholder.com/640x360"
                }
                width={640}
                height={360}
                alt={post.featuredImage.node.altText}
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
  );
};

export default Latest3Posts;
