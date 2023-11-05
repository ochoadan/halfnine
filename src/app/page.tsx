import React from "react";
import GlobalContactForm from "@/components/pages/GlobalContactForm";
import GlobalFAQ from "@/components/pages/GlobalFAQ";
import {
  RootHero,
  RootStats,
  RootFeature,
  RootDevProcess,
  RootFeatureGrid,
  RootOffer,
  RootOffering,
} from "@/components/pages/root";

const Page = () => {
  const section = (
    Component: React.ComponentType,
    bgColor: string
    // paddingTop: string
  ) => (
    <div className={`bg-${bgColor} py-16 md:py-28`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Component />
      </div>
    </div>
  );

  return (
    <>
      <RootHero />
      {section(RootStats, "gray-50")}
      {section(RootFeature, "white")}
      {section(RootDevProcess, "gray-50")}
      {section(RootFeatureGrid, "white")}
      {section(GlobalFAQ, "gray-50")}
      {section(GlobalContactForm, "white")}
    </>
  );
};

export default Page;
