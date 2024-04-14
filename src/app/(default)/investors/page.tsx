import ContactForm from "@/components/Global/ContactForm";
import { FadeIn } from "@/components/Global/FadeIn";
import PageHero from "@/components/Global/PageHero";
import { CheckIcon } from "@heroicons/react/24/outline";

import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Investors",
  description:
    "The tech industry is still growing and evolving, most companies are overvalued. Investing in the markets is a gamble. Don't gamble in tech anymore. Invest in responsible strategies that deliver results",
  alternates: { canonical: "https://www.halfnine.com/investors" },
};

const features = [
  {
    name: "Divirsified Portfolio",
    description:
      "We don't put all our eggs in one basket. We invest in a variety of digital assets to minimize risk and maximize returns.",
  },
  {
    name: "Industry Expertise",
    description:
      "We constantly research digital assets and the tech industry to make informed decisions.",
  },
  {
    name: "Risk Management",
    description:
      "We invest in the right assets and manage the risk to ensure the best possible returns.",
  },
  {
    name: "Due Diligence",
    description:
      "We do the research and analysis to ensure the investment is worth it.",
  },
  //   {
  //     name: "Growth Strategy",
  //     description:
  //       "We have a plan to grow the value of the investment and ensure a return.",
  //   },
  //   {
  //     name: "Profitable Assets",
  //     description:
  //       "We acquire digital assets that are already generating revenue and value, but are struggling to grow or compete in the market, or not reaching their full potential. We then optimize and scale them to increase their value.",
  //   }
  //   {
  //     name: "Legal Compliance",
  //     description:
  //       "We ensure that the investment is follows and complies with all regulations.",
  //   },
  //   {
  //     name: "Reporting",
  //     description:
  //       "We provide regular reports on the performance of your investment.",
  //   },
];
const Page = () => {
  return (
    <>
      <PageHero
        heading="Want to invest in tech?"
        // description="Don't gamble in tech anymore. Invest in responsible strategies that deliver results."
        description="Invest with us for a responsible strategy that delivers results."
        // description="Invest in our acquisitions, we manage the investment and you simply watch the returns."
      />
      {/* Its like making passive income, we manage the investment and you simply watch the returns. */}
      <div className="overflow-hidden bg-white py-14 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            {" "}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {/* {`"It's like making passive income"`} */}
                {/* "It's like making passive income" - Mark Jennings */}
                What <span className="uppercase text-brand-600">are</span> you
                investing in?
                <hr className="border-brand-600 opacity-90 border-b-[2px] w-20 my-2" />
              </h2>
              <p className="mt-6 text-gray-500">
                {/* <p className="text-lg leading-8 text-gray-700"> */}
                {`We acquire struggling digital assets, revamp operations and marketing to boost their worth. Existing profits guarantee ROI, even if growth targets aren't achieved.`}
                <br />
                {`We handle your investment, allowing you to enjoy the returns stress-free. While engagement is encouraged, it's optional. Rest assured, you'll always have access to detailed financial information.`}
                {/* We acquire underperforming digital assets, rebuild operations and
              marketing to grow value. While the asset&apos;s existing profits
              ensure ROI, even if growth goals aren&apos;t met.
              <br />
              <br />
              We manage your investment, and you simply watch the returns,
              Engagement is recommended but not required, while you always have
              access to the information of where your money is going.*/}
              </p>
            </div>
            {/* <FadeIn className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 group"> */}
            <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-2xl bg-gray-100 group">
              <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-[1.02]">
                <Image
                  src="https://images.pexels.com/photos/3943714/pexels-photo-3943714.jpeg"
                  alt="Cover Image"
                  className="object-cover object-center"
                  width={655}
                  height={655}
                />
              </g>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 mx-auto max-w-2xl lg:max-w-none">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                "Its like making passive income"
                                <hr className="border-brand-600 opacity-90 border-b-[2px] w-20 my-2" />
                            </h2>
                            <p className="mt-4 text-gray-500">
                            We manage your investment and you simply watch the returns, Engagement is not requiered while you always have access to the information of where your money is going.
                            </p>
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 group">
                            <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-[1.03]">
                                <Image
                                    src="/img/about/pexels-mizuno-k-12902918-min.jpg"
                                    alt="Businesswomen Looking at a Document Folder"
                                    className="object-cover object-center"
                                    fill
                                />
                            </g>
                        </div>
                    </div> */}
        </div>
      </div>
      <div className="bg-gray-50 py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Market Overview</span>
            <hr className="border-brand-600 opacity-90 border-b-[2px] w-24 my-2" />
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            The tech industry is still growing and evolving, most companies are
            overvalued. Investing in the markets is a gamble.
            {/* The tech industry is a high-risk, high-reward environment. We understand the challenges of investing in software development. Our team is dedicated to delivering the best possible results for your investment */}
          </p>
          <div className="pt-6 mx-auto grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:gap-x-16 xl:col-span-2">
            <div>
              <Image
                width={900}
                height={600}
                className="aspect-[3/2] w-full rounded-2xl object-cover border-gray-200 border-2"
                src="/img/index/investors1.jpg"
                alt="Infographic for Investors"
              />
              <p className="pt-1 text-base leading-7 text-gray-600 text-center">
                Immersive technology is growing, but investing in the wrong
                company will lead to significant losses.
                {/* These are not the investments we work with. */}
                {/* Immersive technology is growing but investing in the wrong company will lead to losses. These are not the investments we are looking for.  */}
              </p>
            </div>
            <div>
              <Image
                width={900}
                height={600}
                className="aspect-[3/2] w-full rounded-2xl object-cover border-gray-200 border-2"
                src="/img/index/investors2.jpg"
                alt="as string"
              />
              {/* <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={"https://images.pexels.com/photos/20109536/pexels-photo-20109536/free-photo-of-a-person-holding-a-heart-shaped-snow-ball-in-their-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="" /> */}
              <p className="pt-1 text-base leading-7 text-gray-600 text-center">
                Growth is expected, but the market is overvalued with people
                investing in the future or the next big thing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-50 py-14 md:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-extrabold">
                        Its like making passive income
                    </h1>
                    <hr className="border-brand-600 opacity-90 border-b-[2px] mx-auto w-40 my-2" />
                    <p className="text-xl sm:text-2xl md:text-3xl text-center font-extrabold mt-2">
                        We manage the investment and you simply watch the returns.
                    </p>
                </div>
            </div> */}
      <div className="bg-white py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* <div className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-3">
            <div>
              {/* <h2 className="text-base font-semibold leading-7 text-brand-600">
                <span className="block">Invest in digital assets</span>
              </h2> */}
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Checking all the boxes
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                We take care of the main concerns of investing in digital
                assets. We diversify our portfolio, manage risk, and ensure that
                the investment is worth it.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <CheckIcon
                      className="absolute left-0 top-1 h-5 w-5 text-brand-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* <div className="bg-white py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-center">
            So what <span className="uppercase text-brand-600">are</span> you
            investing in?
            <hr className="border-brand-600 opacity-90 border-b-[2px] w-36 my-4 lg:mx-auto" />
          </h2>
          <p className="text-lg leading-7 text-gray-600 lg:text-center lg:max-w-3xl lg:mx-auto">
            We acquire underperforming digital assets, rebuild operations and
            marketing to grow value. While the asset&apos;s existing profits ensure
            ROI, even if growth goals aren&apos;t met. */}
      {/* We acquire underperforming digital assets, optimizing operations and marketing to boost value. Existing profits secure ROI, even if growth goals aren't met. */}
      {/* We acquire underperforming digital assets with challenges or room to grow, while rebuilding their operations and marketing to increase their value. If we don't meet our growth goals, the asset's existing profits ensure a return on investment. */}
      {/* We acquire underperforming digital assets with challanges or room to grow, while rebuilding their operations and marketing to grow their value. If we don't meet our growth goals, the asset's existing profits ensure a return on investment. */}
      {/* {`We acquire profitable digital assets facing challenges or room to grow, then boost operations and marketing. Existing profits guarantee ROI even if growth goals aren't met.`} */}
      {/* We acquire profitable digital assets with growth challenges or untapped potential. Then, we optimize their operations and improve marketing strategies. If we don't meet our growth goals, our existing profits ensure a return on investment. */}
      {/* We acquire profitable digital assets with growth challenges or untapped potential. Then, we enhance, update, and revitalize them. If we don't meet our goals, our existing profits ensure a return on investment. */}
      {/* We buy profitable digital assets with growth hurdles or untapped potential. We optimize, modernize, and revitalize them, and if results fall short, existing profits secure ROI. */}
      {/* We acquire digital assets that are already generating profits but face challenges in growth or competition, or aren't realizing their full potential. We enhance these assets, and if improvement efforts don't yield results, the existing profit generated is sufficient to ensure a return on investment. */}
      {/* We acquire digital assets that are already generating revenue but face challenges in growth or competition, or aren't realizing their full potential. We enhance and expand them to boost their value further. */}
      {/* We acquire digital assets that are already generating revenue and value, but are struggling to grow or compete in the market, or not reaching their full potential. We then optimize and scale them to increase their value. */}
      {/* We acquire digital assets that are already generating revenue. We then optimize and scale them to increase their value. */}
      {/* </p>
        </div>
      </div> */}
      {/* <div className="py-0 sm:pb-32"> */}
      {/* <ContactForm
        title="Fill out to learn more"
        description="We are always looking for investors who share our vision. Let's talk."
      /> */}
      {/* </div> */}
    </>
  );
};

export default Page;
