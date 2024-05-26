import CustomHero from "@/components/Global/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "staff-augmentation";

export const metadata: Metadata = {
  title: `IT Staff Augmentation Services • Halfnine`,
  description: `We provide IT staff augmentation services to help you scale your team and meet your project deadlines. Our staff augmentation services are designed to provide you with the right talent at the right time.`,
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
        heading="IT Staff Augmentation Services"
        subtext="Flexible Staffing for Projects"
        description="We provide IT staff augmentation services to help you scale your team and meet your project deadlines."
        imgSrc="/img/index/add-user.svg"
        imgAlt="web with avatar and plus sign icon"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Staff Augmentation Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Staff Augmentation Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Staff Augmentation Services Ecosystem"
        description="The Staff Augmentation Services Ecosystem is a multifaceted network that enables organizations to scale their IT teams flexibly and efficiently. This ecosystem comprises various models and approaches to staff augmentation, each designed to meet specific project needs and organizational goals. Understanding these components is crucial for businesses seeking to leverage staff augmentation for enhanced project outcomes and operational efficiency."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
