import React from "react";
import GlobalContactForm from "@/components/Global/ContactForm";
import {
  RootHero,
  RootStats,
  RootFeature,
  RootDevProcess,
  RootFeatureGrid,
  RootOffer,
  RootOffering,
  RootFAQ,
  RootServices,
} from "@/components/pages/root";
import { Metadata } from "next";
import { FadeIn } from "@/components/Global/FadeIn";

export const metadata: Metadata = {
  title: "Software Development and Consulting Solutions - Halfnine",
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
