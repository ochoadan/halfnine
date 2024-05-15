import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "oracle/database";

export const metadata: Metadata = {
  title: `Oracle Managed Database Consulting Services`,
  description: `Let us handle your Oracle database so you can focus on your applications and business.`,
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
        heading="Oracle Managed Database Consulting Services"
        subtext="Worry-Free Oracle Database"
        description="Let us handle your Oracle database so you can focus on your applications and business."
        imgSrc="/img/index/onservers.svg"
        imgAlt="Man deploying a solution on servers"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits Oracle Managed Database Consulting Services"
        description="Oracle Managed Database Consulting Services deliver significant advantages to organizations by enhancing operational efficiency and reducing costs. Here’s a detailed look at the key benefits:"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Features of Oracle Managed Database Consulting Services"
        description="Oracle Managed Database Consulting Services are designed to streamline and enhance database management through a comprehensive suite of offerings. Here are the key features that distinguish these services:"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="Benefits and Value Addition to Your Business"
        description="Oracle Managed Database Consulting Services provide a robust array of benefits and value additions that directly address the unique challenges, needs, and goals of various businesses. Here’s a detailed analysis of how these services enhance business operations:"
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
