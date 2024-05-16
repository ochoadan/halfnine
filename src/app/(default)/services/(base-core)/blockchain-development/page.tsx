import CustomHero from "@/components/services/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "blockchain-development";

export const metadata: Metadata = {
  title: `Blockchain Development Services • Halfnine`,
  description: `Develop your blockchain with us. Secure transactions and create decentralized applications with our blockchain development services.`,
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
        heading="Blockchain Development Services"
        subtext="Create Secure Transactions"
        description="De-centralize transaction systems and create secure applications with our blockchain development services."
        imgSrc="/img/index/blockchain.svg"
        imgAlt="Man Standing besides a diagram representing blockchain technology"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Blockchain Development Services"
        description="Blockchain development services cater to a variety of needs, each tailored to specific business requirements. The following are key services offered by blockchain development companies:"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Blockchain Development Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Blockchain Development Services Ecosystem"
        description="The Blockchain Development Services Ecosystem encompasses a dynamic and rapidly evolving landscape, driven by a variety of factors that contribute to its growth and complexity. Key among these factors is the competitive analysis of the market, which involves assessing the market share and strategies of major players. This analysis helps in understanding the strengths, weaknesses, and competitive dynamics within the industry."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
