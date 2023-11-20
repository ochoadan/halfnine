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
            <h1 className="text-3xl font-bold mb-6">
                Blog Posts
                <hr className="border-sky-600 opacity-90 border-b-[2px] w-12 my-2" />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((item, index) => (
                    <Link key={index} href={item.url} className="relative flex justify-between gap-x-6 px-4 py-4 hover:bg-gray-50 sm:px-6 ring-1 ring-gray-900/10 rounded-2xl">
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MarkdownPage;