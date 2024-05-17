import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "mvp";

export const metadata: Metadata = {
  title: `MVP Development Services • Halfnine`,
  description: `Develop your MVP with us. We provide MVP development services to help you build your product quickly and efficiently.`,
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
        heading="Minimum Viable Product Development Services"
        subtext="Develop your MVP with us"
        description="We provide MVP development services to help you build your product quickly and made to scale."
        imgSrc="/img/index/creation-process.svg"
        imgAlt="User placing an element on a board"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Custom MVP Development Services"
        description=""
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key MVP Development Services"
        description=""
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The MVP Development Services Ecosystem"
        description=""
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
