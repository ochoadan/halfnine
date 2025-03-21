import TechnologyInfoHero from "@/components/services/TechnologyHero";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";
import ContactForm from "@/components/Global/ContactForm";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const technology = "Node.js";
const slug = "nodejs";

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
        description="Node.js is highly valued for its efficiency and versatility, making it a top choice for developers looking to create robust applications. This JavaScript runtime is built on Chrome's V8 JavaScript engine, which enhances its performance by converting JavaScript code directly into machine code that the computer's processor can execute. Such capabilities make Node.js particularly suitable for projects requiring quick processing and handling multiple tasks simultaneously."
        features={dataV1}
      />
      <SolutionIconListThrice
        heading={`Key ${technology} Development Services`}
        description="Offering a full spectrum of Node.js development services, we cater to all your web and mobile application needs. Our expertise spans across various domains, ensuring robust, scalable, and efficient solutions tailored to meet your business requirements."
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="Node.js boasts a robust ecosystem, underpinned by npm, the default package manager and a marketplace brimming with open-source JavaScript tools. This ecosystem is not only vast but also actively supported by major tech giants like IBM, Microsoft, and PayPal, ensuring continuous growth and reliability."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactForm addContainer addPadding addDivider="top" />
    </>
  );
};

export default Page;
