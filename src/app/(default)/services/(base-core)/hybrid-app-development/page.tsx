import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "hybrid-app-development";

export const metadata: Metadata = {
  title: `Hybrid App Development Services • Halfnine`,
  description: `Develop your hybrid app with us. We provide hybrid app development services to help you build your app with the best technology.`,
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
        heading="Hybrid App Development Services"
        subtext="Android and iOS in a Single App"
        description="No need for complex and divided codebases. Our hybrid app development services help you build a single app that works on both platforms, saving time and resources."
        imgSrc="/img/index/sync.svg"
        imgAlt="users holding a phone and a tablet, with a checkmark icon in the middle of each device screen"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Hybrid App Development Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Hybrid App Development Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Hybrid App Development Services Ecosystem"
        description="The Hybrid App Development Services Ecosystem is a comprehensive suite of solutions and frameworks designed to meet the diverse needs of businesses looking to deploy applications across multiple platforms. This ecosystem leverages advanced web technologies and integrates them within native app shells, enabling the creation of applications that perform seamlessly across different operating systems and utilize native device features."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
