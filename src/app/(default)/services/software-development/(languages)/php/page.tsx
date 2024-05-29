import TechnologyInfoHero from "@/components/services/TechnologyHero";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";
import ContactForm from "@/components/Global/ContactForm";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const technology = "PHP";
const slug = "php";

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
        features={dataV1}
      />
      <SolutionIconListThrice
        heading={`Key ${technology} Development Services`}
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="The PHP ecosystem is robust and diverse, supporting a wide range of development needs with its extensive tools and resources. The most widely used PHP versions include 7.4, 8.1, and 8.0, reflecting ongoing community support and development. For local development environments, a significant 71% of developers prefer this setup, enhancing their control and flexibility during the development process."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactForm addContainer addPadding addDivider="top" />
    </>
  );
};

export default Page;
