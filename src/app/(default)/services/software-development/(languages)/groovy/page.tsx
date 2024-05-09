import TechnologyInfoHero from "@/components/services/TechnologyInfoHero";
import SolutionCheckListEven from "@/components/services/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/SolutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "Groovy";
const slug = "groovy";

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
        description="Custom Groovy solutions are meticulously tailored to meet the unique needs of businesses, ensuring flawless alignment with organizational processes and objectives. These bespoke solutions offer several advantages:"
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
        description="The Groovy Ecosystem offers a robust and versatile environment for software development, empowering developers with tools and libraries that enhance productivity and innovation. Central to this ecosystem is the integration with the Java Virtual Machine (JVM), which allows Groovy to leverage the extensive library support available, making it a powerful choice for enterprise applications."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
