import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/faq";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/solutionCheckListEven";
import SolutionIconListThrice from "@/components/services/solutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/solutionBaseListOnce";

const slug = "consulting";

export const metadata: Metadata = {
  title: `Information Technology (IT) Consulting Services`,
  description: `Don't get lost or stuck by the overwhelming world of software development. Let us help you find the right path to success.`,
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
        heading="Information Technology (IT) Consulting Services"
        subtext="Find your roadmap to success"
        description="Don't get lost or stuck by the overwhelming world of software development. Let us help you find the right path to success."
        imgSrc="/img/index/roadmap.svg"
        imgAlt="User finding the right path to success with a roadmap"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Service Scope and Methodology"
        description="IT consulting services encompass a wide range of activities designed to enhance the efficiency and effectiveness of an organization's IT infrastructure. These services are structured to address various aspects of technology management and improvement, from initial planning to final implementation."
        features={Data1}
      />
      <SolutionIconListThrice
        background="light"
        heading="Types of IT Consulting Services"
        description="IT consulting encompasses a diverse range of services designed to address various aspects of technology within an organization. Each type of service focuses on specific areas of IT to enhance business operations, mitigate risks, and drive innovation. Here, we explore the primary categories of IT consulting services that can help organizations meet their technological and strategic needs."
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="Evaluating Your IT Needs"
        description="Evaluating your IT needs is a critical step in ensuring that your technology investments are both strategic and effective. This process helps in aligning your IT infrastructure with your business goals, ultimately supporting growth and efficiency."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
