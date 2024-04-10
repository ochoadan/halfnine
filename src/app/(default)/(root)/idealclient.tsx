import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import Image from "next/image";

const statsData = [
  {
    icon: "/icons/loss-graph-finance.svg",
    title: "Declining Profits",
    description:
      "We Build Turnaround Strategies, Cost Optimization, and Revenue Growth.",
  },
  {
    icon: "/icons/first-pedestal-place.svg",
    title: "Increased Competition",
    description:
      "We make you stand out in a competitive environment with strategic positioning.",
  },
  {
    icon: "/icons/merge.svg",
    title: "Consolidating Markets",
    description:
      "We help you grow faster in a competitive and consolidating market.",
  },
];

const IdealClient = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
    {/* <FadeIn className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        We Deliver Success to the Struggling
      </h2>
    </FadeIn> */}
    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
      {statsData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col p-4 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-brand-500"
        >
          <Image
            src={data.icon}
            alt={data.title}
            className="h-50 w-50 mx-auto"
            width={50}
            height={50}
          />
          {/* <data.icon
            className="h-5 w-5 text-brand-500 mx-auto"
            aria-hidden="true"
          /> */}
          <dl className="space-y-2">
            <dt className="text-lg font-bold text-black text-center">
              {data.title}
            </dt>
            <dd className="text-base text-gray-700 text-center">
              {data.description}
            </dd>
          </dl>
        </div>
      ))}
    </div>
  </div>
);

export default IdealClient;
