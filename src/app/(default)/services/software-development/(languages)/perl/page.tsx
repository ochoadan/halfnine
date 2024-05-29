import TechnologyInfoHero from "@/components/services/TechnologyHero";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";
import ContactForm from "@/components/Global/ContactForm";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const technology = "Perl";
const slug = "perl";

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
        description="Custom Perl solutions harness the inherent strengths of Perl as a programming language to offer tailored, efficient, and effective services for diverse business needs. Here’s a detailed look at the benefits:"
        features={dataV1}
      />
      <SolutionIconListThrice
        heading={`Key ${technology} Development Services`}
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="The Perl Ecosystem revolves around the Comprehensive Perl Archive Network (CPAN), a vast repository that houses an extensive collection of libraries and modules. These resources empower developers by allowing them to efficiently reuse pre-written code for various common tasks, ultimately enhancing productivity and fostering innovation. CPAN is more than just a tool; it’s a dynamic part of the Perl community, known for its active engagement and collaborative spirit."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactForm addContainer addPadding addDivider="top" />
    </>
  );
};

export default Page;
