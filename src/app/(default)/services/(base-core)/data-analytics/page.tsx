import CustomHero from "@/components/Global/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "data-analytics";

export const metadata: Metadata = {
  title: `Data Analytics Services • Halfnine`,
  description: `We help you analyze your data to gain valuable insights and make informed decisions. Our data analytics services include data visualization, predictive analytics, and data warehousing.`,
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
        heading="Data Analytics Services"
        subtext="Inform Your Decisions With Data"
        description="We help you analyze your data to gain valuable insights and make informed decisions."
        imgSrc="/img/index/data-report.svg"
        imgAlt="person hoding a report with data analytics graphs and charts"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Data Analytics Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Data Analytics Services"
        description="Data analytics services are essential for organizations aiming to leverage data for strategic advantage. These services encompass a broad spectrum of activities, each designed to address specific aspects of data handling and analysis. Here are six key services integral to the data analytics domain:"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Data Analytics Services Ecosystem"
        description="Navigating the complex landscape of data and analytics can be daunting for organizations. They often grapple with understanding which data topic or area to prioritize. A foundational grasp of the core data disciplines is essential, and it points towards deeper explorations through various Info-Tech blueprints."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
