import TechnologyInfo from "@/components/services/TechnologyHero";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";
import ContactForm from "@/components/Global/ContactForm";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const technology = "iOS App";
const slug = "ios";

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
      <TechnologyInfo
        technology={technology}
        message={message}
        imgSrc={`/img/services/${slug}.svg`}
      />
      <SolutionCheckListEven
        background="gray"
        heading={`Benefits of ${technology} Development Companies`}
        description="In the realm of mobile technology, iOS app development stands as a beacon for quality, security, and innovation. Companies that align with iOS app development companies can reap a multitude of benefits, pivotal for both the business and its clientele. Here's a closer examination of these advantages:"
        features={dataV1}
      />
      <SolutionIconListThrice
        heading={`Key Services Offered by an ${technology} Development Company`}
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Development Services Ecosystem`}
        description="The iOS App Development Services Ecosystem is a dynamic and evolving space that significantly impacts how businesses approach mobile app development. This ecosystem is shaped by various factors, including the latest technological trends, market demands, and the continuous need for innovative solutions. Here's an overview of how these elements interplay to form a robust environment for iOS app development:"
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactForm addContainer addPadding addDivider="top" />
    </>
  );
};

export default Page;
