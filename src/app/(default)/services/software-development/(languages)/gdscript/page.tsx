import TechnologyInfoHero from "@/components/services/TechnologyInfoHero";
import SolutionCheckListEven from "@/components/services/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/SolutionBaseListOnce";
import ContactBar from "@/components/services/contactBar";
import { Metadata } from "next";
import { dataV1, dataV2, dataV3, dataFAQ } from "./pageData";
import ServicesFAQ from "@/components/services/faq";

const technology = "GDScript";
const slug = "gdscript";

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
        description="GDScript's simplicity and similarity to Python make it an excellent choice for developers who are already familiar with Python, ensuring a smooth transition and shorter learning curve. This ease of use is complemented by GDScript's automatic memory management and garbage collection, which significantly reduces the overhead associated with manual memory handling typically seen in more complex programming languages."
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
        description="The GDScript ecosystem, integral to the Godot Engine, offers a robust platform for both 2D and 3D game development. It's renowned for its open-source nature under the MIT license, allowing for extensive customization and improvement by its community. This ecosystem supports multiple programming languages including GDScript, C#, VisualScript, and C++, ensuring versatility for developers."
        features={dataV3}
      />
      <ServicesFAQ features={dataFAQ} />
      <ContactBar technology={technology} message={message} />
    </>
  );
};

export default Page;
