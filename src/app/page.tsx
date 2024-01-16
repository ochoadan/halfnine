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
  RootFAQ
} from "@/components/pages/root";
import { Metadata } from "next";

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
      RootOffer,
      RootOffering,
      RootDevProcess,
      RootFeature,
      RootStats,
      RootFeatureGrid,
      RootFAQ,
    ].map((Component, index) => (
      <div
        key={index}
        className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} py-16 md:py-32`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Component />
        </div>
      </div>
    ))}
    <GlobalContactForm />
  </>
);

export default Page;
