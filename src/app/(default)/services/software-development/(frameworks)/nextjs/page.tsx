import TechnologyInfo from "@/components/services/technologyInfoHero";
import SolutionCheckListEven from "@/components/services/solutionCheckListTwice";
import SolutionIconListThrice from "@/components/services/solutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/solutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "Next.js";
const slug = "nextjs";

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
        description="Next.js, a robust React framework, is designed to enhance front-end development, offering a variety of features that cater to bespoke web application needs. Its capabilities range from automatic code splitting which ensures efficient loading times, to server-side rendering (SSR) that improves the performance of web applications by rendering pages on the server rather than on the client-side. This results in significantly faster page loads, which is crucial for retaining user engagement and improving the overall user experience."
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
        description="The Next.js ecosystem is a comprehensive suite designed to enhance web development through its various components and features. Central to this ecosystem is its robust server-side capabilities, primarily through the use of Server Components, which are employed by default to boost application performance. This approach ensures that the heavy lifting is done on the server, reducing the load on the client side, which is crucial for maintaining fast and responsive applications."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
