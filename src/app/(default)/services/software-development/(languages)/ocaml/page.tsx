import TechnologyInfoHero from "@/components/services/TechnologyHero";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";
import ContactForm from "@/components/Global/ContactForm";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const technology = "OCaml";
const slug = "ocaml";

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
        description="OCaml's unique capabilities provide substantial benefits for custom software solutions, making it a preferred choice for various development needs. Here are some of the key advantages:"
        features={dataV1}
      />
      <SolutionIconListThrice
        heading={`Key ${technology} Development Services`}
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="The OCaml ecosystem is a comprehensive environment that supports various aspects of software development, catering to a wide range of programming needs. This ecosystem is not only about tools but also about the community."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactForm addContainer addPadding addDivider="top" />
    </>
  );
};

export default Page;
