import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "support";

export const metadata: Metadata = {
  title: `Managed IT Support Services • Halfnine`,
  description: `Our Managed IT Support Services provide resilient support to businesses, ensuring that their IT infrastructure remains secure and operational.`,
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
        heading="Managed IT Support Services"
        subtext="Stop Getting Stuck in IT Problems"
        description="Our Managed IT Support Services provide resilient support to businesses, ensuring that their IT infrastructure remains secure and operational."
        imgSrc="/img/index/supporting.svg"
        imgAlt="Woman showing other woman how to use a solution"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Managed IT Support Services"
        description="Managed IT support services offer a plethora of advantages that can significantly enhance the operational efficiency of businesses. These services not only provide robust security measures but also streamline business processes, making them more efficient and competent. By entrusting IT infrastructure to managed service providers, businesses can allocate their resources and time to other critical operations, thereby improving overall productivity."
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Managed IT Support Services"
        description="Managed IT support services are essential for modern businesses to maintain efficiency and security in their operations. Here are six critical services provided by Managed Service Providers (MSPs):"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Managed IT Support Services Ecosystem"
        description="The Managed IT Support Services Ecosystem encompasses a comprehensive array of services designed to cater to the diverse needs of businesses. This ecosystem is built on the foundation of ensuring operational excellence and security while providing scalable solutions to accommodate growth and changes within the business environment. Here, we delve into the core components and their roles within the ecosystem:"
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
