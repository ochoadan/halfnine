import React from "react";
import { Metadata } from "next";

import RootHero from "./hero";
import RootOffer from "./offer";
import RootStats from "./stats";
import RootFeature from "./feature";
import RootDevProcess from "./devprocess";
import RootFeatureGrid from "./featuregrid";
import IdealClient from "./idealclient";
import RootMisc from "./misc";
import RootOffering from "./offering";
import RootFAQ from "./faq";
import RootServices from "./services";
import RootClientLogoCloud from "./logocloud";

export const metadata: Metadata = {
  title: "Technology Company Restructuring and Turnaround Services - Halfnine",
  description:
    "We help you stand out if you are experiencing the effects of a declining sales, increased competition, or consolidating markets. We deliver success to the struggling.",
  alternates: { canonical: "https://www.halfnine.com" },
};

const Page = () => (
  <>
    <div className="py-12 md:py-24">
      <RootHero />
      <IdealClient />
    </div>
    {[
      // RootClientLogoCloud,
      RootOffer,
      RootMisc,
      // RootServices,
      // RootOffering,
      // RootStats,
      // RootFeature,
      // RootDevProcess,
      // RootFeatureGrid,
      RootFAQ,
    ].map((Component, index) => (
      <div
        key={index}
        className={`${
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        } py-12 md:py-24`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Component />
        </div>
      </div>
    ))}
    {/* <FadeIn>
      <GlobalContactForm paddingBottom />
    </FadeIn> */}
  </>
);

export default Page;
