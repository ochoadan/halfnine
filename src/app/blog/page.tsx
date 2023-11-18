import getAllMarkdownFiles from '@/markdoc/pages.mjs'
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Halfnine - Blog",
    description: "Information for the technology of your business.",
    alternates: { canonical: "https://www.halfnine.com/blog" },
};

function MarkdownPage() {
    const data = getAllMarkdownFiles();

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-24">
            <ul
                role="list"
                className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
            >
                {data.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url} className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MarkdownPage;



// import withSearch from '@/markdoc/pages.mjs'

// function MarkdownPage() {
//     const data = withSearch();

//     return (
//         <div>
//             {data.map((item, index) => (
//                 <div key={index}>
//                     <h2>{item.url}</h2>
//                     <h3>{item.sections}</h3>
//                     {/* <ul>
//                         {item.sections.map((section: any, index: any) => (
//                             <li key={index}>
//                                 <h3>{section[0]}</h3>
//                                 <div dangerouslySetInnerHTML={{ __html: section[1] }} />
//                             </li>
//                         ))}
//                     </ul> */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default MarkdownPage;
