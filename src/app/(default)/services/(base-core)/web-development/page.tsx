import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "web-development";

export const metadata: Metadata = {
  title: `Web Development Services • Halfnine`,
  description: `We develop websites that are tailored to your business needs. Contact us to learn more about how we can help you grow.`,
  alternates: {
    canonical: `https://www.halfnine.com/services/${slug}`,
  },
  openGraph: {
    url: `https://www.halfnine.com/services/${slug}`,
  },
};

const Page = () => {
  return (
    <>
      <CustomHero
        heading="Web Development Services"
        subtext="Develop your website with us"
        description="Our web development services are designed to help you create a website or web application for your business needs and goals."
        imgSrc="/img/hero.svg"
        imgAlt="Woman coding on a laptop with a cup of coffee on her hand with a html tag icon in the cup"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Web Development Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Web Development Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Web Development Services Ecosystem"
        description="The Web Development Services Ecosystem is a vibrant and dynamic network where developers, businesses, and digital platforms converge to enhance utility and foster innovation. At its core, this ecosystem functions like a natural habitat where collaboration, competition, and mutual reliance drive technological advancement and service improvement."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
