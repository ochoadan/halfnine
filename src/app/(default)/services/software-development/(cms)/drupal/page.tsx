import TechnologyInfoHero from "@/components/services/TechnologyInfoHero";
import SolutionCheckListEven from "@/components/services/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/SolutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "Drupal";
const slug = "drupal";

export const metadata: Metadata = {
  title: `${technology} Software Development Company | Custom ${technology} Solutions`,
  description: `Looking for a ${technology} development Partner? Our team builds secure, scalable enterprise applications using the latest ${technology} technologies.`,
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
        description="Custom Drupal development services are tailored to meet the unique needs of businesses across various industries, from e-commerce to healthcare. By creating custom modules, themes, and distributions, these services ensure that every aspect of a Drupal-based website aligns with the specific business requirements and objectives."
        features={dataV1}
      />
      <SolutionIconListThrice
        background="light"
        heading={`Key ${technology} Development Services`}
        description=""
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="The Drupal Ecosystem is a vibrant and expansive network that supports a wide range of applications and industries, underpinned by an active community of contributors and a robust set of tools. This ecosystem is not just about the software itself but also about the comprehensive support and resources available to users and developers alike."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
