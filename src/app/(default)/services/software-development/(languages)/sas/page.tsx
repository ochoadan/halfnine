import TechnologyInfoHero from "@/components/services/TechnologyHero";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";
import ContactForm from "@/components/Global/ContactForm";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const technology = "SAS";
const slug = "sas";

export const metadata: Metadata = {
  title: `${technology} Development Company | Halfnine`,
  description: `Looking for a ${technology} development Partner? Our professional ${technology} developers can build custom ${technology} solutions for your business.`,
  alternates: {
    canonical: `https://www.halfnine.com/services/software-development/${slug}`,
  },
  openGraph: {
    url: `https://www.halfnine.com/services/software-development/${slug}`,
  },
};

const Page = () => {
  const message = `I need professional ${technology} development services.`;
  return (
    <>
      <TechnologyInfoHero
        technology={technology}
        message={message}
        imgSrc={`/img/services/${slug}.svg`}
      />
      <SolutionCheckListEven
        background="gray"
        heading={`Benefits of Custom ${technology} Solutions`}
        description="Custom SAS software development offers a multitude of benefits that can significantly enhance a business’s operational efficiency and provide a competitive edge in the market. Here are six key areas where these advantages manifest:"
        features={dataV1}
      />
      <SolutionIconListThrice
        heading={`Key ${technology} Development Services`}
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="The SAS Ecosystem is a comprehensive suite of software and services designed to meet the diverse needs of various industries through advanced analytics, data management, and business intelligence. Central to this ecosystem are the SAS programming languages such as SAS Base, SAS/STAT, and SAS/GRAPH, which require specific licenses like SAS Studio Analyst or SAS Studio Engineer to operate effectively."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactForm addContainer addPadding addDivider="top" />
    </>
  );
};

export default Page;
