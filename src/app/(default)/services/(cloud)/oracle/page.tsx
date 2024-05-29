import CustomHero from "@/components/Global/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "oracle";

export const metadata: Metadata = {
  title: `Oracle Cloud Services • Halfnine`,
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
        heading="Oracle Cloud Services"
        subtext="Unleash Cloud Power Your Way"
        description="Oracle Cloud Infrastructure combines the elasticity and utility of public cloud with the granular control, security, and predictability of on-premises infrastructure."
        imgSrc="/img/services/oracle.svg"
        imgAlt="Man Touching Clouds with Oracle Icon in the Middle"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Oracle Cloud Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Oracle Cloud Services"
        description="Oracle Cloud Infrastructure (OCI) offers a comprehensive suite of services designed to cater to various IT needs, from legacy enterprise workloads to cutting-edge cloud-native applications and data platforms. Here are six key services provided by OCI:"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Oracle Cloud Services Ecosystem"
        description="The Oracle Cloud Services Ecosystem is a robust platform designed to support a wide range of business needs through its comprehensive suite of services. It integrates seamlessly with both on-premises and cloud-based applications, facilitating a smooth transition to the cloud while enhancing the ability to manage multicloud environments effectively."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
