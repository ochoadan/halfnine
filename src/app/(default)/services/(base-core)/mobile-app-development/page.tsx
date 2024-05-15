import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "mobile-app-development";

export const metadata: Metadata = {
  title: `Mobile App Development Services • Halfnine`,
  description: `We develop mobile apps that are tailored to your business needs. Contact us to learn more about how we can help you grow.`,
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
        heading="Mobile App Development Services"
        subtext="Develop your mobile app with us"
        description="We help you build mobile apps that are tailored to your business and client needs. "
        imgSrc="/img/index/mobileAppDevelopment.svg"
        imgAlt="two people working on a mobile app on a phone"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Mobile App Development Services"
        description="Mobile app development services offer a plethora of advantages that can significantly enhance business operations and customer relations. Here are some key benefits:"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Mobile App Development Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Mobile App Development Services Ecosystem"
        description="The mobile app development services ecosystem is a complex network of components that work together to support the creation, launch, and maintenance of mobile applications. This ecosystem includes a variety of elements such as development tools and platforms, app stores, and distribution platforms, which are crucial for the successful deployment of mobile apps."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
