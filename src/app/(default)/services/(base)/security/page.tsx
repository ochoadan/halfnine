import CustomHero from "@/components/Global/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "security";

export const metadata: Metadata = {
  title: `Cybersecurity Professional Services`,
  description: `We help you keep your data and applications secure by implementing security and compliance industry standards`,
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
        heading="Cybersecurity Professional Services"
        subtext="Stop unwanted surprises"
        description="We help you keep your data and applications secure by implementing security and compliance industry standards."
        imgSrc="/img/index/security.svg"
        imgAlt="Man and shield icon protecting application"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Cybersecurity Professional Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Cybersecurity Professional Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Cybersecurity Professional Services Ecosystem"
        description="Navigating the complexities of the cybersecurity professional services ecosystem requires an understanding of its diverse components and stakeholders. This ecosystem is a dynamic network that includes a range of entities such as cybersecurity firms, regulatory bodies, certification authorities, and the organizations they serve. Each plays a crucial role in establishing a robust cybersecurity framework that protects sensitive information and supports national security."
        conclusion="Understanding the cybersecurity professional services ecosystem is not just about recognizing the variety of services available; it’s about seeing the value in partnering with providers that understand your unique cybersecurity challenges and are committed to solving them. By focusing on tailored solutions that address individual issues, needs, wants, and pain points, we underscore the significance of choosing the right cybersecurity partner. For organizations looking to navigate the complexities of cyber threats and safeguard their digital assets, exploring professional services tailored to meet these needs is critical. If you find yourself seeking guidance or solutions to strengthen your cybersecurity posture, we invite you to contact us for professional support tailored to your specific requirements."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
