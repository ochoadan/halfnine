import PageHero from "@/components/Global/PageHero";
import { RootOffering } from "../(root)";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services • Halfnine",
  description:
    "Halfnine is a software development company that delivers full-service solutions to businesses. Contact us to learn more about how we can help you grow",
  alternates: { canonical: "https://www.halfnine.com/services" },
};

const Page = () => {
  return (
    <>
      <PageHero
        heading="Software Development Services"
        description="Full-Service Software Development and Consulting Solutions"
      />
      {[RootOffering].map((Component, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          } py-12 md:py-24`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Component />
          </div>
        </div>
      ))}
    </>
  );
};

export default Page;
