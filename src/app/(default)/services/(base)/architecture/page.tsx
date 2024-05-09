import CustomHero from "@/components/services/CustomHero";
import { Metadata } from "next";

const slug = "architecture";

export const metadata: Metadata = {
  title: `Enterprise Architecture Consulting Company`,
  description: `Find the right solution for your business by creating a blueprint that outlines the features and functionalities that will help you achieve your goals.`,
  alternates: {
    canonical: `https://www.halfnine.com/services/${slug}`,
  },
  openGraph: {
    url: `https://www.halfnine.com/services/${slug}`,
  },
};

const Page = () => {
  return (
    <>
      <CustomHero
        heading="Enterprise Architecture Consulting Company"
        subtext="Blueprint your ideal solution"
        description="Find the right solution for your business by creating a blueprint that outlines the features and functionalities that will help you achieve your goals."
        imgSrc="/img/index/scalemodel.svg"
        imgAlt="Woman showing a scale model of a building"
      />
    </>
  );
};

export default Page;
