import TechnologyInfoHero from "@/components/services/TechnologyInfoHero";
import SolutionCheckListEven from "@/components/services/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/SolutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "WordPress";
const slug = "wordpress";

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
        description="Custom WordPress solutions are tailored to align with a brand’s identity, offering a unique and professional-looking design that sets businesses apart from competitors. These solutions provide enhanced functionality, flexibility, and performance, allowing for a website that meets specific business needs. Here are some key benefits:"
        features={dataV1}
      />
      <SolutionIconListThrice
        background="light"
        heading={`Key ${technology} Development Services`}
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="WordPress has evolved into a comprehensive ecosystem that supports a wide range of web development and business needs. At the core, WordPress.org offers a self-hosted platform, allowing full control over websites with the ability to install on personal servers or through hosting providers. This flexibility has made WordPress a popular choice, used by 42.7% of all websites."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
