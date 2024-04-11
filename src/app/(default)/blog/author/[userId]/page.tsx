import wpService from "@/lib/wordpress/wp-service";
import { notFound } from "next/navigation";

// async function getStaticPaths() {
//   const { author } = await wpService.getAuthor();
//   const paths = author.map((author) => ({
//     params: { userId: author.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// interface AuthorPageParams {
//   params: {
//     userId: string;
//   };
// }

// const Page = async ({ params }: AuthorPageParams) => {
//   // const author = await wpService.getAuthorBySlug(params.userId);

//   // if (author.string !== params.userId) {
//   //   return notFound();
//   // }
//   // if author.string
//   // if ((author.data as { status: number })?.status === 404) {
//   //   return notFound();
//   // }

//   return (
//     <>
//       <div>{JSON.stringify(author)}</div>
//     </>
//   );
// };

// export default Page;

const Page = () => {
  return (
    <div>
      Enter
    </div>
  );
}

export default Page;