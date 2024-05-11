import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "it-outsourcing";

export const metadata: Metadata = {
  title: `IT Outsourcing Services • Halfnine`,
  description: `Let Halfnine take care of your IT needs through our IT outsourcing services. We provide a range of services to help you focus on your business.`,
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
        heading="IT Outsourcing Services"
        subtext={`Let Halfnine take care of "IT"`}
        description="Let Halfnine take care of your IT needs through our IT outsourcing services. We provide a range of services to help you focus on your business."
        imgSrc="/img/index/remote-working.svg"
        imgAlt=""
      />
      <SolutionCheckListEven
        background="gray"
        heading="Types of IT Outsourcing"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Benefits of IT Outsourcing"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="IT Outsourcing as a Solution"
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
