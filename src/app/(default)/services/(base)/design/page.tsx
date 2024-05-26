import CustomHero from "@/components/Global/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "design";

export const metadata: Metadata = {
  title: `UI/UX Design Services • Halfnine`,
  description: `Halfnine offers UI/UX design services that help businesses stand out from the competition. Our design experts create engaging user experiences that drive conversions.`,
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
        heading="UI/UX Design Services"
        subtext="Stand Out From the Competition"
        description="Create beautiful and engaging user experiences that drive conversions and set your business apart."
        imgSrc="/img/index/scalemodel.svg"
        imgAlt="Woman showing a scale model of a building"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of UI/UX Design Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key UI/UX Design Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The UI/UX Design Services Ecosystem"
        description="The UI/UX Design Services Ecosystem is a comprehensive network that integrates various elements critical to the development of user-centered digital products. This ecosystem encompasses professionals, processes, and technologies that collectively enhance the user experience. UI/UX designers are pivotal in this ecosystem, crafting interfaces that are not only visually appealing but also user-friendly, ensuring that digital products are accessible and enjoyable to use."
        conclusion="In this intricate ecosystem, UI/UX designers are essential for bridging the gap between users and technology, ensuring that every interaction is intuitive and effective. By understanding and implementing the elements of this ecosystem, businesses can create superior products that fulfill user expectations and drive engagement."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
