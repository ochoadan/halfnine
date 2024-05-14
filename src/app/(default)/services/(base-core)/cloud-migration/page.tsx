import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "cloud-migration";

export const metadata: Metadata = {
  title: `Cloud Migration Services • Halfnine`,
  description: ``,
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
        heading="Cloud Migration Services"
        subtext={`Transfer to and From With Ease`}
        description="Our team can assist with data and application transfers between different clouds or on-premises environments."
        imgSrc="/img/index/cloudhero.svg"
        imgAlt=""
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Cloud Migration Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Cloud Migration Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Cloud Migration Ecosystem"
        description="The cloud migration ecosystem encompasses a comprehensive network of services, strategies, and technologies designed to facilitate the seamless transition of business operations to the cloud. This ecosystem is critical for ensuring that organizations can leverage the full spectrum of benefits offered by cloud computing, including enhanced scalability, flexibility, and security."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
