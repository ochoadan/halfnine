import TechnologyInfo from "@/components/services/technologyInfoHero";
import SolutionCheckListEven from "@/components/services/solutionCheckListTwice";
import SolutionIconListThrice from "@/components/services/solutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/solutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "Blazor";

export const metadata: Metadata = {
  title: `${technology} Software Development Company | Custom ${technology} Solutions`,
  description: `Looking for a ${technology} development Partner? Our team builds secure, scalable enterprise applications using the latest ${technology} technologies.`,
  alternates: {
    canonical: "https://www.halfnine.com/services/software-development/blazor",
  },
};

const Page = () => {
  const message = `I need professional ${technology} development services.`;
  return (
    <>
      <TechnologyInfo
        technology={technology}
        message={message}
        imgSrc="/img/services/blazor.svg"
      />
      <SolutionCheckListEven
        background="dark"
        heading={`Benefits of Custom ${technology} Solutions`}
        description="Blazor custom software development offers a myriad of advantages tailored to meet specific business needs while leveraging the robust capabilities of C#. Below are some key benefits:"
        features={dataV1}
      />
      <SolutionIconListThrice
        background="light"
        heading={`Key ${technology} Development Services`}
        features={dataV2}
      />
      <SolutionBaseListOnce
        background="dark"
        heading={`The ${technology} Ecosystem`}
        description="The Blazor ecosystem, powered by Microsoft, offers a robust framework for developing dynamic web applications using C# and HTML across various programming models. This versatility is evident in its two primary hosting models: Blazor Server and Blazor WebAssembly."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
