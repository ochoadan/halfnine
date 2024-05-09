import CustomHero from "@/components/services/CustomHero";
import { Metadata } from "next";

const slug = "cloud";

export const metadata: Metadata = {
  title: `Cloud Managed Services Company`,
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
        heading="Cloud Managed Services Company"
        technology="Cloud"
        imgSrc="/img/index/cloudhero.svg"
      />
    </>
  );
};

export default Page;
