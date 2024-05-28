import React from "react";
import { Metadata } from "next";

import RootHero from "./hero";
import RootStats from "./stats";
import RootFeature from "./feature";
import RootDevProcess from "./devprocess";
import RootFeatureGrid from "./featuregrid";
import IdealClient from "./idealclient";
import RootMisc from "./misc";
import RootOffering from "./offering";
import RootFAQ from "./faq";
import RootServices from "./services";
import ContactForm from "@/components/Global/ContactForm";
import { FadeIn, FadeInStagger } from "@/components/Global/FadeIn";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Technology Company Restructuring and Turnaround Services",
//   description:
//     "We help you stand out if you are experiencing the effects of a declining sales, increased competition, or consolidating markets. We deliver success to the struggling.",
//   alternates: { canonical: "https://www.halfnine.com" },
// };

const Page = () => (
  <>
    <RootHero />
    {/* <div className="lg:pb-12 max-w-7xl mx-auto px-6 lg:px-8">
      <RootClientLogoCloud />
    </div> */}
    {[
      RootServices,
      // RootMisc,
      IdealClient,
      <RootOffering gridView={true} key="offering" />,
      // RootStats,
      // RootFeatureGrid,
      RootDevProcess,
      // RootFeature,
      <RootFAQ key="faq" />,
      <ContactForm key="contact" />,
    ].map((Component, index) => (
      <div
        key={index}
        className={`${
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        } py-12 md:py-24`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {typeof Component === "function" ? <Component /> : Component}
        </div>
      </div>
    ))}
    {/* <ContactForm addPadding /> */}
  </>
);

export default Page;

function RootClientLogoCloud() {
  return (
    <FadeInStagger>
      <FadeIn className="mb-6 flex justify-center">
        <p className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10">
          Who uses our software?
        </p>
      </FadeIn>
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <FadeIn className="col-span-2 max-h-12 w-full lg:col-span-1">
          <Image
            className="w-full max-h-10 object-contain"
            src="/img/svg/luxuryportfolio.svg"
            alt="luxuryportfolio"
            width={158}
            height={48}
          />
        </FadeIn>
        <FadeIn className="col-span-2 lg:col-span-1">
          <Image
            // className="w-full max-h-12"
            className="w-full max-h-16 object-contain"
            src="/img/svg/leadingre.svg"
            alt="LeadingRE"
            width={158}
            height={48}
          />
        </FadeIn>
        <FadeIn className="col-span-2 lg:col-span-1">
          <Image
            className="w-full max-h-12 object-contain"
            src="/img/svg/qpay.svg"
            alt="QueuePay"
            width={158}
            height={48}
          />
        </FadeIn>
        <FadeIn className="col-span-2 sm:col-start-2 lg:col-span-1">
          <Image
            className="max-h-8 w-full object-contain"
            src="/img/svg/bitscan.svg"
            alt="Bitscan"
            width={158}
            height={48}
          />
        </FadeIn>
        <FadeIn className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1">
          <Image
            className="max-h-10 w-full object-contain"
            src="/img/svg/temper.svg"
            alt="Temper Works"
            width={158}
            height={48}
          />
        </FadeIn>
      </div>
    </FadeInStagger>
  );
}
