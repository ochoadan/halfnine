import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "cloud";

export const metadata: Metadata = {
  title: `Cloud Consulting Services • Halfnine`,
  description: `We provide cloud managed services to help you manage your cloud infrastructure and applications, ensuring they are secure, scalable, and optimized for performance`,
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
        heading="Cloud Consulting Services"
        technology="Cloud"
        subtext="Maintain Your Cloud Infrastructure With Ease"
        imgSrc="/img/index/cloudhero.svg"
        imgAlt="person holding squares with icons of popular cloud providers"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Cloud Consulting Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Cloud Consulting Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Cloud Consulting Services Ecosystem"
        description="The cloud consulting services ecosystem is a complex network of interdependent components that collectively enable efficient cloud services. This ecosystem is akin to a natural environment where various elements are interconnected, each playing a crucial role in the overall functionality of the system. Central to this ecosystem is the public cloud provider, which acts as the backbone, supporting various other services and applications."
        conclusion="This ecosystem not only supports the technical aspects of cloud computing but also fosters a collaborative environment that drives innovation and growth. By understanding the intricacies of this ecosystem, businesses can better navigate their cloud journey, leveraging the right mix of services and models to achieve optimal performance and scalability."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
