import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Market Research Services",
  description:
    "We provide market research services to help you understand your target audience, competitors, and industry trends.",
  alternates: {
    canonical: "https://www.halfnine.com/services/market-research",
  },
};

const Page = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 pt-12 lg:py-24 lg:pt-12">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 mx-auto max-w-2xl lg:max-w-none">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-brand-600">
                  Market research services
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Create a better strategy with data
                </p>
                <p className="mt-6 text-sm leading-6 text-gray-600">
                  World class market research services to help you understand
                  your target audience, competitors, and industry trends.
                </p>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0 mx-auto">
              <Image
                src="/img/hero.svg"
                alt="Product screenshot"
                // className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
