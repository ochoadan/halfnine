import TechnologyInfo from "@/components/services/technologyInfoHero";
import SolutionCheckListEven from "@/components/services/solutionCheckListTwice";
import SolutionIconListThrice from "@/components/services/solutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/solutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "OCaml";
const slug = "ocaml";

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
      <TechnologyInfo
        technology={technology}
        message={message}
        imgSrc={`/img/services/${slug}.svg`}
      />
      <SolutionCheckListEven
        background="dark"
        heading={`Benefits of Custom ${technology} Solutions`}
        description="OCaml's unique capabilities provide substantial benefits for custom software solutions, making it a preferred choice for various development needs. Here are some of the key advantages:"
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
        description="The OCaml ecosystem is a comprehensive environment that supports various aspects of software development, catering to a wide range of programming needs. This ecosystem is not only about tools but also about the community."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
