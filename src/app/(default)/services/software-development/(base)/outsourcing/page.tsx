import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "software-development/outsourcing";

export const metadata: Metadata = {
  title: `Software Development Outsourcing Services • Halfnine`,
  description: `r team of experts can help you with software development your software development needs.`,
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
        heading="Software Development Outsourcing Services"
        subtext={`Focus on your core business`}
        description="Our team of experts can help you with software development your software development needs."
        imgSrc="/img/index/remote-working.svg"
        imgAlt="Woman working on a laptop in a remote location."
      />
      <SolutionCheckListEven
        background="gray"
        heading="Understanding the Outsourcing Models"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Benefits of Software Development Outsourcing"
        features={Data2}
        noContact
      />
      <SolutionBaseListOnce
        background="gray"
        heading="Succesful Strategies for Outsourcing Software Development"
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
