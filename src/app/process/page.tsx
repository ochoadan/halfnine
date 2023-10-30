import BackgroundwImage from "@/components/layout/background-image";

import Link from "next/link";
import {
  Discover,
  Define,
  Develop,
  Deliver,
} from "@/components/pages/process/01";
import LifeCycle from "@/components/pages/process/lifecycle";
import { Metadata } from "next";
import GlobalFAQ from "@/components/pages/GlobalFAQ";
import GlobalContactForm from "@/components/pages/GlobalContactForm";

export const metadata: Metadata = {
  title:
    "Halfnine's Approach: Leveraging Technology for Problem-Solution Lifecycle",
  description:
    "Learn how we utilize technology to solve problems effectively. Discover our comprehensive Development Lifecycle.",
  alternates: {
    canonical: "https://www.halfnine.com/process",
  },
};

const Page = () => {
  return (
    <>
      <BackgroundwImage
        heading="The Halfnine Development Lifecycle"
        description="Here we explain how we leverage technology from problem to solution"
      />
      <div className="overflow-hidden bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <LifeCycle />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <Discover />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Define />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <Develop />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Deliver />
        </div>
      </div>
      {/* <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <GlobalFAQ />
        </div>
      </div> */}
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-28">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <GlobalContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
