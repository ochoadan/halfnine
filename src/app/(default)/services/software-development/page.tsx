import PageHero from "@/components/Global/PageHero";
import { RootOffering } from "../../(root)";
import { Metadata } from "next";
import CustomHero from "@/components/services/CustomHero";

export const metadata: Metadata = {
  title: "Software Development Services • Halfnine",
  description:
    "Halfnine is a software development company that delivers full-service solutions to businesses. Contact us to learn more about how we can help you grow",
  alternates: { canonical: "https://www.halfnine.com/services/software-development" },
  openGraph: {
    url: "https://www.halfnine.com/services/software-development",
  },
};

const Page = () => {
  return (
    <>
      <CustomHero
        heading="Software Development Services"
        subtext="Let's build something great together."
        description="Our team is ready and excited to help you build the software you need to grow your business. We offer full-service software development solutions that are tailored to your unique needs."
        imgSrc="/img/index/developer.svg"
        imgAlt="software developer working on a laptop"
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
