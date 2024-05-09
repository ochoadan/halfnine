import TechnologyInfo from "@/components/services/technologyInfoHero";
import SolutionCheckListEven from "@/components/services/solutionCheckListTwice";
import SolutionIconListThrice from "@/components/services/solutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/solutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "Rust";
const slug = "rust";

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
        description="Rust's rise as the most loved language since 2016, according to Stack Overflow Developer Surveys, highlights its significant appeal among developers. A staggering 86.1% of developers currently using Rust express a desire to continue utilizing it in the upcoming year. This preference stems from Rust's unique features, such as its memory safety in a compiled, real systems programming language without the need for garbage collection or a complex runtime system."
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
        description="The Rust Ecosystem is a robust framework supporting the development and deployment of applications across various platforms. Central to this ecosystem is the Rust compiler, rustc, which efficiently compiles .rs files into binaries and other intermediate formats, ensuring high performance and security. Developers rely on Cargo, the Rust dependency manager and build tool, for managing project dependencies from sources like https://crates.io, and for utilizing its built-in test runner to execute unit tests."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
