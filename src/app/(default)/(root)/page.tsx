import React from "react";
import { Metadata } from "next";

import RootHero from "./hero";
import RootStats from "./stats";
import RootFeature from "./feature";
import RootDevProcess from "./devprocess";
import RootFeatureGrid from "./featuregrid";
import RootOffer from "./offer";
import RootOffering from "./offering";
import RootFAQ from "./faq";
import RootServices from "./services";

export const metadata: Metadata = {
  title: "Full-Service Technology Solutions, Development & Consulting - Halfnine",
  description:
    "Unlock future potential with our digital solutions. Experience efficiency, cost-effectiveness, speed, and innovation with us.",
  alternates: { canonical: "https://www.halfnine.com" },
};

const Page = () => (
  <>
    <RootHero />
    {[
      RootServices,
      RootOffer,
      RootOffering,
      RootStats,
      RootFeature,
      RootDevProcess,
      RootFeatureGrid,
      RootFAQ,
    ].map((Component, index) => (
      <div
        key={index}
        className={`${
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        } py-14 md:py-28`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
