import CustomHero from "@/components/Global/CustomHero";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { Metadata } from "next";
import { Data1, Data2, Data3, FAQData } from "./pageData";
import SolutionCheckListEven from "@/components/services/list/SolutionCheckListEven";
import SolutionIconListThrice from "@/components/services/list/SolutionIconListThrice";
import SolutionBaseListOnce from "@/components/services/list/SolutionBaseListOnce";

const slug = "ecommerce";

export const metadata: Metadata = {
  title: `Ecommerce Services • Halfnine`,
  description: `We provide ecommerce services to help you build, optimize, and scale your online store, ensuring it delivers a seamless shopping experience to your customers.`,
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
        heading="Ecommerce Services"
        subtext="Sell Through The Web With Ease"
        description="We provide ecommerce services to help you build, optimize, and scale your online store, ensuring it delivers a seamless shopping experience to your customers."
        imgSrc="/img/index/empty-cart.svg"
        imgAlt="user hoding a sheet of paper beside a shopping cart"
      />
      <SolutionCheckListEven
        background="gray"
        heading="Benefits of Ecommerce Services"
        features={Data1}
      />
      <SolutionIconListThrice
        heading="Key Ecommerce Services"
        features={Data2}
      />
      <SolutionBaseListOnce
        background="gray"
        heading="The Ecommerce Services Ecosystem"
        description="The Ecommerce Services Ecosystem encompasses a comprehensive network of tools and services designed to optimize the online selling and buying experience. Central to this ecosystem is the integration of ecommerce platforms with various online marketplaces such as Amazon, eBay, and Etsy. This integration facilitates the synchronization of product listings, inventory, and orders, enhancing operational efficiency by providing a centralized platform for managing multiple sales channels."
        conclusion="By leveraging these components, businesses can create a robust ecommerce ecosystem that supports sustained growth and customer satisfaction. For businesses looking to enhance their ecommerce capabilities, integrating these elements effectively is key to creating a seamless operational environment that meets the needs of modern consumers. For assistance in implementing these integrations, contact us to discover how our services can address your specific needs and challenges."
        features={Data3}
      />
      <ServicesFAQ features={FAQData} />
    </>
  );
};

export default Page;
