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
    bgColor: string,
    paddingY: string
  ) => (
    <div className={`bg-${bgColor} ${paddingY}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Component />
      </div>
    </div>
  );

  return (
    <>
      <RootHero />
      {section(RootOffer, "gray-50", "py-16 md:py-32")}
      {section(RootOffering, "white", "py-16 md:py-32")}
      {section(RootDevProcess, "gray-50", "py-16 md:py-32")}
      {section(RootFeature, "white", "py-16 md:py-32")}
      {section(RootStats, "gray-50", "py-16 md:py-32")}
      {section(RootFeatureGrid, "white", "py-16 md:py-32")}
      {section(GlobalFAQ, "gray-50", "py-16 md:py-32")}
      {section(GlobalContactForm, "white", "py-16 md:py-32")}
    </>
  );
};

export default Page;
