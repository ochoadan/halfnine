import TechnologyInfo from "@/components/services/technologyInfoHero";
import SolutionCheckListEven from "@/components/services/solutionCheckListTwice";
import SolutionIconListThrice from "@/components/services/solutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/solutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

export const metadata: Metadata = {
  title: ".NET Software Development Company | Custom .NET Solutions",
  description:
    "Looking for a .NET development Partner? Our team builds secure, scalable enterprise applications using the latest .NET technologies.",
  alternates: {
    canonical: "https://www.halfnine.com/services/software-development/dotnet",
  },
};

const Page = () => {
  const technology = ".NET";
  const message = `I need professional ${technology} development services.`;
  return (
    <>
      <TechnologyInfo
        technology={technology}
        message={message}
        imgSrc="/img/dotnet.svg"
      />
      <SolutionCheckListEven
        background="dark"
        heading="Why Custom .NET Solutions Matter"
        description="Custom .NET solutions are pivotal for businesses aiming to optimize their operational efficiency and strategic growth. These solutions are not only tailored to the unique needs of a business but also integrate seamlessly with existing systems, enhancing overall productivity and scalability. Here’s an in-depth look at why investing in custom .NET solutions is beneficial for enterprises:"
        features={dataV1}
      />
      <SolutionIconListThrice
        background="light"
        heading="Key .NET Development Services"
        description="A .NET software development company offers a wide array of services designed to cater to various business needs, ensuring custom solutions that enhance operational efficiency and strategic growth. Below is a detailed look at the key .NET development services available:"
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="dark"
        heading="The .NET Ecosystem"
        description="The .NET ecosystem is a comprehensive and versatile platform that supports a wide array of programming languages and tools, making it an ideal choice for developers looking to build robust, scalable applications across various operating systems. Here, we explore the key components and features of the .NET ecosystem that enable developers to create high-performance applications efficiently."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
