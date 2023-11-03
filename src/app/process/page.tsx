import BackgroundwImage from "@/components/Global/BackgroundwImage";

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
import Image from "next/image";
import { FadeIn } from "@/components/Global/FadeIn";

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LifeCycle />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Discover />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Define />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Develop />
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 [counter-reset:reversed]">
          <div className="sr-only" />
          <Deliver />
        </div>
      </div>
      <div className="overflow-hidden bg-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="relative overflow-hidden rounded-lg lg:h-96">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1697192715136-23666b08fe04?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="relative h-96 w-full lg:hidden"
            />
            <div
              aria-hidden="true"
              className="relative h-32 w-full lg:hidden"
            />
            {/* <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"> */}
            <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-[450px] lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Identify new growth opportunities.
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Partner with us to unleash your growth potential, elevate your
                  ideas, and maximize your opportunities.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
              >
                About Halfnine
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <GlobalContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
