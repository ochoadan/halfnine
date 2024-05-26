import CustomHero from "@/components/Global/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "data-visualization";

export const metadata: Metadata = {
  title: `Data Visualization Services • Halfnine`,
  description: `Visualize your data with us. We provide data visualization services to help you understand your data better.`,
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
        heading="Data Visualization Services"
        subtext="Make Data-Driven Decisions"
        description="We provide data visualization services that help you visualize your data and gain actionable insights."
        imgSrc="/img/index/data-report.svg"
        imgAlt="person hoding a report with data analytics graphs and charts"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Data Visualization Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Data Visualization Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Data Visualization Services Ecosystem"
        description="In the rapidly evolving field of data visualization, the ecosystem encompasses a broad range of tools and solutions designed to transform complex datasets into actionable insights. This ecosystem is supported by numerous platforms, each offering unique capabilities to cater to different needs and industries."
        conclusion="Factors to consider when selecting a data visualization tool include ease of use, data connectivity, types of visualizations, interactivity, customization, collaboration capabilities, and integration with existing systems. It's crucial to choose a tool that not only fits the technical environment but also scales with the organization's growing data needs."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
