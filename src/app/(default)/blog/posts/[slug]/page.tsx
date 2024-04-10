import { use } from "react";
import { notFound } from "next/navigation";

import wpService from "@/lib/wordpress/wp-service";
import { Metadata } from "next";

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
    description: post.excerpt.raw,
    alternates: { canonical: `https://www.halfnine.com/blog/posts/${params.slug}` },
  };
}

function PostPage({ params }: PostPageParams) {
  const post = use(getPostBySlug(params.slug));

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 my-8 prose prose-neutral prose-lg">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-semibold">{post.title.rendered}</h1>
          <h2 className="text-xl font-semibold">{post.excerpt.raw}</h2>
        </div>

        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>
    </div>
  );
}

export default PostPage;

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

// export async function generateStaticParams() {
//     const { posts } = await wpService.getPosts({
//       per_page: 100,
//     });

//     return posts.map((post) => ({
//       slug: post.slug,
//     }));
//   }
