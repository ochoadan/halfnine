import TechnologyInfoHero from "@/components/services/TechnologyHero";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";
import ContactForm from "@/components/Global/ContactForm";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const technology = ".NET";
const slug = "dotnet";

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
        description="Custom .NET solutions are pivotal for businesses aiming to optimize their operational efficiency and strategic growth. These solutions are not only tailored to the unique needs of a business but also integrate seamlessly with existing systems, enhancing overall productivity and scalability. Here’s an in-depth look at why investing in custom .NET solutions is beneficial for enterprises:"
        features={dataV1}
      />
      <SolutionIconListThrice
        heading={`Key ${technology} Development Services`}
        description="A .NET software development company offers a wide array of services designed to cater to various business needs, ensuring custom solutions that enhance operational efficiency and strategic growth. Below is a detailed look at the key .NET development services available:"
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading={`The ${technology} Ecosystem`}
        description="The .NET ecosystem is a comprehensive and versatile platform that supports a wide array of programming languages and tools, making it an ideal choice for developers looking to build robust, scalable applications across various operating systems. Here, we explore the key components and features of the .NET ecosystem that enable developers to create high-performance applications efficiently."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactForm addContainer addPadding addDivider="top" />
    </>
  );
};

export default Page;
