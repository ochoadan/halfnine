import Image from "next/image";
import Link from "next/link";

const statsData = [
  {
    icon: "/icons/loss-graph-finance.svg",
    title: "Declining Profits",
    description:
      "We Leverage Sales and Marketing Automation and Improve Customer Experience to Reduce Churn and Increase Sales",
  },
  {
    icon: "/icons/first-pedestal-place.svg",
    title: "Increased Competition",
    description:
      "We Use Data Analytics and Market Research to Help You Stay Ahead of the Competition and Increase Market Share",
  },
  {
    icon: "/icons/merge.svg",
    title: "Consolidating Markets",
    description:
      "We Help You Identify New Markets and Develop New Products and Services to Increase Revenue and Profitability",
  },
];

const IdealClient = () => (
  <div className="space-y-6">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Facing Challenges? IT Services Can Help!
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        {/* {`Let us help you reverse the effects of declining sales, increased competition, or consolidating markets. We deliver success to the struggling.`} */}
        {/* {`Start Leveraging Technology to Reverse the Effects of Declining Sales, Increased Competition, or Consolidating Markets. We Deliver Success to the Struggling.`} */}
        Leverage Technology to Reverse Negative Trends in Your Business, We Deliver Success to the Struggling
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
      {statsData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col p-4 transition-colors duration-200 rounded-2xl border-2 gap-1 bg-white border-brand-500"
        >
          <Image
            src={data.icon}
            alt={data.title}
            className="h-15 w-15 mx-auto"
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
    <p className="mt-8 text-lg text-gray-600 text-center">
      Let us help you Today!{" "}
      <Link
        href="/contact"
        className="text-brand-600 hover:text-brand-500 hover:underline"
      >
        Contact us
      </Link>
    </p>
  </div>
);

export default IdealClient;
