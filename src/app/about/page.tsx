import BackgroundwImage from "@/components/Global/BackgroundwImage";
import { Metadata } from "next";
import {
  AboutFirst,
  AboutSecond,
  AboutThird,
  AboutLast,
} from "@/components/pages/about";
import GlobalContactForm from "@/components/pages/GlobalContactForm";

export const metadata: Metadata = {
  title: "Halfnine - The Software Developers & Designers at Halfnine",
  description:
    "Learn more about Halfnine in Central Florida. We're a crew of software developers, UX designers, project navigators and opportunity explorers.",
  alternates: {
    canonical: "https://www.halfnine.com/about",
  },
};

const Page = () => {
  return (
    <>
      <BackgroundwImage
        heading="About Halfnine"
        description="Our Highest Commitment is Our Customer's Success"
        // description="Committed to driving change through exceptional experiences"
      />
      {/* <div className="overflow-hidden bg-white py-16 sm:py-28"> */}
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
      <div className="overflow-hidden bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AboutFirst />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AboutSecond />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AboutThird />
        </div>
      </div>
      <AboutLast />
      <div className="overflow-hidden bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GlobalContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
